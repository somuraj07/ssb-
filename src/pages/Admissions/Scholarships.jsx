import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function AcademicScholarships() {
  const scholarshipProgram = {
    name: "Sai Prudent Scholarship Program",
    coverage: "Up to 50%",
    type: "Merit-based",
    icon: "🏆",
    eligibility: [
      "Entrance exam score above 90 percentile",
      "Minimum 75% in graduation",
      "No income bar"
    ],
    benefits: [
      "Tuition fee waiver up to 50%",
      "Priority in hostel allocation",
      "Mentorship opportunities"
    ],
    applicationProcess: "Automatic consideration during admission",
    renewal: "Maintained with 75% academic performance"
  };

  const applicationSteps = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "Review scholarship criteria and ensure you meet the requirements"
    },
    {
      step: "2", 
      title: "Prepare Documents",
      description: "Gather all required certificates and supporting documents"
    },
    {
      step: "3",
      title: "Apply During Admission",
      description: "Submit scholarship application along with admission form"
    },
    {
      step: "4",
      title: "Assessment & Selection",
      description: "Committee reviews applications and selects recipients"
    },
    {
      step: "5",
      title: "Award Notification",
      description: "Scholarship recipients are notified with admission offers"
    }
  ];

  const documents = [
    "Completed admission application form",
    "Academic transcripts and certificates",
    "Entrance exam score card",
    "Passport size photographs",
    "Identity proof (Aadhaar/PAN/Passport)"
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Scholarships & Financial Aid"
            subtitle="Empowering Dreams Through Education"
            description="Comprehensive scholarship programs to make quality education accessible"
          />
          
          <div className="space-y-section">
            {/* Sai Prudent Scholarship Program */}
            <Card className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] flex items-center justify-center text-3xl">
                  {scholarshipProgram.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h2 className="text-2xl font-bold text-[var(--text)]">Sai Prudent Scholarship Program</h2>
                    <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-bold">
                      {scholarshipProgram.coverage}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[var(--surface-2)] text-[var(--text-soft)] rounded-full text-xs">
                    {scholarshipProgram.type}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--accent)]">✓</span>
                    Eligibility Criteria
                  </h4>
                  <ul className="text-[var(--text-soft)] text-sm space-y-1">
                    {scholarshipProgram.eligibility.map((criteria, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] mt-1">•</span>
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--accent)]">🎁</span>
                    Benefits
                  </h4>
                  <ul className="text-[var(--text-soft)] text-sm space-y-1">
                    {scholarshipProgram.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border-light)] grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[var(--text-soft)] mb-1">Application</p>
                    <p className="text-[var(--text)] font-medium">{scholarshipProgram.applicationProcess}</p>
                  </div>
                  <div>
                    <p className="text-[var(--text-soft)] mb-1">Renewal</p>
                    <p className="text-[var(--text)] font-medium">{scholarshipProgram.renewal}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Application Process */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Application Process
              </h2>
              <div className="grid gap-6">
                {applicationSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] flex items-center justify-center text-white font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text)] mb-1">{step.title}</h4>
                      <p className="text-[var(--text-soft)]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Required Documents */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                <span className="text-3xl">📄</span>
                Required Documents
              </h2>
              <p className="text-[var(--text-soft)] mb-4">For Sai Prudent Scholarship consideration during admission:</p>
              <ul className="space-y-2">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-soft)]">
                    <span className="text-[var(--brand)] mt-1">•</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Important Dates */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                <span className="text-3xl">📅</span>
                Important Dates 2026
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { title: "Applications Open", date: "Dec 2024", desc: "Scholarship applications accepted" },
                  { title: "Document Submission", date: "Mar 2026", desc: "Last date for document upload" },
                  { title: "Selection Process", date: "Apr 2026", desc: "Committee evaluation period" },
                  { title: "Results Declaration", date: "May 2026", desc: "Scholarship awards announced" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <h4 className="font-semibold text-[var(--text)] mb-2">{item.title}</h4>
                    <p className="text-2xl font-bold text-[var(--text)] mb-2">{item.date}</p>
                    <p className="text-sm text-[var(--text-soft)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Educational Loans */}
            <Card className="bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                <span className="text-3xl">🏦</span>
                Education Loan Assistance
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Partner Banks</h3>
                  <div className="space-y-3">
                    {[
                      "State Bank of India (SBI)",
                      "HDFC Bank",
                      "ICICI Bank", 
                      "Canara Bank",
                      "Union Bank of India"
                    ].map((bank, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--surface-1)]">
                        <span className="text-[var(--accent)]">🏦</span>
                        <span className="text-[var(--text)]">{bank}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Loan Features</h3>
                  <div className="space-y-3">
                    {[
                      "Up to ₹10 lakhs loan amount",
                      "Competitive interest rates",
                      "Flexible repayment options",
                      "Processing assistance provided",
                      "Moratorium during study period"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-[var(--accent)] mt-1">✓</span>
                        <span className="text-[var(--text-soft)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact & Support */}
            <Card className="text-center">
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Need Help with Scholarships?</h2>
              <p className="text-[var(--text-soft)] mb-6">Our financial aid counselors are here to guide you through the process</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <p className="text-[var(--text-soft)]">Scholarships Office</p>
                  <p className="text-[var(--text)] font-semibold">scholarships@sanskrithibschool.com</p>
                  <p className="text-[var(--text)] font-semibold">+91 8555-288838</p>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="/inquiry" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  Contact Financial Aid Team
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}