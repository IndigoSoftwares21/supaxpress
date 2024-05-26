import { Request, Response, NextFunction } from "express";
import { fetchAllUsers, fetchUserById } from "@actions/users";
import { getUserByIdSchema } from "@root/src/schemas/users";
import { errorHandler } from "@root/src/middlewares/error";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { data: users, error } = await fetchAllUsers();

    if (error) {
      throw new Error("An error occurred while fetching users");
    }

    res.send({ users });
  } catch (err) {
    errorHandler(err, req, res, () => {});
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    getUserByIdSchema.parse({ id });

    const { data: user, error } = await fetchUserById(id);

    if (error) {
      throw new Error("An error occurred while fetching the user");
    }

    res.send({ user });
  } catch (err) {
    errorHandler(err, req, res, next);
  }
};

export { getAllUsers, getUserById };
