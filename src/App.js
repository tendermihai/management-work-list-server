import cors from "cors";
import express, { json, request, response } from "express";

import db from "../src/config/db.js";
import { Sequelize } from "sequelize";
import workRoute from "../src/work/rest/work-routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/work", workRoute);

db.sequelize.sync().then((result) => {
  app.listen(7070, () => {
    console.log("Server is listening on 7070");
  });
});
