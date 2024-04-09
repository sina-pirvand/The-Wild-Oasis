import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dklxasyadaerrkjhabsl.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrbHhhc3lhZGFlcnJramhhYnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NDU4MjAsImV4cCI6MjAyODIyMTgyMH0.VbHWNSK0dRCmBfIrVNwKqGWdem6_u2wHZpJoyhEqQp4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
