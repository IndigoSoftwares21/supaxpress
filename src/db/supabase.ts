  /* eslint-disable no-console */
/* eslint-disable no-undef */
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

let client: SupabaseClient | null = null;

dotenv.config();

const getSupabaseClient = (): SupabaseClient => {
  if (!client) {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
      throw new Error("Missing SUPABASE_URL or SUPABASE_KEY");
    }
    client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
    console.log("Connected to Supabase");
  }
  return client;
};

export default getSupabaseClient;
