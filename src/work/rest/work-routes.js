import express from "express";
import {
  getAll,
  addWork,
  deleteWork,
  updateWork,
  getWorkById,
} from "../service/work-service.js";
import errorHandler from "../../middleware/error-middleware.js";

const app = express();

app.route("/all").get(getAll, errorHandler);

app.route("/add").post(addWork, errorHandler);

app.route("/delete/:id").delete(deleteWork, errorHandler);

app.route("/update/:id").put(updateWork, errorHandler);

app.route("/find/by/workId/:id").get(getWorkById, errorHandler);

export default app;
