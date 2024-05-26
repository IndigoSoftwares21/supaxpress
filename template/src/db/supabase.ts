  /* eslint-disable no-console */
/* eslint-disable no-undef */
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

let client: SupabaseClient | null = null;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

dotenv.config();

const getSupabaseClient = (): SupabaseClient => {
  if (!client) {
    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing SUPABASE_URL or SUPABASE_KEY");
    }
    client = createClient(supabaseUrl, supabaseKey);
    console.log("Connected to Supabase");
  }
  return client;
};

export default getSupabaseClient;
