import connectDB from "./config/database.config";
import env from '../src/config/env.var.config'
import app from "../src/app";

const port = env.app.port;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(`[server]: Error connecting to database: ${err}`);
});