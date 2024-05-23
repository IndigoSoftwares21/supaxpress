/* eslint-disable no-undef */
/* eslint-disable no-console */
import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "module-alias/register";
import supabase from "@db/supabase";
import router from "./routes";


dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

supabase();

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
