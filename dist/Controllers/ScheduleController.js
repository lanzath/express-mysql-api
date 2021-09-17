"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleController = void 0;
const Schedule_1 = require("../Models/Schedule");
class ScheduleController {
    index(req, res) {
        const schedule = new Schedule_1.Schedule();
        schedule.list(res);
    }
    newSchedule(req, res) {
        const { body } = req;
        const schedule = new Schedule_1.Schedule();
        schedule.store(body, req, res);
    }
    show(req, res) {
        const { id } = req.params;
        const schedule = new Schedule_1.Schedule();
        schedule.find(+id, res);
    }
    editSchedule(req, res) {
        const { id } = req.params;
        const schedule = new Schedule_1.Schedule();
        schedule.update(+id, req, res);
    }
    destroySchedule(req, res) {
        const { id } = req.params;
        const schedule = new Schedule_1.Schedule();
        schedule.delete(+id, req, res);
    }
}
exports.ScheduleController = ScheduleController;
