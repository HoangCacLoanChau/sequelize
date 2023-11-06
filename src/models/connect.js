import { Sequelize } from "sequelize";
import config from "../config/config.js";
const sequelize = new Sequelize(
  config.databaseName,
  config.databaseUserName,
  config.databasePassword,
  {
    host: config.databaseHost,
    port: config.databasePort,
    dialect: "mysql",
  },
);
// check if connect

export default sequelize;
