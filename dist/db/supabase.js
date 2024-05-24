"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
/* eslint-disable no-undef */
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
let client = null;
dotenv_1.default.config();
const getSupabaseClient = () => {
    if (!client) {
        if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
            throw new Error("Missing SUPABASE_URL or SUPABASE_KEY");
        }
        client = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
        console.log("Connected to Supabase");
    }
    return client;
};
exports.default = getSupabaseClient;
