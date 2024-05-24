import express, { Request, Response } from "express";
import userRouter from "@routes/users";
import { errorHandler, notFoundHandler } from "@middlewares/error";
const router = express.Router();


router.get("/", async (req: Request, res: Response) => {
  return res.send("We are taking over!");
});

router.use("/users",userRouter);
router.use(notFoundHandler);
router.use(errorHandler);

export default router;
