import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function CareerGuidance() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Career Guidance & Higher Education Cell"
            subtitle="Guiding students towards successful career paths"
            description="Comprehensive career counseling and higher education support"
          />

          <div className="space-y-section">
            <div className="panel">
              <h2>About Career Guidance Cell</h2>
              <p>
                The Career Guidance & Higher Education Cell provides comprehensive
                support to students in making informed career decisions and pursuing
                higher education opportunities. We offer personalized counseling,
                career assessment, and guidance for various career paths and
                educational options.
              </p>
            </div>

            <div className="panel">
              <h2>Services Offered</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">🎯 Career Counseling</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Individual career counseling sessions</li>
                    <li>Career assessment tests</li>
                    <li>Personality profiling</li>
                    <li>Interest and aptitude analysis</li>
                    <li>Career path planning</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🎓 Higher Education Guidance</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>MBA/PGDM program guidance</li>
                    <li>Foreign university applications</li>
                    <li>Scholarship and funding assistance</li>
                    <li>Entrance exam preparation</li>
                    <li>Study abroad counseling</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">💼 Industry Connect</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Industry expert interactions</li>
                    <li>Alumni mentorship programs</li>
                    <li>Corporate visits and exposure</li>
                    <li>Internship guidance</li>
                    <li>Job market insights</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Career Paths & Options</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🏢 Corporate Careers</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Management Trainee Programs</li>
                    <li>Consulting and Advisory Roles</li>
                    <li>Banking and Financial Services</li>
                    <li>Sales and Marketing Positions</li>
                    <li>Operations and Supply Chain</li>
                    <li>Human Resources Management</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🚀 Entrepreneurship</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Startup Development</li>
                    <li>Business Plan Creation</li>
                    <li>Funding and Investment</li>
                    <li>Incubation Support</li>
                    <li>Mentorship Programs</li>
                    <li>Legal and Regulatory Guidance</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🎓 Higher Education</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>MBA from Top B-Schools</li>
                    <li>Specialized Master's Programs</li>
                    <li>International Universities</li>
                    <li>Research and PhD Programs</li>
                    <li>Professional Certifications</li>
                    <li>Distance Learning Options</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🏛️ Public Sector</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Civil Services (IAS/IPS/IFS)</li>
                    <li>Banking Services (IBPS/SBI)</li>
                    <li>Public Sector Undertakings</li>
                    <li>Government Organizations</li>
                    <li>Defense Services</li>
                    <li>Railway Services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Committee Team</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Position</th>
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Specialization</th>
                      <th className="text-left p-3">Contact</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Coordinator</td>
                      <td className="p-3">B. Girish Babu</td>
                      <td className="p-3">International Education</td>
                      <td className="p-3">+91 6363073453</td>
                    </tr>

                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Higher Education Advisor</td>
                      <td className="p-3">E. Prashanthi</td>
                      <td className="p-3">International Education</td>
                      <td className="p-3">+91 9100974544</td>
                    </tr>

                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Industry Connect Lead</td>
                      <td className="p-3">Dr. Bala Koteshwari</td>
                      <td className="p-3">Corporate Relations</td>
                      <td className="p-3">+91 9100974516</td>
                    </tr>

                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Student Coordinator</td>
                      <td className="p-3">Mr. Vishwanath</td>
                      <td className="p-3">Peer Counselling</td>
                      <td className="p-3">+91 6305808290</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="panel">
              <h2>Workshops & Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">📚 Regular Workshops</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Career orientation sessions</li>
                    <li>Resume writing workshops</li>
                    <li>Interview preparation programs</li>
                    <li>Group discussion training</li>
                    <li>Personality development sessions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">🎯 Specialized Programs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>CAT/MAT/GMAT preparation guidance</li>
                    <li>Civil services preparation support</li>
                    <li>Study abroad application assistance</li>
                    <li>Entrepreneurship development programs</li>
                    <li>Industry-specific career sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Success Statistics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">95%</div>
                  <p className="text-sm">Students Counseled</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">150+</div>
                  <p className="text-sm">Higher Education Admits</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">25</div>
                  <p className="text-sm">Study Abroad Scholarships</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">30</div>
                  <p className="text-sm">Workshops Conducted</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>How to Avail Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Appointment Booking</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Visit the Career Guidance Cell office</li>
                    <li>Book appointment online or by phone</li>
                    <li>Attend counseling session</li>
                    <li>Receive personalized career plan</li>
                    <li>Follow-up support as needed</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Resources Available</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Career assessment tools</li>
                    <li>University brochures and guides</li>
                    <li>Entrance exam study materials</li>
                    <li>Industry reports and insights</li>
                    <li>Alumni contact database</li>
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