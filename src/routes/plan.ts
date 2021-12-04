import PlanController from "../controller/PlanController";
import { Router } from "express";

const planRouter = Router();

planRouter.get("/:plan_id", PlanController.getPlan);

export default planRouter;
