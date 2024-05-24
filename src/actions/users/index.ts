import supabase from "@db/supabase";

const db = supabase();

const fetchAllUsers = async () => {
  const data = await db.from("users").select("*");
  return data;
};

const fetchUserById = async (id: string) => {
  const data = await db.from("users").select("*").eq("id", id);
  return data;
}

export {
  fetchAllUsers,
  fetchUserById
};
