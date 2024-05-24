import supabase from "@db/supabase";

const db = supabase();

const fetchAllUsers = async () => {
  const data = await db.from("users").select("*");
  return data;
};

export {
  fetchAllUsers
};
