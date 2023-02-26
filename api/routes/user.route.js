import express from "express";
import { deleteUser} from "../controllers/user.controller.js";
import { verfiyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verfiyToken, deleteUser);
// router.get("/:id", getUser);

export default router;
