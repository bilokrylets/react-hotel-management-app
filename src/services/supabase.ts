import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pnaujymkmbmrjplnzbdh.supabase.co';
//RLS active
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuYXVqeW1rbWJtcmpwbG56YmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyNzYyOTEsImV4cCI6MjAzODg1MjI5MX0._xjyUUbuWJok8iH2HIAKxG9FA8x8c15GlHIOoNfuA_k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
