import express, { Request, Response } from "express";
import employeesRouter from "@routes/employees/";
const router = express.Router();

router.use("/employees", employeesRouter);

router.get("/", async (req: Request, res: Response) => {
  return res.send("We are taking over!");
});

export default router;
