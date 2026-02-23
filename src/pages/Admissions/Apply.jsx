import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function AdmissionsApply() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="How to Apply"
            subtitle="Your Journey to Excellence Starts Here"
            description="Step-by-step guide to join Sanskrithi School of Business"
          />
          
          <div className="space-y-section">
            {/* Application Process Steps */}
            <Card className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold gradient-text mb-6">Application Process</h2>
                <p className="text-[var(--text-soft)] text-lg">Follow these simple steps to secure your seat</p>
              </div>

              <div className="grid gap-10">
                {[
                  {
                    step: "01",
                    title: "Online Application",
                    desc: "Complete the online application form with accurate personal, academic, and contact details. Ensure all information matches your official documents.",
                    icon: "📝"
                  },
                  {
                    step: "02", 
                    title: "Document Upload",
                    desc: "Upload scanned copies of all required documents including academic transcripts, certificates, ID proof, and photographs in the specified format.",
                    icon: "📄"
                  },
                  {
                    step: "03",
                    title: "Application Fee Payment",
                    desc: "Pay the non-refundable application fee through our secure online payment gateway. Keep the transaction receipt for future reference.",
                    icon: "💳"
                  },
                  {
                    step: "04",
                    title: "Entrance Test/Score Submission",
                    desc: "Appear for our institutional entrance test or submit valid scores from CAT/XAT/GMAT/MAT/CMAT examinations.",
                    icon: "🎯"
                  },
                  {
                    step: "05",
                    title: "Personal Interview",
                    desc: "Shortlisted candidates will be invited for a personal interview to assess communication skills, motivation, and career aspirations.",
                    icon: "💼"
                  },
                  {
                    step: "06",
                    title: "Final Selection & Admission",
                    desc: "Final selection is based on entrance test performance, interview assessment, and academic record. Selected candidates receive admission confirmation.",
                    icon: "🎉"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                      </div>
                      <p className="text-[var(--text-soft)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Required Documents */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                Required Documents
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-6 text-lg">Academic Documents</h4>
                  <ul className="space-y-4">
                    {[
                      "10th Standard Mark Sheet & Certificate",
                      "12th Standard Mark Sheet & Certificate", 
                      "Bachelor's Degree Certificate & Transcripts",
                      "Provisional Certificate (if final degree pending)",
                      "Migration Certificate (if from different board/university)"
                    ].map((doc, i) => (
                      <li key={i} className="flex items-start gap-4 text-[var(--text-soft)]">
                        <div className="w-6 h-6 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-[var(--accent)] text-sm">•</span>
                        </div>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-6 text-lg">Supporting Documents</h4>
                  <ul className="space-y-4">
                    {[
                      "Entrance Exam Score Card (CAT/XAT/GMAT/MAT/CMAT)",
                      "Work Experience Certificates (if applicable)",
                      "Passport Size Photographs (recent)",
                      "Aadhaar Card/PAN Card/Passport (ID Proof)",
                      "Category Certificate (SC/ST/OBC/PWD if applicable)",
                      "Income Certificate (for scholarship applications)"
                    ].map((doc, i) => (
                      <li key={i} className="flex items-start gap-4 text-[var(--text-soft)]">
                        <div className="w-6 h-6 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-[var(--accent)] text-sm">•</span>
                        </div>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Important Dates */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
                Important Dates 2026
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Applications Open",
                    date: "December 2024",
                    desc: "Online application portal goes live"
                  },
                  {
                    title: "Application Deadline",
                    date: "April 2026",
                    desc: "Last date for form submission"
                  },
                  {
                    title: "Entrance Test",
                    date: "May 2026",
                    desc: "Institutional entrance examination"
                  },
                  {
                    title: "Results & Interviews",
                    date: "June 2026",
                    desc: "Interview rounds for shortlisted candidates"
                  }
                ].map((item, i) => (
                  <div key={i} className="text-center p-8 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                    <h4 className="font-semibold text-[var(--text)] mb-3">{item.title}</h4>
                    <p className="text-2xl font-bold text-[var(--text)] mb-3">{item.date}</p>
                    <p className="text-sm text-[var(--text-soft)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Application CTA */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-3xl font-bold text-[var(--text)] mb-4">Ready to Apply?</h2>
              <p className="text-[var(--text-soft)] mb-8 text-lg">Start your application today and take the first step towards a successful career in business.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#apply-online" 
                  className="px-8 py-4 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  Apply Online Now
                </a>
                <a 
                  href="/admissions/fee-structure" 
                  className="px-8 py-4 bg-[var(--surface-2)] text-[var(--text)] font-semibold rounded-xl border border-[var(--border-light)] hover:bg-[var(--surface-3)] transition-colors"
                >
                  View Fee Structure
                </a>
              </div>
            </Card>

            {/* Contact Information */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                Need Help?
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-6">Admissions Office</h4>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                        <span className="text-[var(--accent)]">📧</span>
                      </div>
                      <div>
                        <p className="text-[var(--text-soft)]">Email</p>
                        <p className="text-[var(--text)] font-medium">admissions.director@sanskrithibschool.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                        <span className="text-[var(--accent)]">📱</span>
                      </div>
                      <div>
                        <p className="text-[var(--text-soft)]">Phone</p>
                        <p className="text-[var(--text)] font-medium">+91 8555-288838</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-6">Visit Us</h4>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                      <span className="text-[var(--accent)]">📍</span>
                    </div>
                    <div>
                      <p className="text-[var(--text-soft)]">Address</p>
                      <p className="text-[var(--text)] font-medium">
                        Behind Sri Sathya Sai Super Speciality Hospital<br/>
                        Beedupalli Road, Prasanthigram<br/>
                        Puttaparthi - 515134<br/>
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}