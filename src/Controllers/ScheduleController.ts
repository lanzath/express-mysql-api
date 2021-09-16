import { Request, Response } from 'express';
import { Schedule } from '../Models/Schedule';

export class ScheduleController {

  public newSchedule(req: Request, res: Response): Response {
    const { body } = req;

    const schedule = new Schedule();

    return res.json(schedule.store(body)).status(201);
  }
}
