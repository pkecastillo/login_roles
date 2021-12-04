import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import routes from "./routes";
import exerciseRouter from "./routes/exercise";
import muscleGroupRouter from "./routes/musclegroup";
import memberRouter from "./routes/member";
import planRouter from "./routes/plan";
const PORT = process.env.PORT || 3000;

createConnection()
  .then(async () => {
    // create express app
    const app = express();
    // Middlewares
    app.use(cors());
    app.use(helmet());
    app.use(express.json());

    //Routes
    app.use("/", routes);
    app.use("/exercise", exerciseRouter);
    app.use("/member", memberRouter);
    app.use("/musclegroup", muscleGroupRouter);
    app.use("/plan", planRouter);

    // start express server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
