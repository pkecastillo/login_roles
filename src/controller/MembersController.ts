import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Members } from "../entity/Members";

export class MembersController {
  static getMembers = async (req: Request, res: Response) => {
    const membersRepository = getRepository(Members);
    let members;

    try {
      members = await membersRepository.find();
      res.send(members);
    } catch (e) {
      res.status(404).json({ message: "Something goes wrong" });
    }
  };
}

export default MembersController;
