import { IPet } from '../interfaces/IPet';
import { Request, Response } from 'express';
import connection from '../database/connection';
import fileUpload from '../../src/files/fileUpload'

export class Pet {

  public store(pet: IPet, req: Request, res: Response): void {
    const query = `INSERT INTO Pets SET ?`;

    fileUpload(pet.image, pet.name, (newPath) => {
      const newPet = { name: pet.name, image: newPath }

      connection.query(query, newPet, (err, results) => {
        if (err) res.status(400).json(err);
        else res.status(201).json(newPet);
      });
    });
  }
}
