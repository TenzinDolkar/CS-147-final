import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://yvqqunwbxhmatspimfve.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cXF1bndieGhtYXRzcGltZnZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyMTgxNjYsImV4cCI6MjAxNjc5NDE2Nn0.nhsctuW_yjj38ellKI699qYz1zaqaPvGjQEtUeMIh3s";

export default supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
