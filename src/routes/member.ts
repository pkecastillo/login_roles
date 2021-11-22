import MembersController from "../controller/MembersController";
import { Router } from "express";

const memberRouter = Router();

//Get all members
memberRouter.get("/", MembersController.getMembers);

//Create a new member
memberRouter.post("/", MembersController.newMember);

//Edit member
memberRouter.patch("/:id", MembersController.editMember);

//Delete a member
memberRouter.delete("/:id", MembersController.deleteMember);

export default memberRouter;
