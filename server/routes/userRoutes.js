import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";

router.route("/auth").post(authUser);

export default router;
