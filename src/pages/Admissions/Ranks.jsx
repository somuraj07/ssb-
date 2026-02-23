import React, { useState } from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function Ranks() {
  const [selectedExam, setSelectedExam] = useState('icet');

  const entranceExams = {
    icet: {
      name: "AP ICET (Andhra Pradesh Integrated Common Entrance Test)",
      description: "State-level entrance examination for MBA and PGDM admissions in Andhra Pradesh",
      eligibility: "Bachelor's degree in any discipline with minimum 50% marks",
      duration: "150 minutes",
      sections: [
        { name: "Analytical Ability", questions: 75, marks: 75 },
        { name: "Mathematical Ability", questions: 75, marks: 75 },
        { name: "Communication Ability", questions: 50, marks: 50 }
      ],
      totalQuestions: 200,
      totalMarks: 200,
      qualifyingMarks: 50,
      icon: "📊"
    },
    national: {
      name: "National Level Entrance Exams",
      description: "Accepted national entrance exams for direct admission",
      eligibility: "Valid scores from recognized national entrance tests",
      exams: [
        { name: "CAT", fullForm: "Common Admission Test", conductedBy: "IIMs" },
        { name: "XAT", fullForm: "Xavier Aptitude Test", conductedBy: "XLRI" },
        { name: "GMAT", fullForm: "Graduate Management Admission Test", conductedBy: "GMAC" },
        { name: "MAT", fullForm: "Management Aptitude Test", conductedBy: "AIMA" },
        { name: "CMAT", fullForm: "Common Management Admission Test", conductedBy: "NTA" }
      ],
      icon: "🎯"
    }
  };

  const rankAnalysis = [
    {
      range: "1 - 1,000",
      category: "Excellent",
      prospects: "Top-tier private MBA colleges with full fee concession",
      colleges: "Premium business schools, high placement guarantee",
      color: "from-green-500 to-green-600"
    },
    {
      range: "1,001 - 3,000", 
      category: "Very Good",
      prospects: "Good private MBA colleges with partial scholarships",
      colleges: "Well-established institutions with good placement records",
      color: "from-blue-500 to-blue-600"
    },
    {
      range: "3,001 - 10,000",
      category: "Good",
      prospects: "Decent private colleges, management quota options",
      colleges: "Mid-tier institutions with average placement support",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      range: "10,001 - 25,000",
      category: "Moderate",
      prospects: "Limited options in private colleges, mainly self-finance",
      colleges: "Basic institutions with limited placement assistance",
      color: "from-orange-500 to-orange-600"
    },
    {
      range: "Above 25,000",
      category: "Challenging",
      prospects: "Very limited options, mostly management quota",
      colleges: "Few institutions with minimal placement support",
      color: "from-red-500 to-red-600"
    }
  ];

  const admissionProcess = [
    {
      step: "1",
      title: "Exam Registration",
      description: "Register for AP ICET or submit national exam scores",
      timeline: "March - April"
    },
    {
      step: "2",
      title: "Exam Completion",
      description: "Appear for entrance test or submit valid scores",
      timeline: "May - June"
    },
    {
      step: "3",
      title: "Results & Ranking",
      description: "Check results and rank allocation",
      timeline: "June - July"
    },
    {
      step: "4",
      title: "Counseling Process",
      description: "Participate in online counseling and seat allotment",
      timeline: "July - August"
    },
    {
      step: "5",
      title: "College Allocation",
      description: "Get college allotment based on rank and preferences",
      timeline: "August"
    },
    {
      step: "6",
      title: "Admission Confirmation",
      description: "Complete admission formalities and fee payment",
      timeline: "August - September"
    }
  ];

 

  const importantDates = [
    { event: "AP ICET Application", date: "March 2026", status: "upcoming" },
    { event: "Exam Date", date: "May 2026", status: "upcoming" },
    { event: "Results Declaration", date: "June 2026", status: "upcoming" },
    { event: "Counseling Process", date: "July-August 2026", status: "upcoming" }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Entrance Exams & Ranks"
            subtitle="Your Gateway to Business Education"
            description="Comprehensive guide to entrance examinations and rank requirements for MBA/PGDM admissions"
          />
          
          <div className="space-y-section">
            {/* Exam Selection */}
            <Card>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-6">Select Entrance Category</h2>
                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => setSelectedExam('icet')}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                      selectedExam === 'icet'
                        ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                        : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                    }`}
                  >
                    AP ICET
                  </button>
                  <button
                    onClick={() => setSelectedExam('national')}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                      selectedExam === 'national'
                        ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                        : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                    }`}
                  >
                    National Exams
                  </button>
                </div>
              </div>
            </Card>

            {/* Exam Overview */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">{entranceExams[selectedExam].icon}</span>
                </div>
                {entranceExams[selectedExam].name}
              </h2>
              
              <div className="mb-8">
                <p className="text-[var(--text-soft)] text-lg leading-relaxed mb-6">
                  {entranceExams[selectedExam].description}
                </p>
                <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                  <h4 className="font-semibold text-[var(--text)] mb-2">Eligibility</h4>
                  <p className="text-[var(--text-soft)]">{entranceExams[selectedExam].eligibility}</p>
                </div>
              </div>

              {selectedExam === 'icet' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Exam Pattern</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--surface-1)]">
                        <span className="text-[var(--text)]">Total Questions</span>
                        <span className="font-semibold text-[var(--text)]">{entranceExams[selectedExam].totalQuestions}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--surface-1)]">
                        <span className="text-[var(--text)]">Total Marks</span>
                        <span className="font-semibold text-[var(--text)]">{entranceExams[selectedExam].totalMarks}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--surface-1)]">
                        <span className="text-[var(--text)]">Duration</span>
                        <span className="font-semibold text-[var(--text)]">{entranceExams[selectedExam].duration}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--surface-1)]">
                        <span className="text-[var(--text)]">Qualifying Marks</span>
                        <span className="font-semibold text-[var(--text)]">{entranceExams[selectedExam].qualifyingMarks}/200</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Section-wise Distribution</h3>
                    <div className="space-y-3">
                      {entranceExams[selectedExam].sections.map((section, i) => (
                        <div key={i} className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                          <h4 className="font-semibold text-[var(--text)] mb-2">{section.name}</h4>
                          <div className="flex justify-between">
                            <span className="text-[var(--text-soft)]">Questions: {section.questions}</span>
                            <span className="text-[var(--text-soft)]">Marks: {section.marks}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedExam === 'national' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {entranceExams[selectedExam].exams.map((exam, i) => (
                    <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{exam.name}</h3>
                      <p className="text-[var(--text-soft)] mb-2">{exam.fullForm}</p>
                      <p className="text-sm text-[var(--text-muted)]">Conducted by: {exam.conductedBy}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Rank Analysis (only for ICET) */}
            {selectedExam === 'icet' && (
              <Card>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  Rank-wise Analysis & Prospects
                </h2>
                
                <div className="space-y-6">
                  {rankAnalysis.map((rank, i) => (
                    <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                      <div className="flex items-start gap-6">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${rank.color} flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                          {rank.range.split(' - ')[0].replace(/,/g, 'K').replace('000', '')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold text-[var(--text)]">Rank {rank.range}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${rank.color} text-white`}>
                              {rank.category}
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-[var(--text)] mb-2">Admission Prospects</h4>
                              <p className="text-[var(--text-soft)] text-sm leading-relaxed">{rank.prospects}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-[var(--text)] mb-2">College Options</h4>
                              <p className="text-[var(--text-soft)] text-sm leading-relaxed">{rank.colleges}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Admission Process */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                Admission Process Timeline
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--brand)] to-[var(--brand-light)]"></div>
                
                <div className="space-y-8">
                  {admissionProcess.map((step, i) => (
                    <div key={i} className="relative flex items-start gap-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0 z-10">
                        {step.step}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                          <h4 className="font-semibold text-[var(--text)] text-lg">{step.title}</h4>
                          <span className="px-4 py-2 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--accent)] rounded-full text-sm font-medium">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-[var(--text-soft)] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
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
              
              <div className="grid md:grid-cols-2 gap-8">
                {importantDates.map((item, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                    <h4 className="font-semibold text-[var(--text)] mb-2">{item.event}</h4>
                    <p className="text-2xl font-bold text-[var(--text)] mb-2">{item.date}</p>
                    <span className="inline-block px-3 py-1 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--accent)] rounded-full text-sm">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-3xl font-bold text-[var(--text)] mb-4">Ready to Start Your Admission Journey?</h2>
              <p className="text-[var(--text-soft)] mb-8 text-lg">
                Get detailed guidance on entrance exams and admission procedures for a successful application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/inquiry" 
                  className="px-8 py-4 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  Apply Now
                </a>
                <a 
                  href="/admissions/admission-procedure" 
                  className="px-8 py-4 bg-[var(--surface-2)] text-[var(--text)] font-semibold rounded-xl border border-[var(--border-light)] hover:bg-[var(--surface-3)] transition-colors"
                >
                  View Admission Process
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}