import { z } from "zod";

const getUserByIdSchema = z.object({
  id: z.string({
    invalid_type_error: "Id must be a string",
  }),
});

export { getUserByIdSchema };
