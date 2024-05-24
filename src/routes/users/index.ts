import express from "express";
import { getAllUsers, getUserById } from "@controllers/users";

const router = express.Router();

router.get("/", /* your middle ware here*/ getAllUsers);
router.get("/:id", /* your middle ware here*/ getUserById);

export default router;
