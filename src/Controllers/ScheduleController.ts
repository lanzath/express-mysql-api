import { Request, Response } from 'express';
import { Schedule } from '../Models/Schedule';

export class ScheduleController {

  public index(req: Request, res: Response) {
    const schedule = new Schedule();
    schedule.list(res);
  }

  public newSchedule(req: Request, res: Response): void {
    const { body } = req;
    const schedule = new Schedule();

    schedule.store(body, req, res);
  }

  public show(req: Request, res: Response): void {
    const { id } = req.params;
    const schedule = new Schedule();

    schedule.find(+id, res);
  }

  public editSchedule(req: Request, res: Response): void {
     const { id } = req.params;
     const schedule = new Schedule();

     schedule.update(+id, req, res);
  }

  public destroySchedule(req: Request, res: Response): void {
     const { id } = req.params;
     const schedule = new Schedule();

     schedule.delete(+id, req, res);
  }
}
