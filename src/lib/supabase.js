import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

/** Storage bucket name for PDFs */
export const PDF_BUCKET = 'pdfs';

/** Table name for document metadata */
export const DOCUMENTS_TABLE = 'documents';

/** Max file size for uploads in MB (Supabase supports large files; set in .env as VITE_SUPABASE_MAX_FILE_SIZE_MB, default 150) */
export const MAX_FILE_SIZE_MB = Number(import.meta.env.VITE_SUPABASE_MAX_FILE_SIZE_MB) || 150;
