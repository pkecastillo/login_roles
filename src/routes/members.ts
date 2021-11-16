import MembersController from "../controller/MembersController";
import { Router } from "express";

const router = Router();

//Get all members
router.get("/", MembersController.getMembers);

export default router;
