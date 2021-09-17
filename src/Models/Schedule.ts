import { ISchedule } from '../interfaces/ISchedule';
import { Request, Response } from 'express';
import connection from '../database/connection';

export class Schedule {

  public list(res: Response): void {
    const sql = `SELECT * FROM Schedules`;

    connection.query(sql, (err, results) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(results);
    });
  }

  public store(schedule: ISchedule, req: Request, res: Response): any {
    const now = new Date();
    const isValidDate = new Date(schedule.date) >= now;
    const isValidCustomer = schedule.customer.length >= 5;

    const validations = [
      { name: 'date', validate: isValidDate, message: 'Invalid date' },
      { name: 'customer', validate: isValidCustomer, message: 'Invalid name'},
    ];

    // returns only non valid fields.
    const errors = validations.filter(error => !error.validate);
    const hasErrors = errors.length;

    if (hasErrors) {
      return res.status(400).json(errors);
    } else {
      schedule = {...schedule, createdAt: now}

      const sql = `INSERT INTO Schedules SET ?`;

      connection.query(sql, schedule, (err, results) => {
        if (err) res.status(400).json(err);
        else res.status(201).json(results);
      });
    }
  }

  public find(id: number, res: Response): void {
    const sql = `SELECT * FROM Schedules WHERE id=?`;

    connection.query(sql, id, (err, results) => {
      const schedule = results[0];
      if (err) res.status(400).json(err);
      else res.status(200).json(schedule);
    });
  }

  public update(id: number, req: Request, res: Response): void {
    const sql = `UPDATE Schedules SET ? WHERE id=?`;
    const values = req.body;

    connection.query(sql, [values, id], (err, results) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(results);
    });
  }

  public delete(id: number, req: Request, res: Response): void {
    const sql = `DELETE FROM Schedules WHERE id=?`;

    connection.query(sql, id, (err, results) => {
      if (err) res.status(400).json(err);
      else res.status(204).json(results);
    });
  }
}
