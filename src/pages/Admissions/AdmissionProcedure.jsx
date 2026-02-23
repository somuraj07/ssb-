import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function AdmissionProcedure() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Admission Procedure"
            subtitle="Your Path to Business Excellence"
            description="Comprehensive guide to admission procedures and eligibility requirements"
          />
          
          <div className="space-y-section">
            {/* Eligibility Criteria */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                Eligibility Criteria
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                      <span className="text-[var(--accent)]">📚</span>
                    </div>
                    MBA Program
                  </h3>
                  <div className="space-y-6">
                    <div className="p-6 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-3">Academic Qualification</h4>
                      <p className="text-[var(--text-soft)] leading-relaxed">Bachelor's degree or equivalent in any discipline with minimum 50% aggregate marks (45% for SC/ST/OBC candidates) from a recognized university.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2">Entrance Exam</h4>
                      <p className="text-[var(--text-soft)]">Valid scores in CAT/XAT/GMAT/MAT/CMAT or appear for institutional entrance test.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2">Work Experience</h4>
                      <p className="text-[var(--text-soft)]">Fresh graduates welcome. Work experience is preferred but not mandatory.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                      <span className="text-[var(--accent)]">🎓</span>
                    </div>
                    PGDM Program
                  </h3>
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2">Academic Qualification</h4>
                      <p className="text-[var(--text-soft)]">Graduation in any discipline with minimum 50% marks. Final year students can also apply.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2">Age Limit</h4>
                      <p className="text-[var(--text-soft)]">No upper age limit. Candidates from all age groups are welcome.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2">Specializations</h4>
                      <p className="text-[var(--text-soft)]">Available in Marketing, Finance, HR, Operations, International Business, and Business Analytics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Selection Process */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                Selection Process
              </h2>
              
              <div className="grid gap-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      step: "Phase 1",
                      title: "Application Screening",
                      desc: "Review of academic records, entrance exam scores, and application completeness",
                      weight: "40%"
                    },
                    {
                      step: "Phase 2", 
                      title: "Written Test/Group Discussion",
                      desc: "Aptitude test and group discussion to assess analytical and communication skills",
                      weight: "30%"
                    },
                    {
                      step: "Phase 3",
                      title: "Personal Interview",
                      desc: "One-on-one interview with faculty panel to evaluate motivation and fit",
                      weight: "30%"
                    }
                  ].map((phase, i) => (
                    <div key={i} className="text-center p-8 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                      <div className="w-16 h-16 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-6 shadow-lg">
                        {i + 1}
                      </div>
                      <h4 className="font-semibold text-[var(--text)] mb-3">{phase.step}</h4>
                      <h5 className="font-medium text-[var(--text)] mb-4">{phase.title}</h5>
                      <p className="text-[var(--text-soft)] text-sm mb-4 leading-relaxed">{phase.desc}</p>
                      <span className="inline-block px-4 py-2 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--accent)] rounded-full text-sm font-medium">
                        Weightage: {phase.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Admission Timeline */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🗓️</span>
                </div>
                Admission Timeline 2026
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--brand)] to-[var(--brand-light)]"></div>
                
                <div className="space-y-8">
                  {[
                    {
                      month: "Dec 2024",
                      title: "Applications Open",
                      desc: "Online application portal goes live with detailed program information",
                      status: "current"
                    },
                    {
                      month: "Jan - Mar 2026",
                      title: "Application Period",
                      desc: "Submit applications with required documents and entrance exam scores",
                      status: "upcoming"
                    },
                    {
                      month: "Apr 2026",
                      title: "Application Review",
                      desc: "Academic record verification and initial screening process",
                      status: "upcoming"
                    },
                    {
                      month: "May 2026",
                      title: "Selection Process",
                      desc: "Written tests, group discussions, and personal interviews",
                      status: "upcoming"
                    },
                    {
                      month: "Jun 2026",
                      title: "Results & Admission",
                      desc: "Final results declaration and admission confirmation",
                      status: "upcoming"
                    },
                    {
                      month: "Jul 2026",
                      title: "Classes Begin",
                      desc: "Orientation program and commencement of academic year",
                      status: "upcoming"
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6">
                      <div className={`relative w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 ${
                        item.status === 'current' ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)]' : 'bg-[var(--surface-2)] border-2 border-[var(--border-medium)]'
                      }`}>
                        {item.status === 'current' ? '📍' : i + 1}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-[var(--text)] text-lg">{item.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.status === 'current' ? 'bg-[var(--accent)]/20 text-[var(--accent)]' : 'bg-[var(--surface-2)] text-[var(--text-soft)]'
                          }`}>
                            {item.month}
                          </span>
                        </div>
                        <p className="text-[var(--text-soft)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Seat Matrix */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                Seat Matrix & Reservation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Available Seats</h3>
                  <div className="space-y-4">
                    {[
                      { program: "MBA Program", seats: "120", intake: "2 Years Full-time" },
                      { program: "PGDM Program", seats: "60", intake: "2 Years Full-time" }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-[var(--text)]">{item.program}</h4>
                            <p className="text-[var(--text-soft)] text-sm">{item.intake}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-[var(--text)]">{item.seats}</span>
                            <p className="text-[var(--text-soft)] text-sm">seats</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Reservation Policy</h3>
                  <div className="space-y-3">
                    {[
                      { category: "General", percentage: "50%" },
                      { category: "OBC", percentage: "27%" },
                      { category: "SC", percentage: "15%" },
                      { category: "ST", percentage: "7.5%" },
                      { category: "PWD", percentage: "3%" },
                      { category: "Management Quota", percentage: "15%" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-[var(--surface-1)]">
                        <span className="text-[var(--text)]">{item.category}</span>
                        <span className="font-semibold text-[var(--text)]">{item.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact & Support */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Need Guidance?</h2>
              <p className="text-[var(--text-soft)] mb-6">Our admission counselors are here to help you through every step of the process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/inquiry" 
                  className="px-6 py-3 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  Contact Admissions Team
                </a>
                <a 
                  href="/inquiry" 
                  className="px-6 py-3 bg-[var(--surface-2)] text-[var(--text)] font-semibold rounded-xl border border-[var(--border-light)] hover:bg-[var(--surface-3)] transition-colors"
                >
                  Start Application
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}