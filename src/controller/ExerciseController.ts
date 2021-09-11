import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { Exercise } from "../entity/Exercise";
// import { validate } from "class-validator";

export class ExerciseController {

    //Obtener listado completo de ejercicios
    static getAll = async (req: Request, res: Response) => {
        const exerciseRepository = getRepository(Exercise);
        let exercise;

        try{
            exercise = await exerciseRepository.find();
        }catch(e){
            res.status(404).json({message: 'Something goes wrong!'});
        }

        if(exercise.length > 0){
            res.send(exercise);
        }else{
            res.status(404).json({message: 'Not result'});
        }
    };

    //Crear nuevo ejercicio
    static newExercise = async (req: Request, res: Response) => {
        const {name, muscle_group, description} = req.body;
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
    
        const exerciseRepository = getRepository(Exercise)
        try{
            await exerciseRepository.save(exercise);
        }
        catch(e){
            return res.status(409).json({message: 'Something goes wrong'});
        }
        //all ok
        res.send('Exercise created');
    
    };

};


export default ExerciseController;