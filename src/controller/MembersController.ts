import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Member } from "../entity/Member";

export class MembersController {
  static getMembers = async (req: Request, res: Response) => {
    const membersRepository = getRepository(Member);
    let members;

    try {
      members = await membersRepository.find();
      res.send(members);
    } catch (e) {
      res.status(404).json({ message: "Something goes wrong" });
    }
  };

  static newMember = async (req: Request, res: Response) => {
    console.log("ENTRA AL CONTROLLER");
    const { name, lastname, telephone, birthday, address } = req.body;
    const member = new Member();

    member.name = name;
    member.lastname = lastname;
    member.telephone = telephone;
    member.birthday = birthday;
    member.address = address;

    const membersRepository = getRepository(Member);
    try {
      await membersRepository.save(member);
    } catch (e) {
      return res.status(409).json({ message: "Something goes wrong" });
    }

    res.send("Member created");
  };

  static editMember = async (req: Request, res: Response) => {
    let member;
    const { id } = req.params;
    const { name, lastname, telephone, birthday, address } = req.body;

    const membersRepository = getRepository(Member);

    try {
      member = await membersRepository.findOneOrFail(id);
      member.name = name;
      member.lastname = lastname;
      member.telephone = telephone;
      member.birthday = birthday;
      member.address = address;
    } catch (e) {
      return res.status(404).json({ message: "Member not found" });
    }

    try {
      await membersRepository.save(member);
    } catch (e) {
      return res.status(409).json({ message: "Member already exists" });
    }

    res.status(201).json({ message: "Member update" });
  };

  static deleteMember = async (req: Request, res: Response) => {
    const { id } = req.params;
    const membersRepository = getRepository(Member);
    let member: Member;

    try {
      member = await membersRepository.findOneOrFail(id);
    } catch (e) {
      return res.status(404).json({ message: "Member not found" });
    }

    membersRepository.delete(id);
    res.status(201).json({ message: "Member deleted" });
  };
}

export default MembersController;
