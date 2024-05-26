/* eslint-disable no-undef */
/* eslint-disable no-console */
import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "module-alias/register";
// import supabase from "@db/supabase";
import router from "./routes";


dotenv.config();

const app: Express = express();


const PORT = process.env.PORT || 6969;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
TODO - Uncomment this line to connect to Supabase
You will need to add the below environment variables to your .env file
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
SUPABASE_TOKEN=your_supabase_token
Go to https://supabase.com/ to get your Supabase URL, KEY and TOKEN, then uncomment the lines below
*/

// supabase(); 
// app.use("/api", router);



app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
    if (!process.env.SUPABASE_URL && !process.env.SUPABASE_KEY && !process.env.SUPABASE_TOKEN) {
      console.warn("\x1b[33m","[warning]: Missing SUPABASE KEYS in .env file, Supabase is not connected!");
    }

});
