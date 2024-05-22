// import simpleRestProvider from "ra-data-simple-rest";

// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL
// );

import { supabaseDataProvider } from 'ra-supabase-core';
import { supabaseClient } from './supabase';

export const dataProvider = supabaseDataProvider({
    instanceUrl: 'https://lreslndufqsfccnjwytb.supabase.co',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyZXNsbmR1ZnFzZmNjbmp3eXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMDU0MTcsImV4cCI6MjAyMzg4MTQxN30.gZ9yty222zgWzS_sZ92wo43VEvs2CoC7-JadtR_cSs8',
    supabaseClient: supabaseClient
});