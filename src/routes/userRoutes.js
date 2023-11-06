import express from "express";
import {
  getLikedByUserAPI,
  getRatingByUserAPI,
  likeAPI,
  orderAPI,
  rateAPI,
  unLikeAPI,
} from "../controllers/userController.js";
const userRoutes = express.Router();
userRoutes.post("/like/:res_id", likeAPI);
userRoutes.get("/getLiked/:user_id", getLikedByUserAPI);
userRoutes.delete("/unlike/:res_id", unLikeAPI);
userRoutes.post("/rate/:res_id", rateAPI);
userRoutes.get("/getRating/:user_id", getRatingByUserAPI);

userRoutes.post("/newOrder", orderAPI);

export default userRoutes;
