import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function AdmissionsCommittee() {
  const committeeMembers = [
    {
      name: "Dr. [Name]",
      position: "Chairman, Admissions Committee",
      designation: "Director & Principal",
      qualification: "Ph.D. in Management, MBA",
      experience: "25+ years",
      specialization: "Strategic Management, Leadership",
      email: "chairman.admissions@sanskrithibschool.com",
      phone: "+91-XXXX-XXXXXX",
      image: "👨‍💼"
    },
    {
      name: "Prof. [Name]",
      position: "Vice-Chairman",
      designation: "Associate Director",
      qualification: "Ph.D. in Business Administration",
      experience: "20+ years", 
      specialization: "Marketing, Consumer Behavior",
      email: "vice.chairman@sanskrithibschool.com",
      phone: "+91-XXXX-XXXXXX",
      image: "👩‍💼"
    },
    {
      name: "Dr. [Name]",
      position: "Member",
      designation: "Dean - Academics",
      qualification: "Ph.D. in Finance, CFA",
      experience: "18+ years",
      specialization: "Financial Management, Investment Analysis",
      email: "dean.academics@sanskrithibschool.com", 
      phone: "+91-XXXX-XXXXXX",
      image: "👨‍🎓"
    },
    {
      name: "Prof. [Name]",
      position: "Member",
      designation: "Head - MBA Department",
      qualification: "Ph.D. in Operations Management",
      experience: "15+ years",
      specialization: "Operations Research, Supply Chain",
      email: "hod.mba@sanskrithibschool.com",
      phone: "+91-XXXX-XXXXXX",
      image: "👩‍🏫"
    },
    {
      name: "Dr. [Name]",
      position: "Member",
      designation: "Head - PGDM Department", 
      qualification: "Ph.D. in Human Resources",
      experience: "12+ years",
      specialization: "Organizational Behavior, Talent Management",
      email: "hod.pgdm@sanskrithibschool.com",
      phone: "+91-XXXX-XXXXXX",
      image: "👨‍💻"
    },
    {
      name: "Mr./Ms. [Name]",
      position: "External Expert",
      designation: "Industry Representative",
      qualification: "MBA, Industry Veteran",
      experience: "30+ years",
      specialization: "Corporate Leadership, Business Strategy",
      email: "external.expert@sanskrithibschool.com",
      phone: "+91-XXXX-XXXXXX",
      image: "💼"
    },
    {
      name: "Registrar [Name]",
      position: "Member Secretary",
      designation: "Registrar",
      qualification: "M.Com, LLB",
      experience: "20+ years",
      specialization: "Academic Administration, Legal Affairs",
      email: "registrar@sanskrithibschool.com",
      phone: "+91-XXXX-XXXXXX",
      image: "📋"
    }
  ];

  const committeeResponsibilities = [
    {
      area: "Admission Policy Formulation",
      description: "Developing and updating admission policies, eligibility criteria, and selection procedures",
      icon: "📋"
    },
    {
      area: "Application Review Process",
      description: "Overseeing the evaluation of applications, entrance exam scores, and academic credentials",
      icon: "🔍"
    },
    {
      area: "Interview & Selection",
      description: "Conducting personal interviews and making final selection decisions based on merit",
      icon: "💬"
    },
    {
      area: "Grievance Redressal",
      description: "Addressing student grievances and queries related to admission processes",
      icon: "⚖️"
    },
    {
      area: "Scholarship Committee",
      description: "Evaluating scholarship applications and merit-based financial assistance",
      icon: "🏆"
    },
    {
      area: "Quality Assurance", 
      description: "Ensuring transparency, fairness, and adherence to institutional standards",
      icon: "✅"
    }
  ];

  const meetingSchedule = [
    {
      meeting: "Regular Committee Meeting",
      frequency: "Monthly",
      purpose: "Review admission statistics, policy updates, and ongoing processes",
      timing: "First Monday of every month"
    },
    {
      meeting: "Admission Season Meetings",
      frequency: "Weekly (March-August)", 
      purpose: "Daily monitoring during peak admission period",
      timing: "Every Tuesday during admission season"
    },
    {
      meeting: "Emergency Meetings",
      frequency: "As Required",
      purpose: "Address urgent admission-related issues or policy changes",
      timing: "Called by Chairman when needed"
    },
    {
      meeting: "Annual Review Meeting",
      frequency: "Yearly",
      purpose: "Comprehensive review of admission processes and policy recommendations",
      timing: "End of academic year (May)"
    }
  ];

  const contactInfo = {
    office: "Admissions Committee Office",
    location: "Ground Floor, Administrative Block",
    workingHours: "Monday to Friday: 9:00 AM - 5:00 PM",
    saturdayHours: "Saturday: 9:00 AM - 1:00 PM",
    email: "admissions.committee@sanskrithibschool.com",
    phone: "+91-8555-288838",
    emergencyContact: "+91-XXXX-XXXXXX"
  };

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Admissions Committee"
            subtitle="Ensuring Fair and Transparent Admissions"
            description="Meet our dedicated admissions committee responsible for maintaining excellence in student selection"
          />
          
          <div className="space-y-section">
            {/* Committee Overview */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6">Our Mission</h2>
              <p className="text-[var(--text-soft)] text-base sm:text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
                The Admissions Committee at Sanskrithi School of Business is committed to ensuring a fair, 
                transparent, and merit-based selection process. Our experienced panel of educators and industry 
                experts work together to identify and welcome the most promising candidates who align with our 
                institutional values and academic standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-0">
                  <span className="text-4xl font-bold text-[var(--text)]">7</span>
                  <p className="text-[var(--text-soft)]">Committee Members</p>
                </div>
                <div className="text-center p-3 sm:p-0">
                  <span className="text-4xl font-bold text-[var(--text)]">25+</span>
                  <p className="text-[var(--text-soft)]">Years Average Experience</p>
                </div>
                <div className="text-center p-3 sm:p-0">
                  <span className="text-4xl font-bold text-[var(--text)]">100%</span>
                  <p className="text-[var(--text-soft)]">Transparent Process</p>
                </div>
              </div>
            </Card>

            {/* Committee Members */}
            <Card>
              <h2 className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xl sm:text-2xl font-bold text-[var(--text)] mb-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <span className="leading-tight">Committee Members</span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {committeeMembers.map((member, i) => (
                  <div key={i} className="p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">{member.image}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-1 break-words">{member.name}</h3>
                        <p className="text-[var(--text-soft)] font-medium mb-2">{member.position}</p>
                        <p className="text-[var(--text-soft)] text-sm">{member.designation}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-[var(--text)] text-sm mb-1">Qualification</h4>
                          <p className="text-[var(--text-soft)] text-sm">{member.qualification}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--text)] text-sm mb-1">Experience</h4>
                          <p className="text-[var(--text-soft)] text-sm">{member.experience}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[var(--text)] text-sm mb-1">Specialization</h4>
                        <p className="text-[var(--text-soft)] text-sm mb-3">{member.specialization}</p>
                      </div>
                      
                      <div className="pt-3 border-t border-[var(--border-light)]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="break-words">
                            <span className="text-[var(--text-soft)]">Email: </span>
                            <span className="text-[var(--text)] break-words">{member.email}</span>
                          </div>
                          <div className="break-words">
                            <span className="text-[var(--text-soft)]">Phone: </span>
                            <span className="text-[var(--text)] break-words">{member.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Committee Responsibilities */}
            <Card>
              <h2 className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xl sm:text-2xl font-bold text-[var(--text)] mb-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <span className="leading-tight">Committee Responsibilities</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {committeeResponsibilities.map((responsibility, i) => (
                  <div key={i} className="p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                    <div className="w-14 h-14 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center mb-4">
                      <span className="text-2xl">{responsibility.icon}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--text)] mb-3">{responsibility.area}</h3>
                    <p className="text-[var(--text-soft)] text-sm leading-relaxed">{responsibility.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Meeting Schedule */}
            <Card>
              <h2 className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xl sm:text-2xl font-bold text-[var(--text)] mb-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center shrink-0">
                  <span className="text-2xl">📅</span>
                </div>
                <span className="leading-tight">Meeting Schedule</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {meetingSchedule.map((meeting, i) => (
                  <div key={i} className="p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-[var(--text)]">{meeting.meeting}</h3>
                      <span className="px-3 py-1 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--accent)] rounded-full text-sm font-medium">
                        {meeting.frequency}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-[var(--text)] text-sm mb-1">Purpose</h4>
                        <p className="text-[var(--text-soft)] text-sm">{meeting.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text)] text-sm mb-1">Timing</h4>
                        <p className="text-[var(--text-soft)] text-sm">{meeting.timing}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>


            {/* Call to Action */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-4">Have Questions About Admissions?</h2>
              <p className="text-[var(--text-soft)] mb-8">
                Our admissions committee is here to help you through every step of the application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/inquiry" 
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  Contact Committee
                </a>
                <a 
                  href="/inquiry" 
                  className="w-full sm:w-auto px-8 py-4 bg-[var(--surface-2)] text-[var(--text)] font-semibold rounded-xl border border-[var(--border-light)] hover:bg-[var(--surface-3)] transition-colors"
                >
                  Start Application
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .main-content .space-y-section > * {
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
}
