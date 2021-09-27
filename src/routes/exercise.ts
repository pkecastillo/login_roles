import ExerciseController from "../controller/ExerciseController";
import { Router } from "express";

const router = Router()

//Get all exercises
router.get('/', ExerciseController.getAll);

//Create a new exercise
router.post('/', ExerciseController.newExercise);

//Edit exercise
router.patch('/:id', ExerciseController.editExercise);

//Delete a exercise
router.delete('/:id', ExerciseController.deleteExercise);

export default router;


