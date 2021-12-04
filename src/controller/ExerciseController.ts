import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Exercise } from "../entity/Exercise";
import { validate } from "class-validator";

export class ExerciseController {
  //Get all exercises
  static getAll = async (req: Request, res: Response) => {
    const exerciseRepository = getRepository(Exercise);
    let exercise;

    try {
      exercise = await exerciseRepository.find();
      res.send(exercise);
    } catch (e) {
      res.status(404).json({ message: "Something goes wrong" });
    }

    // if(exercise.length > 0){
    //     res.send(exercise);
    // }else{
    //     res.status(404).json({message: 'Not result'});
    // }
  };

  //TODO: NO ANDA LA VALIDACION SI EXISTE EJERCICIO YA CREADO CON EL MISMO NOMBRE
  //Create a new exercise
  static newExercise = async (req: Request, res: Response) => {
    const { name, muscle_group, description } = req.body;
    const exercise = new Exercise();

    exercise.name = name;
    exercise.muscle_group = muscle_group;
    exercise.description = description;

    //validate
    // const validationOp = { validationError: { target: false, value: false}};
    // const errors = await validate(exercise, validationOp);
    // if(errors.length > 0){
    //     return res.status(400).json(errors);
    // }

    const exerciseRepository = getRepository(Exercise);
    try {
      await exerciseRepository.save(exercise);
    } catch (e) {
      return res.status(409).json({ message: "Something goes wrong" });
    }
    //all ok
    res.send("Exercise created");
  };

  //TODO: NO ANDA LA VALIDACION SI EXISTE EJERCICIO YA CREADO CON EL MISMO NOMBRE
  //Update exercise
  static editExercise = async (req: Request, res: Response) => {
    let exercise;
    const { id } = req.params;
    const { name, muscle_group, description } = req.body.data;

    const exerciseRepository = getRepository(Exercise);

    //Try get exercise
    try {
      exercise = await exerciseRepository.findOneOrFail(id);
      exercise.name = name;
      exercise.muscle_group = muscle_group;
      exercise.description = description;
    } catch (e) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    // const validationOp = { validationError: { target: false, value: false}};
    // const errors = await validate(exercise, validationOp);
    // if(errors.length > 0){
    //     return res.status(400).json(errors)
    // }

    //Try to save exercise
    try {
      await exerciseRepository.save(exercise);
    } catch (e) {
      return res.status(409).json({ message: "Exercise name already exists" });
    }

    res.status(201).json({ message: "Exercise update" });
  };

  //Delete exercise
  static deleteExercise = async (req: Request, res: Response) => {
    const { id } = req.params;
    const exerciseRepository = getRepository(Exercise);
    let exercise: Exercise;

    try {
      exercise = await exerciseRepository.findOneOrFail(id);
    } catch (e) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    //Remove exercise
    exerciseRepository.delete(id);
    res.status(201).json({ message: "Exercise deleted" });
  };
}

export default ExerciseController;
