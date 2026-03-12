import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Loader2, CheckCircle, AlertCircle, BookOpen, Trash2 } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { supabase, PDF_BUCKET, DOCUMENTS_TABLE, MAX_FILE_SIZE_MB } from '../lib/supabase';
import { NAAC_CRITERIA } from '../data/naacCriteria';

/** Fetch existing section / subsection / sub-subsection names for dropdowns */
function useExistingSectionsAndSubsections(refreshToken) {
  const [sectionsByCriterion, setSectionsByCriterion] = useState({});
  const [subsectionsByCriterionSection, setSubsectionsByCriterionSection] = useState({});
  const [subSubsectionsByKey, setSubSubsectionsByKey] = useState({});

  useEffect(() => {
    let cancelled = false;
    async function fetchDocs() {
      const { data, error } = await supabase
        .from(DOCUMENTS_TABLE)
        .select('criterion_id, section_id, subsection_id, sub_subsection_id')
        .not('criterion_id', 'is', null)
        .not('section_id', 'is', null);
      if (cancelled) return;
      if (error) return;
      const byCriterion = {};
      const byCriterionSection = {};
      const byKey = {};
      (data || []).forEach((row) => {
        const cid = (row.criterion_id || '').trim();
        const sid = (row.section_id || '').trim();
        const subid = row.subsection_id != null && row.subsection_id !== '' ? String(row.subsection_id).trim() : null;
        const subsubid = row.sub_subsection_id != null && row.sub_subsection_id !== '' ? String(row.sub_subsection_id).trim() : null;
        if (!cid || !sid) return;
        if (!byCriterion[cid]) byCriterion[cid] = new Set();
        byCriterion[cid].add(sid);
        const key = `${cid}|${sid}`;
        if (!byCriterionSection[key]) byCriterionSection[key] = new Set();
        if (subid) byCriterionSection[key].add(subid);
        const key2 = `${cid}|${sid}|${subid || ''}`;
        if (subid && subsubid) {
          if (!byKey[key2]) byKey[key2] = new Set();
          byKey[key2].add(subsubid);
        }
      });
      setSectionsByCriterion(Object.fromEntries(Object.keys(byCriterion).map((c) => [c, Array.from(byCriterion[c]).sort()])));
      setSubsectionsByCriterionSection(Object.fromEntries(Object.keys(byCriterionSection).map((k) => [k, Array.from(byCriterionSection[k]).sort()])));
      setSubSubsectionsByKey(Object.fromEntries(Object.keys(byKey).map((k) => [k, Array.from(byKey[k]).sort()])));
    }
    fetchDocs();
    return () => { cancelled = true; };
  }, [refreshToken]);

  return { sectionsByCriterion, subsectionsByCriterionSection, subSubsectionsByKey };
}

export default function UploadPdf() {
  const [refreshToken, setRefreshToken] = useState(0);
  const [criterionId, setCriterionId] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');
  const [subsectionName, setSubsectionName] = useState('');
  const [subSubsectionName, setSubSubsectionName] = useState('');
  const [sectionInputMode, setSectionInputMode] = useState('select');
  const [subsectionInputMode, setSubsectionInputMode] = useState('select');
  const [subSubsectionInputMode, setSubSubsectionInputMode] = useState('select');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [documents, setDocuments] = useState([]);
  const [loadingDocs, setLoadingDocs] = useState(false);
  const [docsError, setDocsError] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  const { sectionsByCriterion, subsectionsByCriterionSection, subSubsectionsByKey } = useExistingSectionsAndSubsections(refreshToken);
  const existingSections = (criterionId && sectionsByCriterion[criterionId]) || [];
  const sectionKey = criterionId && sectionTitle.trim() ? `${criterionId}|${sectionTitle.trim()}` : '';
  const existingSubsections = (sectionKey && subsectionsByCriterionSection[sectionKey]) || [];
  const subsectionKey = sectionKey && subsectionName.trim() ? `${sectionKey}|${subsectionName.trim()}` : '';
  const existingSubSubsections = (subsectionKey && subSubsectionsByKey[subsectionKey]) || [];

  useEffect(() => {
    if (!criterionId) {
      setDocuments([]);
      setDocsError('');
      return;
    }

    let cancelled = false;
    async function fetchDocs() {
      setLoadingDocs(true);
      setDocsError('');
      const query = supabase
        .from(DOCUMENTS_TABLE)
        .select('id, title, section_id, subsection_id, sub_subsection_id, file_path, criterion_id')
        .eq('criterion_id', criterionId)
        .order('section_id', { ascending: true })
        .order('subsection_id', { ascending: true })
        .order('sub_subsection_id', { ascending: true })
        .order('title', { ascending: true });

      const { data, error } = await query;
      if (cancelled) return;
      if (error) {
        setDocsError(error.message || 'Could not load documents.');
        setDocuments([]);
      } else {
        setDocuments(data || []);
      }
      setLoadingDocs(false);
    }

    fetchDocs();
    return () => { cancelled = true; };
  }, [criterionId, refreshToken]);

  useEffect(() => {
    if (criterionId && existingSections.length > 0 && !sectionTitle) {
      setSectionInputMode('select');
    }
  }, [criterionId, existingSections.length]);

  useEffect(() => {
    if (sectionKey && existingSubsections.length > 0 && !subsectionName && subsectionInputMode === 'type') {
      setSubsectionInputMode('select');
    }
  }, [sectionKey, existingSubsections.length]);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (selected.type !== 'application/pdf') {
        setStatus('error');
        setErrorMessage('Please select a PDF file only.');
        setFile(null);
        return;
      }
      const maxBytes = MAX_FILE_SIZE_MB * 1024 * 1024;
      if (selected.size > maxBytes) {
        setStatus('error');
        setErrorMessage(`File size must be under ${MAX_FILE_SIZE_MB} MB. Current file: ${(selected.size / (1024 * 1024)).toFixed(1)} MB.`);
        setFile(null);
        return;
      }
      setFile(selected);
      setStatus(null);
      setErrorMessage('');
    }
  };

  const handleCriterionChange = (e) => {
    setCriterionId(e.target.value);
    setSectionTitle('');
    setSubsectionName('');
    setSubSubsectionName('');
    setSectionInputMode(existingSections.length > 0 ? 'select' : 'type');
    setSubsectionInputMode('select');
    setSubSubsectionInputMode('select');
  };

  const handleSectionSelect = (e) => {
    const v = e.target.value;
    if (v === '__type_new__') {
      setSectionInputMode('type');
      setSectionTitle('');
    } else {
      setSectionTitle(v);
      setSectionInputMode('select');
    }
    setSubsectionName('');
    setSubSubsectionName('');
  };

  const handleSubsectionSelect = (e) => {
    const v = e.target.value;
    if (v === '__type_new__') {
      setSubsectionInputMode('type');
      setSubsectionName('');
    } else {
      setSubsectionName((v === '__none__' || v === '') ? '' : v);
      setSubsectionInputMode('select');
    }
    setSubSubsectionName('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatus('error');
      setErrorMessage('Please select a PDF file to upload.');
      return;
    }
    if (!criterionId || !sectionTitle.trim()) {
      setStatus('error');
      setErrorMessage('Please select a criterion and enter a section title.');
      return;
    }
    const maxBytes = MAX_FILE_SIZE_MB * 1024 * 1024;
    if (file.size > maxBytes) {
      setStatus('error');
      setErrorMessage(`File size must be under ${MAX_FILE_SIZE_MB} MB. Your file is ${(file.size / (1024 * 1024)).toFixed(1)} MB. Ensure Supabase Storage bucket allows files up to ${MAX_FILE_SIZE_MB} MB.`);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage('');

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
      const filePath = fileName;

      const { error: uploadError } = await supabase.storage
        .from(PDF_BUCKET)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) {
        throw new Error(uploadError.message || 'Upload failed');
      }

      const { data: urlData } = supabase.storage.from(PDF_BUCKET).getPublicUrl(filePath);
      const fileUrl = urlData?.publicUrl ?? '';

      const row = {
        title: title.trim() || file.name,
        description: description.trim() || null,
        file_path: filePath,
        file_url: fileUrl,
        criterion_id: criterionId,
        section_id: sectionTitle.trim(),
        subsection_id: subsectionName.trim() || null,
        sub_subsection_id: subSubsectionName.trim() || null,
      };

      const { error: insertError } = await supabase.from(DOCUMENTS_TABLE).insert(row);

      if (insertError) {
        throw new Error(insertError.message || 'Saving record failed');
      }

      setStatus('success');
      setTitle('');
      setDescription('');
      setFile(null);
      setSectionTitle('');
      setSubsectionName('');
      setSubSubsectionName('');
      setRefreshToken((token) => token + 1);
      if (document.getElementById('pdf-file-input')) {
        document.getElementById('pdf-file-input').value = '';
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteDocument = async (doc) => {
    if (!doc || !doc.id) return;
    const ok = window.confirm('Delete this document from NAAC? It will be removed from the NAAC page.');
    if (!ok) return;

    const deletingKey = String(doc.id);
    setDeletingId(deletingKey);
    setStatus(null);
    setErrorMessage('');

    try {
      if (doc.file_path) {
        const { error: storageError } = await supabase.storage
          .from(PDF_BUCKET)
          .remove([doc.file_path]);
        if (storageError && storageError.message && !storageError.message.toLowerCase().includes('not found')) {
          throw storageError;
        }
      }

      const { error } = await supabase
        .from(DOCUMENTS_TABLE)
        .delete()
        .eq('id', doc.id);

      if (error) {
        throw error;
      }

      setDocuments((prev) => prev.filter((d) => d.id !== doc.id));
      setRefreshToken((token) => token + 1);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to delete document.');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Upload NAAC PDF"
            subtitle="Select criterion → section → subsection (optional) → upload PDF"
            description="Pick an existing section/subsection or type a new name. Subsection is optional."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: 'linear-gradient(145deg, rgba(246,248,250,0.08) 0%, rgba(246,248,250,0.04) 100%)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 20px 60px -15px rgba(0,0,0,0.3)',
              }}
            >
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/40 text-green-600 dark:text-green-400 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>PDF uploaded. It will appear on the NAAC page.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-600 dark:text-red-400 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] space-y-4">
                  <p className="flex items-center gap-2 text-sm font-medium text-[var(--text-soft)]">
                    <BookOpen className="w-4 h-4 text-[var(--brand)]" />
                    NAAC location
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">1. Select Criterion *</label>
                    <select
                      value={criterionId}
                      onChange={handleCriterionChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--base)] border border-[var(--border-light)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    >
                      <option value="">Select criterion</option>
                      {NAAC_CRITERIA.map((c) => (
                        <option key={c.id} value={c.id}>{c.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">2. Section title *</label>
                    {criterionId && existingSections.length > 0 && sectionInputMode === 'select' ? (
                      <div className="space-y-2">
                        <select
                          value={sectionTitle}
                          onChange={handleSectionSelect}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[var(--base)] border border-[var(--border-light)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                        >
                          <option value="">— Select or create new —</option>
                          {existingSections.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                          <option value="__type_new__">— Create new section —</option>
                        </select>
                        <p className="text-xs text-[var(--text-muted)]">Pick a previous section to add more PDFs to it, or create a new section.</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={sectionTitle}
                          onChange={(e) => setSectionTitle(e.target.value)}
                          required
                          placeholder="e.g. 1.1 Curriculum Planning"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                        />
                        {criterionId && existingSections.length > 0 && (
                          <button
                            type="button"
                            onClick={() => { setSectionInputMode('select'); setSectionTitle(''); }}
                            className="text-xs text-[var(--brand)] hover:underline"
                          >
                            Show previous sections (dropdown)
                          </button>
                        )}
                        <p className="text-xs text-[var(--text-muted)]">
                          {existingSections.length > 0 ? 'Typing here creates a new section. Use the link above to pick a previous section.' : 'First time: enter a section name. After upload, it will appear in the dropdown for adding more PDFs.'}
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">3. Subsection name (optional)</label>
                    {sectionTitle.trim() && existingSubsections.length > 0 && subsectionInputMode === 'select' ? (
                      <div className="space-y-2">
                        <select
                          value={subsectionName}
                          onChange={handleSubsectionSelect}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--base)] border border-[var(--border-light)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                        >
                          <option value="">No subsection (PDFs under section only)</option>
                          {existingSubsections.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                          <option value="__type_new__">— Create new subsection —</option>
                        </select>
                        <p className="text-xs text-[var(--text-muted)]">Pick a previous subsection to add more PDFs, or create new.</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={subsectionName}
                          onChange={(e) => setSubsectionName(e.target.value)}
                          placeholder="e.g. 1.1.1 or leave blank"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                        />
                        {sectionTitle.trim() && existingSubsections.length > 0 && (
                          <button
                            type="button"
                            onClick={() => { setSubsectionInputMode('select'); setSubsectionName(''); }}
                            className="text-xs text-[var(--brand)] hover:underline"
                          >
                            Show existing subsections instead
                          </button>
                        )}
                      </div>
                    )}
                    <p className="mt-1 text-xs text-[var(--text-muted)]">Optional. Leave blank, or pick a previous subsection (to add more PDFs) or type a new one.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">4. Another subsection (optional)</label>
                    {subsectionName.trim() && existingSubSubsections.length > 0 && subSubsectionInputMode === 'select' ? (
                      <select
                        value={subSubsectionName}
                        onChange={(e) => {
                          const v = e.target.value;
                          if (v === '__type_new__') {
                            setSubSubsectionInputMode('type');
                            setSubSubsectionName('');
                          } else {
                            setSubSubsectionName(v);
                            setSubSubsectionInputMode('select');
                          }
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--base)] border border-[var(--border-light)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                      >
                        <option value="">No another subsection</option>
                        {existingSubSubsections.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                        <option value="__type_new__">— Type new —</option>
                      </select>
                    ) : (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={subSubsectionName}
                          onChange={(e) => setSubSubsectionName(e.target.value)}
                          placeholder="e.g. Academic Calendar 2023 (optional)"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                        />
                        {subsectionName.trim() && existingSubSubsections.length > 0 && (
                          <button
                            type="button"
                            onClick={() => { setSubSubsectionInputMode('select'); setSubSubsectionName(''); }}
                            className="text-xs text-[var(--brand)] hover:underline"
                          >
                            Show existing instead
                          </button>
                        )}
                      </div>
                    )}
                    <p className="mt-1 text-xs text-[var(--text-muted)]">Optional. Puts this PDF under a named sub-group inside the subsection above.</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">5. Document title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="e.g. 1.1.1_file no:1- Academic Calendar"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Description (optional)</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={2}
                    placeholder="Brief description"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">6. PDF File *</label>
                  <p className="text-xs text-[var(--text-muted)] mb-2">Maximum file size: {MAX_FILE_SIZE_MB} MB (large files supported)</p>
                  <label className="flex items-center justify-center gap-3 px-4 py-6 rounded-xl bg-[var(--surface-1)] border-2 border-dashed border-[var(--border-light)] hover:border-[var(--brand)]/50 cursor-pointer transition-colors">
                    <Upload className="w-8 h-8 text-[var(--text-muted)]" />
                    <span className="text-[var(--text-soft)]">
                      {file ? file.name : 'Choose a PDF file'}
                    </span>
                    <input
                      id="pdf-file-input"
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                  {file && (
                    <p className="mt-2 text-sm text-[var(--text-muted)] flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--brand)]/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                  {isSubmitting ? 'Uploading...' : 'Upload NAAC PDF'}
                </button>
              </form>

              {criterionId && (
                <div className="mt-8 border-t border-[var(--border-light)] pt-6">
                  <p className="text-sm font-medium text-[var(--text-soft)] mb-3">
                    Existing documents for this criterion
                  </p>
                  {loadingDocs && (
                    <p className="text-xs text-[var(--text-muted)]">Loading documents…</p>
                  )}
                  {!loadingDocs && docsError && (
                    <p className="text-xs text-red-500">{docsError}</p>
                  )}
                  {!loadingDocs && !docsError && documents.length === 0 && (
                    <p className="text-xs text-[var(--text-muted)]">No documents yet under this criterion.</p>
                  )}
                  {!loadingDocs && !docsError && documents.length > 0 && (
                    <div className="mt-2 space-y-2 max-h-64 overflow-y-auto pr-1">
                      {documents.map((doc) => {
                        const key = String(doc.id);
                        return (
                        <div
                          key={key}
                          className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-[var(--text)] truncate">{doc.title}</p>
                            <p className="text-[10px] text-[var(--text-muted)] truncate">
                              {doc.section_id || 'No section'}
                              {doc.subsection_id ? ` › ${doc.subsection_id}` : ''}
                              {doc.sub_subsection_id ? ` › ${doc.sub_subsection_id}` : ''}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleDeleteDocument(doc)}
                            disabled={deletingId === key}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50 disabled:opacity-60"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            {deletingId === key ? 'Deleting…' : 'Delete'}
                          </button>
                        </div>
                      )})}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
