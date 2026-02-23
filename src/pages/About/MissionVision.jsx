import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function MissionVision() {
  const visionPillars = [
    {
      title: "Excellence in Academic Delivery",
      description: "Maintaining the highest standards in curriculum, teaching methodologies, and learning outcomes",
      icon: "🎓"
    },
    {
      title: "Ethical Leadership Development",
      description: "Nurturing leaders who prioritize integrity, social responsibility, and sustainable business practices",
      icon: "⚖️"
    },
    {
      title: "Innovation and Research",
      description: "Fostering a culture of creative thinking, research excellence, and technological advancement",
      icon: "🔬"
    },
    {
      title: "Global Perspective with Local Relevance",
      description: "Preparing students for global opportunities while addressing local community needs",
      icon: "🌍"
    },
    {
      title: "Sustainable Development Focus",
      description: "Integrating environmental consciousness and sustainable practices into business education",
      icon: "🌱"
    }
  ];

  const missionComponents = [
    {
      title: "Comprehensive Curriculum Design",
      description: "Developing industry-relevant programs that balance theoretical knowledge with practical application",
      icon: "📚"
    },
    {
      title: "Industry-Academia Collaboration",
      description: "Building strong partnerships with leading companies for internships, projects, and placement opportunities",
      icon: "🤝"
    },
    {
      title: "Research and Innovation Culture",
      description: "Promoting cutting-edge research and encouraging innovative solutions to business challenges",
      icon: "💡"
    },
    {
      title: "Character Building and Ethics",
      description: "Instilling strong moral values and ethical decision-making capabilities in future leaders",
      icon: "🛡️"
    },
    {
      title: "Global Exposure and Opportunities",
      description: "Providing international exchange programs, global internships, and multicultural learning experiences",
      icon: "✈️"
    }
  ];

  const coreValues = [
    {
      title: "Integrity",
      description: "Upholding the highest standards of honesty, transparency, and ethical conduct in all our endeavors",
      icon: "💎",
      color: "var(--brand)"
    },
    {
      title: "Excellence",
      description: "Striving for continuous improvement and delivering superior quality in education and services",
      icon: "🏆",
      color: "var(--accent)"
    },
    {
      title: "Innovation",
      description: "Embracing creative thinking, modern technologies, and progressive approaches to learning",
      icon: "🚀",
      color: "var(--brand-light)"
    },
    {
      title: "Inclusivity",
      description: "Creating a diverse, welcoming, and supportive environment for all students, faculty, and staff",
      icon: "🤲",
      color: "var(--accent-secondary)"
    },
    {
      title: "Social Responsibility",
      description: "Contributing positively to society and addressing community needs through education and service",
      icon: "🌟",
      color: "var(--brand)"
    },
    {
      title: "Sustainability",
      description: "Promoting environmental consciousness and sustainable practices in all institutional activities",
      icon: "🌿",
      color: "var(--accent)"
    }
  ];

  return (
    <div className="main-content min-w-0 overflow-x-hidden">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Mission & Vision"
            subtitle="Our guiding principles and aspirations"
            description="The foundational values that drive our commitment to excellence in management education"
          />
          
          <div className="space-y-section">
            {/* Vision Section */}
            <div className="panel" style={{
              background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'var(--brand-gradient)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: 'var(--radius)',
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  marginBottom: '2rem'
                }}>
                  OUR VISION
                </div>
                <h2 style={{ color: 'var(--text)', fontSize: '2.2em', marginBottom: '2rem' }}>
                  Inspiring Excellence, Transforming Lives
                </h2>
                <p style={{ 
                  color: 'var(--text-primary)', 
                  fontSize: '1.3em', 
                  lineHeight: '1.7',
                  maxWidth: '900px',
                  margin: '0 auto',
                  fontStyle: 'italic'
                }}>
                  To be recognized as India's premier business school, known for innovation in pedagogy, 
                  industry partnerships, and producing graduates who lead transformational change in the 
                  global business landscape with integrity and social consciousness.
                </p>
              </div>

              <h3 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.6em' }}>
                Vision Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" style={{ minWidth: 0 }}>
                {visionPillars.map((pillar, index) => (
                  <div key={index} style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'all var(--transition-medium)'
                  }} className="hover:transform hover:translate-y-[-4px] hover:shadow-[var(--shadow-medium)]">
                    <div style={{ fontSize: '3em', marginBottom: '1rem' }}>{pillar.icon}</div>
                    <h4 style={{ color: 'var(--brand)', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '1rem' }}>
                      {pillar.title}
                    </h4>
                    <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Section */}
            <div className="panel" style={{
              background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--surface-1) 100%)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'var(--accent-gradient)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: 'var(--radius)',
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  marginBottom: '2rem'
                }}>
                  OUR MISSION
                </div>
                <h2 style={{ color: 'var(--text)', fontSize: '2.2em', marginBottom: '2rem' }}>
                  Empowering Future Leaders
                </h2>
                <p style={{ 
                  color: 'var(--text-primary)', 
                  fontSize: '1.3em', 
                  lineHeight: '1.7',
                  maxWidth: '900px',
                  margin: '0 auto'
                }}>
                  To provide world-class management education through innovative teaching methodologies, 
                  industry partnerships, and holistic development programs that prepare students for 
                  leadership roles in the dynamic global business environment while fostering ethical 
                  values and social responsibility.
                </p>
              </div>

              <h3 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '2rem', fontSize: '1.6em' }}>
                Mission Components
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" style={{ minWidth: 0 }}>
                {missionComponents.map((component, index) => (
                  <div key={index} style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'all var(--transition-medium)'
                  }} className="hover:transform hover:translate-y-[-4px] hover:shadow-[var(--shadow-medium)]">
                    <div style={{ fontSize: '3em', marginBottom: '1rem' }}>{component.icon}</div>
                    <h4 style={{ color: 'var(--brand)', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '1rem' }}>
                      {component.title}
                    </h4>
                    <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values Section */}
            <div className="panel">
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--text)', fontSize: '2.2em', marginBottom: '1rem' }}>
                  Core Values
                </h2>
                <p style={{ color: 'var(--text-soft)', fontSize: '1.1em', maxWidth: '600px', margin: '0 auto' }}>
                  The fundamental principles that guide our decisions, actions, and relationships within 
                  the SSB community and beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" style={{ minWidth: 0 }}>
                {coreValues.map((value, index) => (
                  <div key={index} style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'all var(--transition-medium)',
                    position: 'relative',
                    overflow: 'hidden'
                  }} className="hover:transform hover:translate-y-[-4px] hover:shadow-[var(--shadow-medium)]">
                    
                    {/* Background decoration */}
                    <div style={{
                      position: 'absolute',
                      top: '-30px',
                      right: '-30px',
                      width: '80px',
                      height: '80px',
                      background: `radial-gradient(circle, ${value.color}15, transparent)`,
                      borderRadius: '50%'
                    }} />
                    
                    <div style={{ fontSize: '3em', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                      {value.icon}
                    </div>
                    <h4 style={{ 
                      color: value.color, 
                      fontSize: '1.3em', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {value.title}
                    </h4>
                    <p style={{ 
                      color: 'var(--text-soft)', 
                      lineHeight: '1.6',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="panel" style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'var(--text)', marginBottom: '2rem' }}>
                Join Our Mission
              </h2>
              <p style={{ 
                color: 'var(--text-soft)', 
                fontSize: '1.1em', 
                maxWidth: '600px', 
                margin: '0 auto 2rem' 
              }}>
                Be part of an institution that values excellence, integrity, and innovation. 
                Together, let's shape the future of business education.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="/inquiry" 
                  style={{
                    background: 'var(--brand-gradient)',
                    color: 'white',
                    padding: '0.875rem 2rem',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all var(--transition-fast)',
                    display: 'inline-block'
                  }}
                  className="hover:scale-105 hover:shadow-lg"
                >
                  Apply Now
                </a>
                <a 
                  href="/about/overview" 
                  style={{
                    background: 'var(--surface-2)',
                    color: 'var(--text)',
                    padding: '0.875rem 2rem',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    border: '1px solid var(--border-light)',
                    transition: 'all var(--transition-fast)',
                    display: 'inline-block'
                  }}
                  className="hover:bg-[var(--surface-3)] hover:border-[var(--border-medium)]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}