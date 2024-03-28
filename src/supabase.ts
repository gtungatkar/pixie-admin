import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient('https://lreslndufqsfccnjwytb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyZXNsbmR1ZnFzZmNjbmp3eXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMDU0MTcsImV4cCI6MjAyMzg4MTQxN30.gZ9yty222zgWzS_sZ92wo43VEvs2CoC7-JadtR_cSs8');