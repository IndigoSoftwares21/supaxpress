import express from "express";
import { getAllUsers } from "@controllers/users";

const router = express.Router();

router.get("/", /* your middle ware here*/ getAllUsers);

export default router;
