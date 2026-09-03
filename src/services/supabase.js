import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dzhbhdhpibmrwznhmfqj.supabase.co";
const supabaseKey = "sb_publishable_u1z80eM5HOYebVZHY804tQ_bv5vmtOJ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
