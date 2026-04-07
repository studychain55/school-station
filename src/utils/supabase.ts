import { createClient } from "@supabase/supabase-js";

const SUPABASE_TIMEOUT_MS = 6000;

const loggingFetch: typeof fetch = async (input, init) => {
  const fetchInit = init?.signal
    ? init
    : { ...init, signal: AbortSignal.timeout(SUPABASE_TIMEOUT_MS) };
  return fetch(input, fetchInit);
};

const supabaseClient = createClient(
  (() => {
    const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!url) throw new Error("SUPABASE_URL is required.");
    return url;
  })(),
  (() => {
    const key = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!key) throw new Error("SUPABASE_ANON_KEY is required.");
    return key;
  })(),
  { global: { fetch: loggingFetch } }
);

export default supabaseClient;
