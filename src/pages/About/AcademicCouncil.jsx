import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AcademicCouncil() {
  const councilMembers = [
    {
      name: "B. Vijaya Bhaskar Reddy",
      position: "Chairperson - Academic Council",
      qualification: "Ph.D in Management, IIM Ahmedabad",
      role: "Strategic Academic Leadership & Vision"
    },
    {
      name: "Dr. M. Balakoteswari",
      position: "Dean - Academic Affairs",
      qualification: "Ph.D in Organizational Behavior",
      role: "Academic Program Oversight"
    },
    {
      name: "Prof. B. Durga Prasad",
      position: "Academic Council Representative",
      qualification: "Ph.D in Business Management",
      role: "Curriculum Development & Research"
    },
    {
      name: "Dr. Rajesh Kumar",
      position: "Head - MBA Program",
      qualification: "Ph.D in Finance, IIM Bangalore",
      role: "MBA Academic Excellence"
    },
    {
      name: "Prof. Priya Sharma",
      position: "Head - PGDM Program",
      qualification: "Ph.D in Business Analytics, IIT Delhi",
      role: "PGDM Academic Innovation"
    },
    {
      name: "Dr. Suresh Reddy",
      position: "Head - Research & Development",
      qualification: "Ph.D in Strategic Management",
      role: "Research Initiatives & Publications"
    }
  ];

  const responsibilities = [
    {
      title: "Academic Standards",
      description: "Maintaining and enhancing academic excellence across all programs",
      icon: "📚"
    },
    {
      title: "Curriculum Development",
      description: "Designing industry-relevant and globally competitive curricula",
      icon: "🔬"
    },
    {
      title: "Faculty Development",
      description: "Ensuring continuous professional development of faculty members",
      icon: "👨‍🏫"
    },
    {
      title: "Quality Assurance",
      description: "Implementing robust quality assurance mechanisms for academic programs",
      icon: "✅"
    },
    {
      title: "Research Oversight",
      description: "Promoting and monitoring research activities and publications",
      icon: "📊"
    },
    {
      title: "Student Assessment",
      description: "Developing fair and comprehensive student evaluation systems",
      icon: "📝"
    }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Academic Council"
            subtitle="Academic governance and oversight"
            description="The apex academic body responsible for maintaining excellence in education and research"
          />

          <div className="space-y-section">
            {/* Introduction */}
            <div className="panel">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl" style={{ color: 'var(--text)', marginBottom: '2rem' }}>
                  Academic Excellence & Governance
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0" style={{
                  color: 'var(--text-soft)',
                  lineHeight: '1.7'
                }}>
                  The Academic Council serves as the premier academic authority at SSB Puttaparthi,
                  responsible for formulating academic policies, ensuring quality standards, and
                  driving innovation in management education.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6" style={{ background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🏛️</div>
                  <h4 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Academic Governance</h4>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Strategic oversight of all academic programs and initiatives
                  </p>
                </div>

                <div className="text-center p-4 sm:p-6" style={{ background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>⚖️</div>
                  <h4 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Quality Assurance</h4>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Ensuring highest standards in curriculum and delivery
                  </p>
                </div>

                <div className="text-center p-4 sm:p-6" style={{ background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🎯</div>
                  <h4 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Strategic Vision</h4>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Defining long-term academic excellence and innovation goals
                  </p>
                </div>
              </div>
            </div>

            {/* Council Members */}
            <div className="panel">
              <h2 className="text-lg sm:text-xl md:text-2xl text-center mb-6 sm:mb-8 md:mb-12" style={{ color: 'var(--text)' }}>
                Academic Council Members
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {councilMembers.map((member, index) => (
                  <div key={index} className="p-4 sm:p-6 text-center hover:transform hover:translate-y-[-4px] hover:shadow-[var(--shadow-medium)]" style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    transition: 'all var(--transition-medium)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>

                    <div style={{
                      position: 'absolute',
                      top: '-40px',
                      right: '-40px',
                      width: '100px',
                      height: '100px',
                      background: 'radial-gradient(circle, var(--brand)15, transparent)',
                      borderRadius: '50%'
                    }} />
                    <h3 style={{
                      color: 'var(--text)',
                      fontSize: '1.2em',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {member.name}
                    </h3>

                    <p style={{
                      color: 'var(--brand)',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      fontSize: '0.95em',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {member.position}
                    </p>

                    <p style={{
                      color: 'var(--text-soft)',
                      fontSize: '0.85em',
                      marginBottom: '1rem',
                      fontStyle: 'italic',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {member.qualification}
                    </p>

                    <div style={{
                      background: 'var(--surface-1)',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--border-light)',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <p style={{
                        color: 'var(--text-dim)',
                        fontSize: '0.8em',
                        fontWeight: '600'
                      }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="panel">
              <h2 className="text-lg sm:text-xl md:text-2xl text-center mb-6 sm:mb-8 md:mb-12" style={{ color: 'var(--text)' }}>
                Key Responsibilities
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="p-4 sm:p-6 text-center hover:transform hover:translate-y-[-2px] hover:shadow-[var(--shadow-soft)]" style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    transition: 'all var(--transition-medium)'
                  }}>

                    <div style={{ fontSize: '3.5em', marginBottom: '1rem' }}>
                      {responsibility.icon}
                    </div>
                    <h4 style={{
                      color: 'var(--brand)',
                      fontSize: '1.3em',
                      fontWeight: 'bold',
                      marginBottom: '1rem'
                    }}>
                      {responsibility.title}
                    </h4>
                    <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                      {responsibility.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Meeting Schedule & Procedures */}
            <div className="panel" style={{
              background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
              border: '1px solid var(--border-light)'
            }}>
              <h2 className="text-lg sm:text-xl md:text-2xl text-center mb-6 sm:mb-8 md:mb-12" style={{ color: 'var(--text)' }}>
                Council Operations
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6" style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)'
                }}>
                  <div style={{ fontSize: '2.5em', textAlign: 'center', marginBottom: '1rem' }}>📅</div>
                  <h4 style={{ color: 'var(--brand)', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                    Meeting Schedule
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-soft)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>• Monthly Academic Reviews</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Quarterly Policy Updates</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Annual Strategic Planning</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Special Sessions as needed</li>
                  </ul>
                </div>

                <div className="p-4 sm:p-6" style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)'
                }}>
                  <div style={{ fontSize: '2.5em', textAlign: 'center', marginBottom: '1rem' }}>📋</div>
                  <h4 style={{ color: 'var(--brand)', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                    Key Decisions
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-soft)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>• Curriculum Approval</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Faculty Appointments</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Academic Regulations</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Quality Standards</li>
                  </ul>
                </div>

                <div className="p-4 sm:p-6" style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)'
                }}>
                  <div style={{ fontSize: '2.5em', textAlign: 'center', marginBottom: '1rem' }}>🎯</div>
                  <h4 style={{ color: 'var(--brand)', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                    Strategic Focus
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-soft)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>• Academic Innovation</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Industry Alignment</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Research Excellence</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Global Standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}