import MuscleGroupController from "../controller/MuscleGroupController";
import { Router } from "express";

const router = Router();

router.get("/", MuscleGroupController.getAll);

export default router;
