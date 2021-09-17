import { Router } from 'express';
import { ScheduleController } from './Controllers/ScheduleController';

export const router = Router();

const scheduleController = new ScheduleController();

router.get('/schedule', scheduleController.index);
router.get('/schedule/:id', scheduleController.show);
router.post('/schedule', scheduleController.newSchedule);
router.patch('/schedule/:id', scheduleController.editSchedule);
router.delete('/schedule/:id', scheduleController.destroySchedule);
