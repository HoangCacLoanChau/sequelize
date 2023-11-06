import express from "express";
import { getLikedByUserAPI } from "../controllers/userController.js";
const userRoutes = express.Router();
userRoutes.get("/getLiked", getLikedByUserAPI);

export default userRoutes;
