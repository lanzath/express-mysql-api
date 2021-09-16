import { Router } from 'express';
import { ScheduleController } from './Controllers/ScheduleController';

export const router = Router();

const scheduleController = new ScheduleController();

router.post('/schedule', scheduleController.newSchedule);
