import dotenv from "dotenv";
dotenv.config();
console.log(process.env.DB_HOST);

export default {
  databaseName: process.env.DB_NAME,
  databaseUserName: process.env.DB_USERNAME,
  databasePassword: process.env.DB_PASSWORD,
  databasePort: process.env.DB_PORT,
  databaseHost: process.env.DB_HOST,
};
