import express from "express";
import cors from "cors";
import morgan from "morgan";

import swaggerJSDoc from "swagger-jsdoc";
import swagerUI from "swagger-ui-express";
import { options } from "./swaggerOptions";

const specs = swaggerJSDoc(options);

import taskRoutes from "./routes/task";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(taskRoutes);

app.use("/docs", swagerUI.serve, swagerUI.setup(specs));

export default app;
