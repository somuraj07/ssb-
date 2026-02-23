import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function IQAC() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="IQAC"
            subtitle="Internal Quality Assurance Cell"
            description="Ensuring and enhancing the quality of education and institutional processes"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About IQAC</h2>
              <p>
                The Internal Quality Assurance Cell (IQAC) is a vital component of our 
                institutional structure, established to monitor, assess, and continuously 
                improve the quality of education and administrative processes. The IQAC 
                serves as a catalyst for ushering in quality enhancement by 
                institutionalizing best practices.
              </p>
            </div>

            <div className="panel">
              <h2>Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Vision</h4>
                  <p className="text-sm">
                    To establish a system for conscious, consistent, and catalytic 
                    improvement in the overall performance of the institution through 
                    quality assurance mechanisms and best practices.
                  </p>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Mission</h4>
                  <p className="text-sm">
                    To develop a heightened level of clarity and focus in institutional 
                    functioning towards quality enhancement and facilitate internalization 
                    of quality culture.
                  </p>
                </div>
              </div>
            </div>

  <div className="p-8 rounded-lg bg-gradient-to-t from-[var(--base)]/60 via-transparent to-transparent">
  {/* Main Header with Green Border */}
  <div className="mb-10 text-center  py-2 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
    <h2 className="text-3xl font-bold text-[#2E75B6]">
      IQAC Composition (2025-26)
    </h2>
  </div>

  <div className="space-y-4 max-w-5xl mx-auto">
    {/* Row 1: Chair Person */}
    <div className="flex gap-4">
      <div className="w-48 flex items-center justify-center text-center text-white font-bold p-4 rounded-xl  border-gray-300 shadow-lg">
        Chair Person
      </div>
      <div className="flex-1 flex items-center  px-6 py-4 rounded-lg shadow-sm text-lg"style = {{background: 'var(--glass-bg) ', backdropFilter: 'var(--glass-backdrop)'}}>
        Dr. M. BalaKoteswari, Dean Academics & Principal
      </div>
    </div>

    {/* Row 2: Coordinator */}
    <div className="flex gap-4">
      <div className="w-48 flex items-center justify-center text-center  text-white font-bold p-4 rounded-xl  border-gray-300 shadow-lg">
        IQAC Co-coordinator
      </div>
      <div className="flex-1 flex items-center bg-gradient-to-b px-6 py-4 rounded-lg shadow-sm text-lg" style = {{background: 'var(--glass-bg) ', backdropFilter: 'var(--glass-backdrop)'}}>
        <ul className="list-disc list-inside">
          <li>Mrs. A. Aradhana, HOD & Associate Professor</li>
        </ul>
      </div>
    </div>

    {/* Row 3: Admin Officer */}
    <div className="flex gap-4">
      <div className="w-48 flex items-center justify-center text-center  to-[#00B0F0] text-white font-bold p-4 rounded-xl  border-gray-300 shadow-lg ">
        Senior Administrative Officer
      </div>
      <div className="flex-1 flex items-center  px-6 py-4 rounded-lg shadow-sm text-lg"style = {{background: 'var(--glass-bg) ', backdropFilter: 'var(--glass-backdrop)'}}>
        <ul className="list-disc list-inside">
          <li>Mr. Lingamaiah</li>
        </ul>
      </div>
    </div>

    {/* Row 4: Senior Professors */}
    <div className="flex gap-4">
      <div className="w-48 flex items-center text-white justify-center text-center  text-black font-bold p-4 rounded-xl  border-gray-300 shadow-lg">
        Senior Professors
      </div>
      <div className="flex-1 flex flex-col justify-center  px-6 py-4 rounded-lg shadow-sm text-lg"style = {{background: 'var(--glass-bg) ', backdropFilter: 'var(--glass-backdrop)'}}>
        <ul className="list-disc list-inside space-y-1">
          <li>Dr. Bhabani Shankar, Associate Professor</li>
          <li>E. Prashanthi. COE, Admission Director and Associate Professor.</li>
        </ul>
      </div>
    </div>
  </div>
         </div>

            <div className="panel">
              <h2>Key Functions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Quality Enhancement</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Curriculum development and review</li>
                    <li>Teaching-learning process improvement</li>
                    <li>Research and innovation promotion</li>
                    <li>Faculty development initiatives</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Assessment & Monitoring</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Academic and administrative audits</li>
                    <li>Student feedback analysis</li>
                    <li>Performance indicator tracking</li>
                    <li>Quality benchmarking</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Documentation & Reporting</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Annual Quality Assurance Report (AQAR)</li>
                    <li>Best practices documentation</li>
                    <li>Quality initiatives reporting</li>
                    <li>Institutional self-study reports</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Quality Initiatives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">📚 Academic Excellence</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Outcome-based curriculum design</li>
                    <li>Continuous assessment methods</li>
                    <li>Interactive teaching methodologies</li>
                    <li>Industry-integrated projects</li>
                    <li>Research publication support</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🏢 Infrastructure Development</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Modern classroom facilities</li>
                    <li>Digital library resources</li>
                    <li>Technology-enabled learning</li>
                    <li>Laboratory modernization</li>
                    <li>Campus infrastructure upgrades</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">👥 Stakeholder Engagement</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Student feedback mechanisms</li>
                    <li>Parent-teacher interactions</li>
                    <li>Industry advisory boards</li>
                    <li>Alumni engagement programs</li>
                    <li>Community partnership initiatives</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎓 Faculty Development</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Professional development programs</li>
                    <li>Research methodology workshops</li>
                    <li>Technology integration training</li>
                    <li>Conference participation support</li>
                    <li>Collaborative research initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Quality Assurance Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Planning Phase</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Institutional vision and mission alignment</li>
                    <li>Quality objectives setting</li>
                    <li>Performance indicators identification</li>
                    <li>Action plan development</li>
                    <li>Resource allocation planning</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Implementation & Review</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Initiative implementation</li>
                    <li>Regular monitoring and tracking</li>
                    <li>Feedback collection and analysis</li>
                    <li>Corrective action implementation</li>
                    <li>Continuous improvement practices</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Best Practices</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Student-Centric Approach:</strong> Focus on holistic student development through personalized learning experiences</li>
                <li><strong>Continuous Assessment:</strong> Regular evaluation and feedback mechanisms for academic and administrative processes</li>
                <li><strong>Technology Integration:</strong> Digital transformation initiatives for enhanced learning outcomes</li>
                <li><strong>Industry Connect:</strong> Strong industry partnerships for practical exposure and placement opportunities</li>
                <li><strong>Research Culture:</strong> Promotion of research activities and innovation among faculty and students</li>
                <li><strong>Green Campus:</strong> Environmental sustainability initiatives and eco-friendly practices</li>
              </ul>
            </div>

            <div className="panel">
              <h2>IQAC Achievements</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">5</div>
                  <p className="text-sm">Years of Quality Excellence</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">50+</div>
                  <p className="text-sm">Quality Initiatives Implemented</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">95%</div>
                  <p className="text-sm">Student Satisfaction Rate</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">A++</div>
                  <p className="text-sm">NAAC Accreditation Grade</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Meeting Schedule</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Regular Meetings</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Monthly IQAC Committee meetings</li>
                    <li>Quarterly review sessions</li>
                    <li>Bi-annual stakeholder consultations</li>
                    <li>Annual quality assurance conferences</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Special Sessions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Accreditation preparation meetings</li>
                    <li>Quality audit review sessions</li>
                    <li>Best practices sharing workshops</li>
                    <li>Strategic planning retreats</li>
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