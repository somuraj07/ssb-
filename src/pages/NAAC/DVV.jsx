import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ExternalLink, Upload, Loader2, CheckCircle, AlertCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { DVV_NAVBAR, DVV_CRITERIA } from '../../data/dvvData';
import { supabase, PDF_BUCKET, DOCUMENTS_TABLE, MAX_FILE_SIZE_MB } from '../../lib/supabase';

const DVV_CRITERION_ID = 'dvv';

/** Accepted file types for DVV: PDF and common docs/videos */
const ACCEPTED_EXTENSIONS = '.pdf,.doc,.docx,.xls,.xlsx,.mp4,.mov,.png,.jpg,.jpeg';
const ACCEPTED_TYPES = 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,video/mp4,video/quicktime,image/png,image/jpeg';

function useDvvDocuments(refreshToken) {
  const [bySlot, setBySlot] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    async function fetchDocs() {
      const { data, error } = await supabase
        .from(DOCUMENTS_TABLE)
        .select('section_id, subsection_id, sub_subsection_id, title, file_url')
        .eq('criterion_id', DVV_CRITERION_ID)
        .not('section_id', 'is', null)
        .not('sub_subsection_id', 'is', null);
      if (cancelled) return;
      if (error) {
        setLoading(false);
        return;
      }
      const map = {};
      (data || []).forEach((row) => {
        if (!row.file_url) return;
        const key = `${row.section_id || ''}|${row.subsection_id || ''}|${row.sub_subsection_id || ''}`;
        map[key] = { title: row.title || 'View Document', url: row.file_url };
      });
      setBySlot(map);
      setLoading(false);
    }
    fetchDocs();
    return () => { cancelled = true; };
  }, [refreshToken]);

  return { bySlot, loading };
}

function HeiInputDisplay({ heiInput }) {
  if (heiInput == null) return null;
  if (typeof heiInput === 'string') {
    return <p className="text-sm text-[var(--text-soft)] mt-1"><span className="font-medium text-[var(--text-muted)]">HEI Input :</span> {heiInput}</p>;
  }
  if (typeof heiInput === 'object' && heiInput !== null) {
    if (heiInput.sanctioned && heiInput.seatsFilled) {
      return (
        <div className="mt-2 space-y-2">
          <p className="text-xs font-medium text-[var(--text-muted)]">Seats filled / Sanctioned</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[280px] text-sm border border-[var(--border-light)] rounded-lg overflow-hidden">
              <thead><tr className="bg-[var(--surface-1)]"><th className="px-3 py-2 text-left">Year</th><th className="px-3 py-2 text-left">Seats filled</th><th className="px-3 py-2 text-left">Sanctioned</th></tr></thead>
              <tbody>
                {Object.keys(heiInput.seatsFilled || {}).map((y) => (
                  <tr key={y} className="border-t border-[var(--border-light)]"><td className="px-3 py-2">{y}</td><td className="px-3 py-2">{heiInput.seatsFilled[y]}</td><td className="px-3 py-2">{heiInput.sanctioned[y]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    if (heiInput.placed && heiInput.outgoing) {
      return (
        <div className="mt-2 space-y-2">
          <p className="text-xs font-medium text-[var(--text-muted)]">Placed / Outgoing</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[280px] text-sm border border-[var(--border-light)] rounded-lg overflow-hidden">
              <thead><tr className="bg-[var(--surface-1)]"><th className="px-3 py-2 text-left">Year</th><th className="px-3 py-2 text-left">Placed</th><th className="px-3 py-2 text-left">Outgoing</th></tr></thead>
              <tbody>
                {Object.keys(heiInput.placed || {}).map((y) => (
                  <tr key={y} className="border-t border-[var(--border-light)]"><td className="px-3 py-2">{y}</td><td className="px-3 py-2">{heiInput.placed[y]}</td><td className="px-3 py-2">{heiInput.outgoing[y]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    if (heiInput.participating && heiInput.nonTeaching) {
      return (
        <div className="mt-2 space-y-2">
          <p className="text-xs font-medium text-[var(--text-muted)]">Participating / Non-teaching staff</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[280px] text-sm border border-[var(--border-light)] rounded-lg overflow-hidden">
              <thead><tr className="bg-[var(--surface-1)]"><th className="px-3 py-2 text-left">Year</th><th className="px-3 py-2 text-left">Participating</th><th className="px-3 py-2 text-left">Non-teaching</th></tr></thead>
              <tbody>
                {Object.keys(heiInput.participating || {}).map((y) => (
                  <tr key={y} className="border-t border-[var(--border-light)]"><td className="px-3 py-2">{y}</td><td className="px-3 py-2">{heiInput.participating[y]}</td><td className="px-3 py-2">{heiInput.nonTeaching[y]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    if (heiInput.passed && heiInput.appeared) {
      return (
        <div className="mt-2 space-y-2">
          <p className="text-xs font-medium text-[var(--text-muted)]">Passed / Appeared</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[280px] text-sm border border-[var(--border-light)] rounded-lg overflow-hidden">
              <thead><tr className="bg-[var(--surface-1)]"><th className="px-3 py-2 text-left">Year</th><th className="px-3 py-2 text-left">Passed</th><th className="px-3 py-2 text-left">Appeared</th></tr></thead>
              <tbody>
                {Object.keys(heiInput.passed || {}).map((y) => (
                  <tr key={y} className="border-t border-[var(--border-light)]"><td className="px-3 py-2">{y}</td><td className="px-3 py-2">{heiInput.passed[y]}</td><td className="px-3 py-2">{heiInput.appeared[y]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    if (heiInput.admitted && heiInput.earmarked) {
      return (
        <div className="mt-2 space-y-2">
          <p className="text-xs font-medium text-[var(--text-muted)]">Admitted / Earmarked (reserved)</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[280px] text-sm border border-[var(--border-light)] rounded-lg overflow-hidden">
              <thead><tr className="bg-[var(--surface-1)]"><th className="px-3 py-2 text-left">Year</th><th className="px-3 py-2 text-left">Admitted</th><th className="px-3 py-2 text-left">Earmarked</th></tr></thead>
              <tbody>
                {Object.keys(heiInput.admitted || {}).map((y) => (
                  <tr key={y} className="border-t border-[var(--border-light)]"><td className="px-3 py-2">{y}</td><td className="px-3 py-2">{heiInput.admitted[y]}</td><td className="px-3 py-2">{heiInput.earmarked[y]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    // Single table: year -> value
    const entries = Object.entries(heiInput).filter(([, v]) => typeof v === 'number' || typeof v === 'string');
    if (entries.length > 0) {
      return (
        <div className="mt-2">
          <p className="text-xs font-medium text-[var(--text-muted)] mb-1">HEI Input :</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[200px] text-sm border border-[var(--border-light)] rounded-lg overflow-hidden">
              <thead><tr className="bg-[var(--surface-1)]"><th className="px-3 py-2 text-left">Year</th><th className="px-3 py-2 text-left">Value</th></tr></thead>
              <tbody>
                {entries.map(([y, v]) => (
                  <tr key={y} className="border-t border-[var(--border-light)]"><td className="px-3 py-2">{y}</td><td className="px-3 py-2">{String(v)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
  return null;
}

function DocumentCell({ criterionId, sectionId, metricId, slotId, label, bySlot, onUploaded }) {
  const key = `${sectionId}|${metricId}|${slotId}`;
  const existing = bySlot[key];
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const maxBytes = MAX_FILE_SIZE_MB * 1024 * 1024;
    if (file.size > maxBytes) {
      setError(`File size must be under ${MAX_FILE_SIZE_MB} MB.`);
      e.target.value = '';
      return;
    }
    setError('');
    setUploading(true);
    try {
      const ext = file.name.split('.').pop() || 'bin';
      const fileName = `dvv/${sectionId}/${metricId}/${slotId}-${Date.now()}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from(PDF_BUCKET)
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
      if (uploadError) {
        const msg = uploadError.message || 'Upload failed';
        if (msg.toLowerCase().includes('exceeded') && msg.toLowerCase().includes('size')) {
          throw new Error(`${msg} Supabase Free plan allows 50MB. For 200MB: Dashboard → Storage → Settings → Global file size limit (Pro plan).`);
        }
        throw new Error(msg);
      }
      const { data: urlData } = supabase.storage.from(PDF_BUCKET).getPublicUrl(fileName);
      const fileUrl = urlData?.publicUrl ?? '';
      const row = {
        title: label || file.name,
        file_path: fileName,
        file_url: fileUrl,
        criterion_id: DVV_CRITERION_ID,
        section_id: sectionId,
        subsection_id: metricId,
        sub_subsection_id: slotId,
      };
      const { error: insertError } = await supabase.from(DOCUMENTS_TABLE).insert(row);
      if (insertError) throw new Error(insertError.message);
      setSuccess(true);
      onUploaded?.();
      if (e.target) e.target.value = '';
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  if (existing) {
    return (
      <a
        href={existing.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--brand-light)] hover:text-[var(--brand)] hover:underline"
      >
        <FileText className="w-4 h-4 flex-shrink-0" />
        <span>View Document</span>
        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
      </a>
    );
  }

  return (
    <div className="space-y-1">
      <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-[var(--text-soft)] hover:text-[var(--brand)]">
        <Upload className="w-4 h-4" />
        <span>{uploading ? 'Uploading…' : 'Upload document (one-time)'}</span>
        <input
          type="file"
          accept={ACCEPTED_EXTENSIONS}
          className="sr-only"
          disabled={uploading}
          onChange={handleFile}
        />
      </label>
      {uploading && <Loader2 className="w-4 h-4 animate-spin text-[var(--brand)]" />}
      {success && <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400"><CheckCircle className="w-3.5 h-3.5" /> Uploaded.</span>}
      {error && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{error}</p>}
    </div>
  );
}

function MetricSection({ section, criterionId, bySlot, onUploaded }) {
  const { metricId, title, subTitle, heiInput, affectedMetrics, rows } = section;
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface-0)] overflow-hidden mb-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-[var(--surface-1)] transition-colors"
      >
        <span className="font-semibold text-[var(--text)]">{title}</span>
        <span className="text-[var(--text-muted)]">{open ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-0 space-y-3">
              {subTitle && <p className="text-sm text-[var(--text-soft)]">{subTitle}</p>}
              <HeiInputDisplay heiInput={heiInput} />
              <div className="overflow-x-auto rounded-lg border border-[var(--border-light)]">
                <table className="w-full text-sm min-w-[700px]">
                  <thead>
                    <tr className="bg-[var(--surface-1)] border-b border-[var(--border-light)]">
                      <th className="px-3 py-2 text-left font-medium text-[var(--text-soft)] w-20">Metric ID</th>
                      <th className="px-3 py-2 text-left font-medium text-[var(--text-soft)]">Deviation Details</th>
                      {affectedMetrics && affectedMetrics.length > 0 && <th className="px-3 py-2 text-left font-medium text-[var(--text-soft)] w-28">Affected Metrics</th>}
                      {rows.some((r) => r.findings) && <th className="px-3 py-2 text-left font-medium text-[var(--text-soft)]">Findings Of DVV</th>}
                      <th className="px-3 py-2 text-left font-medium text-[var(--text-soft)]">Response Of HEI</th>
                      <th className="px-3 py-2 text-left font-medium text-[var(--text-soft)] w-40">Supporting Document</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} className="border-b border-[var(--border-light)] last:border-0 hover:bg-[var(--surface-1)]/50">
                        <td className="px-3 py-2 text-[var(--text-muted)] align-top">{r.metricId || '—'}</td>
                        <td className="px-3 py-2 text-[var(--text)] align-top">{r.deviationDetails || '—'}</td>
                        {affectedMetrics && affectedMetrics.length > 0 && (
                          <td className="px-3 py-2 text-[var(--text-muted)] align-top">{i === 0 && r.metricId ? affectedMetrics.join(' ') : '—'}</td>
                        )}
                        {rows.some((row) => row.findings) && <td className="px-3 py-2 text-[var(--text-soft)] align-top">{r.findings || '—'}</td>}
                        <td className="px-3 py-2 text-[var(--text-soft)] align-top">{r.response || '—'}</td>
                        <td className="px-3 py-2 align-top">
                          {r.documents && r.documents.length > 0 ? (
                            <div className="flex flex-col gap-2">
                              {r.documents.map((d) => (
                                <DocumentCell
                                  key={d.slotId}
                                  criterionId={criterionId}
                                  sectionId={criterionId}
                                  metricId={metricId}
                                  slotId={d.slotId}
                                  label={d.label}
                                  bySlot={bySlot}
                                  onUploaded={onUploaded}
                                />
                              ))}
                            </div>
                          ) : (
                            <span className="text-[var(--text-muted)]">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DVV() {
  const location = useLocation();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);
  const { bySlot, loading } = useDvvDocuments(refresh);
  const refreshDocs = () => setRefresh((r) => r + 1);

  const hashId = location.hash ? location.hash.slice(1) : '';
  const validIds = DVV_NAVBAR.map((i) => i.id);
  const [selectedId, setSelectedId] = useState(() => (validIds.includes(hashId) ? hashId : 'extended'));

  useEffect(() => {
    if (hashId && validIds.includes(hashId)) setSelectedId(hashId);
  }, [hashId]);

  const handleSelect = (id) => {
    setSelectedId(id);
    navigate(`/naac/dvv#${id}`, { replace: true });
  };

  const criterion = DVV_CRITERIA.find((c) => c.id === selectedId);
  const sections = (criterion && criterion.sections) || [];

  return (
    <div className="main-content min-h-screen">
      <div className="section-spacing pt-6 md:pt-8">
        <div className="container px-4 sm:px-6">
          <header className="mb-8">
            <nav className="text-sm text-[var(--text-muted)] mb-4">
              <Link to="/naac" className="hover:text-[var(--brand)]">NAAC</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--text-soft)]">DVV</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-2 tracking-tight">DVV</h1>
            <p className="text-[var(--text-soft)]">Data Verification and Validation — NAAC criteria and supporting documents</p>
            {loading && (
              <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <div className="w-4 h-4 border-2 border-[var(--brand)] border-t-transparent rounded-full animate-spin" />
                Loading documents…
              </div>
            )}
          </header>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <nav className="lg:w-56 flex-shrink-0 lg:pt-1" aria-label="DVV navigation">
              <div
                className="sticky top-28 rounded-2xl p-5 border border-[var(--border-light)]"
                style={{
                  background: 'linear-gradient(180deg, rgba(246,248,250,0.08) 0%, rgba(246,248,250,0.04) 100%)',
                  boxShadow: '0 8px 32px -8px rgba(0,0,0,0.2)',
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4 pl-1">Sections</p>
                <ul className="space-y-0.5">
                  {DVV_NAVBAR.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleSelect(item.id)}
                        className={`block w-full text-left py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${selectedId === item.id ? 'bg-[var(--surface-2)] text-[var(--text)]' : 'text-[var(--text-soft)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]'}`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                
              </div>
            </nav>

            <div className="flex-1 min-w-0 pl-0 lg:pl-2">
              {criterion && (
                <section id={selectedId} className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6 pb-4 border-b border-[var(--border-light)]">
                    {criterion.title}
                  </h2>
                  {sections.length === 0 ? (
                    <div className="py-12 rounded-2xl border border-[var(--border-light)] bg-[var(--surface-1)] text-center">
                      <p className="text-[var(--text-muted)]">No metrics in this section.</p>
                    </div>
                  ) : (
                    sections.map((section) => (
                      <MetricSection
                        key={section.metricId}
                        section={section}
                        criterionId={criterion.id}
                        bySlot={bySlot}
                        onUploaded={refreshDocs}
                      />
                    ))
                  )}
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
