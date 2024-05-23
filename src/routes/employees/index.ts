import express, { Request, Response } from "express";
import supabase from "@db/supabase";
const router = express.Router();

const db = supabase();




router.get("/", async (req: Request, res: Response) => {
  const { data, error } = await db.from("employees").select("*");
  if (error) {
    return res.status(400).send(error.message);
  }
  return res.send({
    data,
  });
  
});

export default router;