import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, FileText, ExternalLink } from 'lucide-react';
import { NAAC_NAVBAR } from '../data/naacCriteria';
import { supabase, DOCUMENTS_TABLE } from '../lib/supabase';

function useNaacTree() {
  const [tree, setTree] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function fetchDocs() {
      const { data, error } = await supabase
        .from(DOCUMENTS_TABLE)
        .select('title, file_url, criterion_id, section_id, subsection_id, sub_subsection_id')
        .not('criterion_id', 'is', null)
        .not('section_id', 'is', null);
      if (cancelled) return;
      if (error) {
        setLoading(false);
        return;
      }
      const byCriterion = {};
      (data || []).forEach((row) => {
        if (!row.file_url || !row.criterion_id || !row.section_id) return;
        const cid = row.criterion_id;
        const sid = (row.section_id || '').trim();
        const subid = (row.subsection_id != null && String(row.subsection_id).trim() !== '') ? String(row.subsection_id).trim() : '';
        const subsubid = (row.sub_subsection_id != null && String(row.sub_subsection_id).trim() !== '') ? String(row.sub_subsection_id).trim() : '';
        if (!cid || !sid) return;
        if (!byCriterion[cid]) byCriterion[cid] = {};
        if (!byCriterion[cid][sid]) byCriterion[cid][sid] = {};
        if (!byCriterion[cid][sid][subid]) byCriterion[cid][sid][subid] = {};
        if (!byCriterion[cid][sid][subid][subsubid]) byCriterion[cid][sid][subid][subsubid] = [];
        byCriterion[cid][sid][subid][subsubid].push({ title: row.title || 'Document', url: row.file_url });
      });
      setTree(byCriterion);
      setLoading(false);
    }
    fetchDocs();
    return () => { cancelled = true; };
  }, []);

  return { tree, loading };
}

function SectionBlock({ sectionTitle, subsections, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const subsectionEntries = Object.entries(subsections || {});

  return (
    <div
      className="rounded-2xl overflow-hidden border border-[var(--border-light)] transition-all duration-200"
      style={{
        background: 'linear-gradient(145deg, rgba(246,248,250,0.06) 0%, rgba(246,248,250,0.02) 100%)',
        boxShadow: '0 4px 24px -4px rgba(0,0,0,0.12)',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-[var(--surface-1)]/80 transition-colors rounded-t-2xl"
      >
        <span className="font-semibold text-[var(--text)]">{sectionTitle}</span>
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--surface-2)] text-[var(--text-muted)]">
          {open ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 space-y-3">
              {subsectionEntries.map(([subName, subSubsections]) => (
                <SubsectionBlock key={subName || '__none__'} subsectionName={subName || 'Documents'} subSubsections={subSubsections} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SubsectionBlock({ subsectionName, subSubsections }) {
  const [open, setOpen] = useState(false);
  const entries = Object.entries(subSubsections || {});

  return (
    <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface-0)] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-[var(--surface-1)] transition-colors"
      >
        <span className="text-sm font-medium text-[var(--text-soft)]">{subsectionName}</span>
        <span className="text-[var(--text-muted)]">{open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}</span>
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
            <div className="px-4 pb-4 pt-1 space-y-2">
              {entries.map(([subSubName, files]) => (
                <SubSubsectionBlock key={subSubName || '__none__'} label={subSubName || 'Documents'} files={files} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SubSubsectionBlock({ label, files }) {
  const [open, setOpen] = useState(false);
  const list = Array.isArray(files) ? files : [];
  const hasFiles = list.length > 0;

  return (
    <div className="rounded-lg border border-[var(--border-light)] bg-[var(--surface-0)]/50 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-3 py-2.5 text-left hover:bg-[var(--surface-1)] transition-colors"
      >
        <span className="text-sm font-medium text-[var(--text-muted)]">{label}</span>
        <span className="text-[var(--text-muted)]">{open ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}</span>
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
            <div className="px-3 pb-3 pt-1 space-y-1">
              {hasFiles ? (
                list.map((file, i) => (
                  <a
                    key={i}
                    href={file.url}
                    target={file.url?.startsWith('http') ? '_blank' : undefined}
                    rel={file.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-[var(--brand-light)] hover:bg-[var(--surface-2)] hover:text-[var(--brand)] transition-colors"
                  >
                    <FileText className="w-4 h-4 flex-shrink-0" />
                    <span className="flex-1 min-w-0 truncate">{file.title}</span>
                    {file.url?.startsWith('http') && <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-70" />}
                  </a>
                ))
              ) : (
                <p className="text-xs text-[var(--text-muted)] py-2 px-3">No documents.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function NAAC() {
  const location = useLocation();
  const navigate = useNavigate();
  const { tree, loading } = useNaacTree();

  const navItems = NAAC_NAVBAR;

  const hashId = location.hash ? location.hash.slice(1) : '';
  const validIds = navItems.filter((i) => i.id !== 'dvv').map((i) => i.id);
  const [selectedId, setSelectedId] = useState(() => (hashId && validIds.includes(hashId) ? hashId : validIds[0] || ''));

  useEffect(() => {
    if (hashId && validIds.includes(hashId)) setSelectedId(hashId);
  }, [hashId]); // validIds is stable (from NAAC_NAVBAR)

  const handleSelect = (id) => {
    if (id === 'dvv') return;
    setSelectedId(id);
    navigate(`/naac#${id}`, { replace: true });
  };

  const selectedItem = navItems.find((i) => i.id === selectedId);
  const sections = selectedItem && selectedItem.id !== 'dvv' ? tree[selectedItem.id] || {} : {};
  const sectionEntries = Object.entries(sections);

  return (
    <div className="main-content min-h-screen">
      <div className="section-spacing pt-6 md:pt-8">
        <div className="container px-4 sm:px-6">
          <header className="text-center mb-14 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-3 tracking-tight">Criteria</h1>
            <p className="text-[var(--text-soft)] text-lg">NAAC criteria and document repository</p>
            {loading && (
              <div className="mt-6 flex justify-center">
                <div className="w-8 h-8 border-2 border-[var(--brand)] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </header>

          {!loading && (
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <nav className="lg:w-56 flex-shrink-0 lg:pt-1" aria-label="Criteria navigation">
                <div
                  className="sticky top-28 rounded-2xl p-5 border border-[var(--border-light)]"
                  style={{
                    background: 'linear-gradient(180deg, rgba(246,248,250,0.08) 0%, rgba(246,248,250,0.04) 100%)',
                    boxShadow: '0 8px 32px -8px rgba(0,0,0,0.2)',
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4 pl-1">Criteria</p>
                  <ul className="space-y-0.5">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        {item.id === 'dvv' ? (
                          <Link
                            to="/naac/dvv"
                            className="block py-2.5 px-3 rounded-xl text-sm font-medium text-[var(--text-soft)] hover:bg-[var(--surface-2)] hover:text-[var(--text)] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSelect(item.id)}
                            className={`block w-full text-left py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${selectedId === item.id ? 'bg-[var(--surface-2)] text-[var(--text)]' : 'text-[var(--text-soft)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]'}`}
                          >
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              <div className="flex-1 min-w-0 pl-0 lg:pl-2">
                {selectedItem && selectedItem.id !== 'dvv' && (
                  <section id={selectedId} className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2 pb-4 mt-0 border-b border-[var(--border-light)]">
                      {selectedItem.label}
                    </h2>
                    {sectionEntries.length === 0 ? (
                      <div className="py-12 rounded-2xl border border-[var(--border-light)] bg-[var(--surface-1)] text-center">
                        <p className="text-[var(--text-muted)]">No documents for this section yet.</p>
                      </div>
                    ) : (
                      <div className="pt-2 space-y-5">
                        {sectionEntries.map(([sectionTitle, subsections]) => (
                          <SectionBlock
                            key={sectionTitle}
                            sectionTitle={sectionTitle}
                            subsections={subsections}
                            defaultOpen={false}
                          />
                        ))}
                      </div>
                    )}
                  </section>
                )}
                {(!selectedItem || selectedId === '') && !loading && (
                  <div className="py-12 rounded-2xl border border-[var(--border-light)] bg-[var(--surface-1)] text-center">
                    <p className="text-[var(--text-muted)]">Select a section from the sidebar.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
