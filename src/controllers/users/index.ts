import { Request, Response } from "express";
import { fetchAllUsers } from "@actions/users";

const getAllUsers = async (req: Request, res: Response) => {
  const { data: users, error } = await fetchAllUsers();

  if (error) {
    return res.status(400).send({
      message: "An error occurred while fetching users",
      error,
    });
  }
  return res.send({
    users,
  });
};

export { getAllUsers };
