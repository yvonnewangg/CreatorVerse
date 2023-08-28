import { createClient } from '@supabase/supabase-js';

const URL = 'https://hinwbpoksdjqlpspoboa.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbndicG9rc2RqcWxwc3BvYm9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxODIzNDksImV4cCI6MjAwODc1ODM0OX0.mXXfmL33CA7s-vgMClRebYO7ZaDpENOs7MlhMFDl5oE';

export const supabase = createClient(URL, API_KEY);