import MuscleGroupController from "../controller/MuscleGroupController";
import { Router } from "express";

const muscleGroupRouter = Router();

muscleGroupRouter.get("/", MuscleGroupController.getAll);

muscleGroupRouter.post("/", MuscleGroupController.newMuscleGroup);

muscleGroupRouter.patch("/:id", MuscleGroupController.editMuscleGroup);

muscleGroupRouter.delete("/:id", MuscleGroupController.deleteMuscleGroup);

export default muscleGroupRouter;
