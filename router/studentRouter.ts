import express from "express";
import {
  CreateStudent,
  getStudent,
  getOne,
  updateOne,
  deleteOne,
} from "../controller/studentController";

const router = express.Router();

router.route("/").get(getStudent).post(CreateStudent);
router.route("/:id").get(getOne).patch(updateOne).delete(deleteOne);

export default router;
