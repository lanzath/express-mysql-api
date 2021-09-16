import { Request, Response, Router } from 'express';
import { ScheduleController } from './Controllers/ScheduleController';

const router = Router();

const scheduleController = new ScheduleController();

router.post('/schedule', scheduleController.newSchedule);

export { router };
