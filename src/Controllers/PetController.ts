import { Request, Response } from 'express';
import { Pet } from '../Models/Pet'

export class PetController {

  public newPet(req: Request, res: Response): void {
    const { body } = req;
    const pet = new Pet();

    pet.store(body, req, res);
  }
}