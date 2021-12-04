import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Plancontent } from "../entity/PlanContent";

export class PlanController {
  static getPlan = async (req: Request, res: Response) => {
    const { plan_id } = req.params;
    const planRepository = getRepository(Plancontent);
    let plans;

    try {
      plans = await planRepository.find({
        relations: ["exercise", "planhead"],
        where: { planhead: { id: plan_id } },
        order: { session: "ASC" },
      });
      res.send(plans);
    } catch (e) {
      res.status(404).json({ message: "Something goes wrong" });
    }
  };
}

export default PlanController;
