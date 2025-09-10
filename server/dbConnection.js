//imports, pg, dotenv,
import pg from "pg";
import dotenv from "dotenv";
//this may need vary, not sure what it does
import { append } from "vary";

dotenv.config();

const dbConnectionString = process.env.DB_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//configure dotenv

//get connection string value (supabase "connect" at top of screen)

//set up a pool
