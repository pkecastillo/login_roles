import ExerciseController from "../controller/ExerciseController";
import { Router } from "express";

const exerciseRouter = Router();

//Get all exercises
exerciseRouter.get("/", ExerciseController.getAll);

//Create a new exercise
exerciseRouter.post("/", ExerciseController.newExercise);

//Edit exercise
exerciseRouter.put("/:id", ExerciseController.editExercise);

//Delete a exercise
exerciseRouter.delete("/:id", ExerciseController.deleteExercise);

export default exerciseRouter;
