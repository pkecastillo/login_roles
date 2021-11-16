import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { MuscleGroup } from "../entity/MuscleGroup";

export class MuscleGroupController {
  //Get all muscle groups
  static getAll = async (req: Request, res: Response) => {
    console.log("ENTRA AL CONTROLADOR-----------------");
    const muscleGroupRepository = getRepository(MuscleGroup);
    let muscleGroup;

    try {
      muscleGroup = await muscleGroupRepository.find();
      res.send(muscleGroup);
    } catch (e) {
      res.status(404).json({ message: "Something goes wrong!" });
    }
  };
}

export default MuscleGroupController;
