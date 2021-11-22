import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { MuscleGroup } from "../entity/MuscleGroup";

export class MuscleGroupController {
  //Get all muscle groups
  static getAll = async (req: Request, res: Response) => {
    const muscleGroupRepository = getRepository(MuscleGroup);
    let muscleGroup;

    try {
      muscleGroup = await muscleGroupRepository.find();
      res.send(muscleGroup);
    } catch (e) {
      res.status(404).json({ message: "Something goes wrong!" });
    }
  };

  static newMuscleGroup = async (req: Request, res: Response) => {
    const { name, short_name } = req.body;
    const muscleGroup = new MuscleGroup();

    muscleGroup.name = name;
    muscleGroup.short_name = short_name;

    const muscleGroupRepository = getRepository(MuscleGroup);
    try {
      await muscleGroupRepository.save(muscleGroup);
    } catch (e) {
      return res.status(409).json({ message: "Something goes wrong" });
    }

    res.send("Muscle group created");
  };

  static editMuscleGroup = async (req: Request, res: Response) => {
    let muscleGroup;
    const { id } = req.params;
    const { name, short_name } = req.body;

    const muscleGroupRepository = getRepository(MuscleGroup);

    try {
      muscleGroup = await muscleGroupRepository.findOneOrFail(id);
      muscleGroup.name = name;
      muscleGroup.short_name = short_name;
    } catch (e) {
      return res.status(404).json({ message: "Muscle group not found" });
    }

    try {
      await muscleGroupRepository.save(muscleGroup);
    } catch (e) {
      return res.status(409).json({ message: "Muscle group already exists" });
    }

    res.status(201).json({ message: "Muscle group update" });
  };

  static deleteMuscleGroup = async (req: Request, res: Response) => {
    const { id } = req.params;
    const muscleGroupRepository = getRepository(MuscleGroup);
    let muscleGroup: MuscleGroup;

    try {
      muscleGroup = await muscleGroupRepository.findOneOrFail(id);
    } catch (e) {
      return res.status(404).json({ message: "Muscle group not found" });
    }

    muscleGroupRepository.delete(id);
    res.status(201).json({ message: "Muscle group deleted" });
  };
}

export default MuscleGroupController;
