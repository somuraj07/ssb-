import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import chairman from "../../assets/chairman.png";
export default function AboutOverview() {
  const teamMembers = [
    {
      name: "Dr. Balakoteswari M",
      position: "Principal (Dean) - Academic Affairs",
      qualification: "MBA, M.Sc. (Gold Medal), PhD, PGDHRM",
      experience: "18+ years Teaching, 1 year Industry",
      expertise: "Human Resources, Academic Leadership, Management Studies"
    },
    {
      name: "Mrs. E Prasanthi",
      position: "Associate Professor, Head of Department",
      qualification: "MBA (PhD)",
      experience: "8+ years Teaching, 3 years Industry",
      expertise: "Finance, Entrepreneurship, Management"
    },
    {
      name: "Dr. Bhabani Shankar Padhy",
      position: "Associate Professor",
      qualification: "PhD, MPhil, MBA, MSc (Chemistry), BSc",
      experience: "12+ years in Academia",
      expertise: "Management Research, Interdisciplinary Studies"
    },
    {
      name: "Prakash Sharma VN",
      position: "Assistant Professor",
      qualification: "M.Com, MBA, FCMA",
      experience: "10+ years in Management Education",
      expertise: "Cost Accounting, Financial Management"
    },
    {
      name: "Ms. S Khuteja",
      position: "Associate Professor",
      qualification: "MBA (PhD)",
      experience: "10+ years in Teaching",
      expertise: "Finance, Human Resources, Management"
    },
    {
      name: "Mr. P. Lingamaiah",
      position: "Assistant Professor",
      qualification: "MBA",
      experience: "8+ years in Management Education",
      expertise: "Business Management, Operations"
    }
  ];
  
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="About SSB Puttaparthi"
            subtitle="Complete overview of our institution"
            description="Learn about our journey, values, and commitment to excellence in education"
          />
          
          <div className="space-y-section">
            {/* Inspired Beginnings Section */}
            <div className="panel">
              <h2>Inspired Beginnings</h2>
              <p className="text-intro">
                Our journey began with a simple yet powerful vision - to create business leaders who lead with purpose
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=800&auto=format&fit=crop"
                    alt="SSB Campus Heritage Building"
                    className="image-frame"
                  />
                  <p className="image-caption">
                    SSB Campus - A blend of tradition and modernity
                  </p>
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand)' }}>The Foundation</h3>
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                    Established in 2008 in the spiritual town of Puttaparthi, Sanskrithi School of Business 
                    was founded on the principles of excellence, integrity, and social responsibility. Our 
                    founders envisioned an institution that would bridge the gap between traditional business 
                    education and modern industry requirements.
                  </p>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2em', fontWeight: 'bold', color: 'var(--brand)' }}>2008</div>
                      <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>Established</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2em', fontWeight: 'bold', color: 'var(--brand)' }}>15+</div>
                      <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand)' }}>Our Growth</h3>
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                    From humble beginnings with 60 students, we have grown into a premier institution with 
                    over 1200+ alumni working across Fortune 500 companies globally. Our commitment to 
                    quality education and holistic development has earned us recognition from industry and 
                    academic bodies alike.
                  </p>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2em', fontWeight: 'bold', color: 'var(--brand)' }}>1200+</div>
                      <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>Alumni Network</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2em', fontWeight: 'bold', color: 'var(--brand)' }}>95%</div>
                      <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>Placement Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision and Mission Section */}
            <div className="panel">
              <h2>Vision & Mission</h2>
              <p style={{ color: 'var(--text-soft)', marginBottom: '3rem', fontSize: '1.1em' }}>
                Guiding principles that shape our educational philosophy and institutional direction
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '3rem' }}>
                <div style={{ 
                  padding: '2rem', 
                  background: 'var(--surface-1)', 
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  position: 'relative'
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    top: '-10px', 
                    left: '2rem', 
                    background: 'var(--brand)', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '6px',
                    fontSize: '0.9em',
                    fontWeight: 'bold'
                  }}>
                    OUR VISION
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <p style={{ fontSize: '1.1em', lineHeight: '1.7', marginBottom: '2rem' }}>
                      To be a globally recognized institution that transforms aspiring professionals into 
                      ethical business leaders, fostering innovation, sustainability, and social responsibility 
                      in the dynamic global economy.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                      alt="Global Business Leadership Vision"
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                    />
                  </div>
                </div>
                
                <div style={{ 
                  padding: '2rem', 
                  background: 'var(--surface-1)', 
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  position: 'relative'
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    top: '-10px', 
                    left: '2rem', 
                    background: 'var(--accent)', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '6px',
                    fontSize: '0.9em',
                    fontWeight: 'bold'
                  }}>
                    OUR MISSION
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                        <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                        Deliver excellence in management education through innovative pedagogy and industry integration
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                        <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                        Develop ethical leaders with strong analytical, communication, and leadership skills
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                        <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                        Foster entrepreneurship, innovation, and sustainable business practices
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                        <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                        Create value for all stakeholders through research, consultancy, and community engagement
                      </li>
                    </ul>
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                      alt="Excellence in Education Mission"
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Chairman's Message Section */}
            <div className="panel" style={{ 
              background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
              border: '1px solid var(--border-light)'
            }}>
              <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Chairman's Message</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '4rem', alignItems: 'start' }}>
                <div style={{ textAlign: 'center', position: 'sticky', top: '2rem' }}>
                  <div style={{ 
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    padding: '2rem',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-medium)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <img 
                      src={chairman}
                      alt="B. Vijay Bhaskar Reddy - Chairman"
                      style={{
                        width: '220px',
                        height: '220px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        margin: '0 auto 1.5rem',
                        display: 'block',
                        border: '4px solid var(--brand)'
                      }}
                    />
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--brand)', fontSize: '1.4em' }}>B. Vijay Bhaskar Reddy</h3>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--accent)' }}>Chairman & Founder</p>
                    <p style={{ fontSize: '0.9em', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      Ph.D IIM Ahmedabad<br/>
                      30+ years experience in<br/>
                      Academia & Industry
                    </p>
                    
                    <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--surface-1)', borderRadius: '8px' }}>
                      <div style={{ fontSize: '0.9em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Awards & Recognition</div>
                      <div style={{ fontSize: '0.8em', color: 'var(--text-dim)' }}>
                        • Excellence in Education Award<br/>
                        • Industry Leadership Recognition<br/>
                        • Academic Excellence Honor
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <div style={{ 
                    position: 'relative',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    padding: '2.5rem',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid var(--border-light)',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '2rem',
                      fontSize: '3em',
                      color: 'var(--brand)',
                      opacity: '0.3'
                    }}>
                      "
                    </div>
                    <blockquote style={{ 
                      fontStyle: 'italic', 
                      fontSize: '1.3em', 
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      color: 'var(--text)',
                      paddingLeft: '2rem'
                    }}>
                      Education is not just about acquiring knowledge; it's about transforming lives and 
                      building character. At SSB Puttaparthi, we are committed to nurturing not just 
                      successful professionals, but responsible citizens who will contribute meaningfully 
                      to society.
                    </blockquote>
                    <div style={{
                      position: 'absolute',
                      bottom: '-15px',
                      right: '2rem',
                      fontSize: '3em',
                      color: 'var(--brand)',
                      opacity: '0.3',
                      transform: 'rotate(180deg)'
                    }}>
                      "
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                    <div>
                      <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                        Over the past 15 years, we have witnessed thousands of young minds transform into 
                        confident business leaders. Our holistic approach to education, combined with 
                        industry-relevant curriculum and values-based learning, ensures that our graduates 
                        are well-prepared for the challenges of the modern business world.
                      </p>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop"
                        alt="Leadership in Action"
                        style={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                  </div>
                  
                  <p style={{ marginBottom: '2rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                    As we continue to evolve and grow, our commitment to excellence remains unwavering. 
                    We invite you to be part of this transformative journey.
                  </p>
                  
                  <div style={{ 
                    textAlign: 'right',
                    borderTop: '2px solid var(--brand)',
                    paddingTop: '1rem',
                    fontSize: '1.1em',
                    fontWeight: 'bold',
                    color: 'var(--brand)'
                  }}>
                    - B. Vijay Bhaskar Reddy
                  </div>
                </div>
              </div>
            </div>

            {/* Visionary Team Section */}
            <div className="panel">
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '1rem' }}>Visionary Team</h2>
              <p style={{ color: 'var(--text-soft)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.1em' }}>
                Meet the distinguished leaders driving excellence in management education
              </p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                {teamMembers.map((member, index) => (
                  <div key={index} style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    textAlign: 'center',
                    transition: 'all var(--transition-medium)',
                    ':hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 'var(--shadow-medium)',
                      borderColor: 'var(--border-medium)'
                    }
                  }} className="hover:transform hover:translate-y-[-4px] hover:shadow-[var(--shadow-medium)] hover:border-[var(--border-medium)]">
                  
                    <h4 style={{ 
                      color: 'var(--text)', 
                      fontSize: '1.2em', 
                      fontWeight: 'bold', 
                      marginBottom: '0.5rem' 
                    }}>
                      {member.name}
                    </h4>
                    <p style={{ 
                      color: 'var(--brand)', 
                      fontWeight: 'bold', 
                      marginBottom: '0.5rem',
                      fontSize: '0.95em'
                    }}>
                      {member.position}
                    </p>
                    <p style={{ 
                      color: 'var(--text-soft)', 
                      fontStyle: 'italic', 
                      marginBottom: '0.5rem',
                      fontSize: '0.9em'
                    }}>
                      {member.qualification}
                    </p>
                    <p style={{ 
                      color: 'var(--text-dim)', 
                      marginBottom: '1rem',
                      fontSize: '0.85em'
                    }}>
                      {member.experience}
                    </p>
                    
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="panel" style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Ready to Begin Your Journey?</h2>
              <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', fontSize: '1.1em' }}>
                Join our community of future business leaders and make your mark in the corporate world
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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}