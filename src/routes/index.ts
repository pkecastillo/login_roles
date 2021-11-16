import { Router } from "express";
import router from "./auth";
import auth from "./auth";
import user from "./user";
import exercise from "./exercise";
import musclegroup from "./musclegroup";
import members from "./members";

const routes = Router();

routes.use("/auth", auth);
routes.use("/users", user);
routes.use("/exercise", exercise);
router.use("/musclegroup", musclegroup);
router.use("/members", members);

export default routes;
