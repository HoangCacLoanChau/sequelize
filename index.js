import express from "express";
import cors from "cors";
import rootRoutes from "./src/routes/rootRoutes.js";
const app = express();
//middleware
app.use(express.json());
app.use(cors());
//
app.use("/api", rootRoutes);
app.listen(8080);
