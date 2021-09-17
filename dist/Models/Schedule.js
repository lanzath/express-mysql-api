"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const connection_1 = __importDefault(require("../database/connection"));
class Schedule {
    list(res) {
        const sql = `SELECT * FROM Schedules`;
        connection_1.default.query(sql, (err, results) => {
            if (err)
                res.status(400).json(err);
            else
                res.status(200).json(results);
        });
    }
    store(schedule, req, res) {
        const now = new Date();
        const isValidDate = new Date(schedule.date) >= now;
        const isValidCustomer = schedule.customer.length >= 5;
        const validations = [
            { name: 'date', validate: isValidDate, message: 'Invalid date' },
            { name: 'customer', validate: isValidCustomer, message: 'Invalid name' },
        ];
        // returns only non valid fields.
        const errors = validations.filter(error => !error.validate);
        const hasErrors = errors.length;
        if (hasErrors) {
            return res.status(400).json(errors);
        }
        else {
            schedule = Object.assign(Object.assign({}, schedule), { createdAt: now });
            const sql = `INSERT INTO Schedules SET ?`;
            connection_1.default.query(sql, schedule, (err, results) => {
                if (err)
                    res.status(400).json(err);
                else
                    res.status(201).json(results);
            });
        }
    }
    find(id, res) {
        const sql = `SELECT * FROM Schedules WHERE id=?`;
        connection_1.default.query(sql, id, (err, results) => {
            const schedule = results[0];
            if (err)
                res.status(400).json(err);
            else
                res.status(200).json(schedule);
        });
    }
    update(id, req, res) {
        const sql = `UPDATE Schedules SET ? WHERE id=?`;
        const values = req.body;
        connection_1.default.query(sql, [values, id], (err, results) => {
            if (err)
                res.status(400).json(err);
            else
                res.status(200).json(results);
        });
    }
    delete(id, req, res) {
        const sql = `DELETE FROM Schedules WHERE id=?`;
        connection_1.default.query(sql, id, (err, results) => {
            if (err)
                res.status(400).json(err);
            else
                res.status(204).json(results);
        });
    }
}
exports.Schedule = Schedule;
