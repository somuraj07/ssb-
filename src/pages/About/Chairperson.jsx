import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import chairman from "../../assets/chairman.png";
export default function AboutChairperson() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="About Chairperson"
            subtitle="Message from our Chairperson"
            description="Leadership vision and guidance for SSB Puttaparthi"
          />
          
          <div className="space-y-section">
            {/* Chairperson Profile Section */}
            <div className="panel" style={{ 
              background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
              border: '1px solid var(--border-light)'
            }}>
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[350px_1fr] gap-6 md:gap-8 lg:gap-16 items-start">
                <div className="text-center md:sticky md:top-8">
                  <div style={{ 
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    boxShadow: 'var(--shadow-medium)',
                    border: '1px solid var(--border-light)'
                  }} className="p-4 sm:p-6 md:p-8 rounded-xl">
                    <img 
                      src={chairman}
                      alt="Dr. Vijay Baskar Reddy - Chairperson"
                      className="w-40 h-40 sm:w-52 sm:h-52 md:w-[220px] md:h-[220px] rounded-full object-cover mx-auto mb-6 block border-4 border-[var(--brand)]"
                    />
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--brand)', fontSize: '1.4em' }}>
                      Dr. Vijay Baskar Reddy
                    </h3>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(-accent)' }}>
                      Chairperson & Founder
                    </p>
                    <p style={{ fontSize: '0.9em', color: 'var(--text)', lineHeight: '1.4' }}>
                      Ph.D in Management<br/>
                      IIM Ahmedabad<br/>
                      30+ years experience in<br/>
                      Academia & Industry
                    </p>
                    
                    <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--surface-1)', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)' }}>
                      <div style={{ fontSize: '0.9em', color: 'var(--text)', marginBottom: '0.5rem' }}>
                        Awards & Recognition
                      </div>
                      <div style={{ fontSize: '0.8em', color: 'var(--text)' }}>
                        • Excellence in Education Award 2020<br/>
                        • Industry Leadership Recognition<br/>
                        • Academic Excellence Honor<br/>
                        • Business Innovation Award
                      </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--surface-2)', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)' }}>
                      <div style={{ fontSize: '0.9em', color: 'var(--text)', marginBottom: '0.5rem' }}>
                        Professional Experience
                      </div>
                      <div style={{ fontSize: '0.8em', color: 'var(--text)' }}>
                        • Former Vice President, TCS<br/>
                        • Board Member, AICTE<br/>
                        • Consultant, Multiple MNCs<br/>
                        • Author of 15+ Research Papers
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8">
                  <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '3rem', fontSize: '2.2em' }} className="text-xl sm:text-2xl">
                    Chairperson's Message
                  </h2>
                  
                  <div style={{ 
                    position: 'relative',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid var(--border-light)'
                  }} className="p-4 sm:p-6 md:p-10 rounded-lg mb-6 md:mb-8">
                    <div className="absolute -top-4 left-4 sm:left-8 text-2xl sm:text-3xl md:text-4xl text-[var(--brand)] opacity-30">
                      "
                    </div>
                    <blockquote style={{ 
                      fontStyle: 'italic', 
                      lineHeight: '1.6',
                      color: 'var(--text)'
                    }} className="text-base sm:text-lg md:text-xl mb-6 pl-4 sm:pl-8">
                      Education is the cornerstone of a progressive society. At Sanskrithi School of Business, 
                      we don't just impart knowledge; we shape character, build leadership, and foster innovation. 
                      Our mission is to create ethical business leaders who will drive positive change in the world.
                    </blockquote>
                    <div className="absolute -bottom-4 right-4 sm:right-8 text-2xl sm:text-3xl md:text-4xl text-[var(--brand)] opacity-30 rotate-180">
                      "
                    </div>
                  </div>
                  
                  <div className="grid gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
                    <p style={{ fontSize: '1.1em', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                      When we established SSB Puttaparthi in 2008, our vision was clear: to create an institution 
                      that bridges the gap between academic excellence and industry relevance. Today, as I reflect 
                      on our journey of over 15 years, I am proud to see how far we have come.
                    </p>
                    
                    <p style={{ fontSize: '1.1em', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                      Our students are not just learners; they are future leaders, entrepreneurs, and change-makers. 
                      We have carefully crafted our curriculum to ensure that every graduate possesses not only 
                      technical competencies but also strong ethical values and social consciousness.
                    </p>
                    
                    <div style={{ 
                      background: 'var(--surface-1)', 
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-light)',
                      borderLeft: '4px solid var(--brand)'
                    }} className="p-4 sm:p-6 md:p-8">
                      <h4 style={{ color: 'var(--brand)', marginBottom: '1rem', fontSize: '1.2em' }}>
                        Our Commitment to Excellence
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                          <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                          <span style={{ color: 'var(--text-primary)' }}>
                            Maintaining the highest standards of academic rigor and industry relevance
                          </span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                          <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                          <span style={{ color: 'var(--text-primary)' }}>
                            Fostering innovation, entrepreneurship, and critical thinking among students
                          </span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                          <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                          <span style={{ color: 'var(--text-primary)' }}>
                            Building strong industry partnerships for practical learning experiences
                          </span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                          <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                          <span style={{ color: 'var(--text-primary)' }}>
                            Ensuring holistic development through values-based education
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <p style={{ fontSize: '1.1em', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                      As we look towards the future, we remain committed to evolving with the changing business 
                      landscape while staying true to our core values. I invite you to be part of our transformative 
                      journey and contribute to building a better tomorrow.
                    </p>
                  </div>
                  
                  <div style={{ 
                    textAlign: 'right',
                    borderTop: '2px solid var(--brand)',
                    fontWeight: 'bold',
                    color: 'var(--brand)'
                  }} className="pt-4 sm:pt-6 text-base sm:text-lg md:text-xl">
                    Warm Regards,<br/>
                    <span style={{ fontSize: '1.1em' }}>Dr. Vijay Baskar Reddy</span><br/>
                    <span style={{ fontSize: '0.9em', color: 'var(--text-soft)' }}>Chairperson & Founder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Leadership Philosophy */}
            <div className="panel">
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '2rem' }} className="text-xl sm:text-2xl">
                Leadership Philosophy
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)'
                }} className="rounded-lg p-4 sm:p-6 text-center">
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🎓</div>
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Academic Excellence</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Pursuing the highest standards in education delivery and academic research
                  </p>
                </div>
                
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)'
                }} className="rounded-lg p-4 sm:p-6 text-center">
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>💼</div>
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Industry Connect</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Building strong partnerships with industry leaders for practical learning
                  </p>
                </div>
                
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)'
                }} className="rounded-lg p-4 sm:p-6 text-center">
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🌍</div>
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Global Perspective</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Preparing students for global business challenges and opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}