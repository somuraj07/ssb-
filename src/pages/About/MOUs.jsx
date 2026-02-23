import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function MOUs() {
  const mouData = [
    {
      title: "RISE Europe MoU",
      partner: "Research and Innovation in Science and Engineering - Europe",
      type: "International Collaboration",
      date: "2023",
      description: "Strategic partnership for research collaboration, student exchange programs, and joint academic initiatives with European institutions.",
      benefits: [
        "Research collaboration opportunities",
        "Faculty exchange programs", 
        "Joint research publications",
        "Access to European research networks",
        "International conference participation"
      ],
      icon: "🇪🇺",
      color: "var(--brand)"
    },
    {
      title: "IAESTE India - Europe MoU", 
      partner: "International Association for Exchange of Students for Technical Experience",
      type: "Student Exchange Program",
      date: "2022",
      description: "Comprehensive agreement facilitating student internships and technical experience exchange between India and European countries.",
      benefits: [
        "International internship opportunities",
        "Technical skill development abroad",
        "Cultural exchange programs",
        "Global industry exposure",
        "Professional network building"
      ],
      icon: "🎓",
      color: "var(--brand)"
    },
    {
      title: "APSSDC Partnership",
      partner: "Andhra Pradesh State Skill Development Corporation",
      type: "Skill Development Initiative",
      date: "2023", 
      description: "Strategic partnership to enhance skill development, provide industry-relevant training, and improve employability of students.",
      benefits: [
        "Industry-aligned skill training",
        "Certification programs",
        "Placement assistance",
        "Entrepreneurship development",
        "Government scheme benefits"
      ],
      icon: "🏢",
      color: "var(--brand)"
    }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Memorandums of Understanding"
            subtitle="Strategic partnerships and collaborations"
            description="Building bridges for academic excellence and global opportunities"
          />
          
          <div className="space-y-section">
            {/* Introduction Section */}
            <div className="panel">
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Our Global Partnerships</h2>
                <p style={{ color: 'var(--text-soft)', fontSize: '1.1em', maxWidth: '800px', margin: '0 auto' }}>
                  SSB Puttaparthi has established strategic partnerships with leading international and national 
                  organizations to provide our students with world-class opportunities for learning, research, 
                  and professional development.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '2.5em', marginBottom: '1rem' }}>🌍</div>
                  <h4 style={{ color: 'var(--brand)', marginBottom: '0.5rem' }}>Global Reach</h4>
                  <p style={{ color: 'var(--text-soft)', fontSize: '0.9em' }}>International partnerships across Europe and Asia</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '2.5em', marginBottom: '1rem' }}>🤝</div>
                  <h4 style={{ color: 'var(--brand)', marginBottom: '0.5rem' }}>Strategic Alliances</h4>
                  <p style={{ color: 'var(--text-soft)', fontSize: '0.9em' }}>Meaningful collaborations with industry leaders</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '2.5em', marginBottom: '1rem' }}>📈</div>
                  <h4 style={{ color: 'var(--brand)', marginBottom: '0.5rem' }}>Growth Opportunities</h4>
                  <p style={{ color: 'var(--text-soft)', fontSize: '0.9em' }}>Enhanced career prospects for our students</p>
                </div>
              </div>
            </div>

            {/* MOU Details */}
            <div className="panel">
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '3rem' }}>
                Active Memorandums of Understanding
              </h2>
              
              <div style={{ display: 'grid', gap: '3rem' }}>
                {mouData.map((mou, index) => (
                  <div key={index} style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.5rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Background decoration */}
                    <div style={{
                      position: 'absolute',
                      top: '-50px',
                      right: '-50px',
                      width: '150px',
                      height: '150px',
                      background: `radial-gradient(circle, ${mou.color}15, transparent)`,
                      borderRadius: '50%'
                    }} />
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', alignItems: 'start', position: 'relative', zIndex: 1 }}>
                      <div style={{
                        fontSize: '3em',
                        textAlign: 'center',
                        background: 'var(--surface-1)',
                        borderRadius: 'var(--radius-lg)',
                        
                        border: '1px solid var(--border-light)'
                      }}>
                        {mou.icon}
                      </div>
                      
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                          <h3 style={{ color: mou.color, fontSize: '1.6em', fontWeight: 'bold', margin: 0 }}>
                            {mou.title}
                          </h3>
                          <span style={{
                            background: mou.color + '20',
                            color: mou.color,
                            padding: '0.3rem 0.8rem',
                            borderRadius: 'var(--radius)',
                            fontSize: '0.8em',
                            fontWeight: 'bold'
                          }}>
                            {mou.date}
                          </span>
                        </div>
                        
                        <h4 style={{ color: 'var(--text)', fontSize: '1.1em', marginBottom: '0.5rem' }}>
                          {mou.partner}
                        </h4>
                        
                        <div style={{
                          background: 'var(--surface-1)',
                          padding: '0.5rem 1rem',
                          borderRadius: 'var(--radius)',
                          display: 'inline-block',
                          marginBottom: '1.5rem',
                          border: '1px solid var(--border-light)'
                        }}>
                          <span style={{ color: 'var(--text-soft)', fontSize: '0.9em', fontWeight: '600' }}>
                            {mou.type}
                          </span>
                        </div>
                        
                        <p style={{ color: 'var(--text-primary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                          {mou.description}
                        </p>
                        
                        <div style={{
                          background: 'var(--surface-1)',
                          padding: '2rem',
                          borderRadius: 'var(--radius-lg)',
                          border: '1px solid var(--border-light)'
                        }}>
                          <h5 style={{ color: mou.color, marginBottom: '1.5rem', fontSize: '1.1em' }}>
                            Key Benefits & Opportunities
                          </h5>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                            {mou.benefits.map((benefit, idx) => (
                              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: mou.color, fontSize: '1.2em' }}>✓</span>
                                <span style={{ color: 'var(--text-soft)', fontSize: '0.95em' }}>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Impact */}
            <div className="panel">
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '3rem' }}>
                Partnership Impact & Achievements
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>👥</div>
                  <div style={{ fontSize: '2.5em', fontWeight: 'bold', color: 'var(--brand)', marginBottom: '0.5rem' }}>150+</div>
                  <h4 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Students Benefited</h4>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Students have participated in exchange programs and international opportunities
                  </p>
                </div>
                
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🔬</div>
                  <div style={{ fontSize: '2.5em', fontWeight: 'bold', color: 'var(--brand)', marginBottom: '0.5rem' }}>25+</div>
                  <h4 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Research Projects</h4>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Collaborative research initiatives with international partners
                  </p>
                </div>
                
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🏆</div>
                  <div style={{ fontSize: '2.5em', fontWeight: 'bold', color: 'var(--brand)', marginBottom: '0.5rem' }}>40+</div>
                  <h4 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Certifications</h4>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    International certifications and skill development achievements
                  </p>
                </div>
              </div>
            </div>

            {/* Future Partnerships */}
            <div className="panel" style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'var(--text)', marginBottom: '2rem' }}>Expanding Our Network</h2>
              <p style={{ color: 'var(--text-soft)', fontSize: '1.1em', maxWidth: '600px', margin: '0 auto 2rem' }}>
                We continue to explore new partnerships and strengthen existing collaborations to provide 
                even more opportunities for our students and faculty.
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
                  Partnership Inquiries
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
                  Learn More About SSB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}