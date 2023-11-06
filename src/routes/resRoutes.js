import express from "express";
import { getLikedByResAPI, getRatingByResAPI } from "../controllers/resController.js";
const resRoutes = express.Router();
resRoutes.get("/getLiked/:resId", getLikedByResAPI);
resRoutes.get("/getRating/:resId", getRatingByResAPI);
export default resRoutes;
