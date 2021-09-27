import { Router } from 'express';
import { PetController } from './Controllers/PetController';
import { ScheduleController } from './Controllers/ScheduleController';

export const router = Router();

// Schedule Resourceful Endpoints
const scheduleController = new ScheduleController();

router.get('/schedule', scheduleController.index);
router.get('/schedule/:id', scheduleController.show);
router.post('/schedule', scheduleController.newSchedule);
router.patch('/schedule/:id', scheduleController.editSchedule);
router.delete('/schedule/:id', scheduleController.destroySchedule);

// Pets Resourceful Endpoints
const petController = new PetController;

router.post('/pet', petController.newPet);
