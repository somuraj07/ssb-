import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function CampusDrives() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Campus Drives"
            subtitle="On-campus recruitment activities"
            description="Direct recruitment opportunities by leading companies"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Campus Recruitment Overview</h2>
              <p>
                Campus drives are the cornerstone of our placement process, bringing 
                leading companies directly to our campus to recruit talented students. 
                These recruitment events provide students with direct access to 
                prestigious organizations and exciting career opportunities.
              </p>
            </div>

            <div className="panel">
              <h2>Current Academic Year Drives</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">45+</div>
                  <p className="text-sm">Companies Visiting</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">80+</div>
                  <p className="text-sm">Job Profiles Offered</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">95%</div>
                  <p className="text-sm">Student Participation</p>
                </div>
              </div>
            </div>

           <div className="panel">
  <h2>Upcoming Campus Drives</h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-[var(--border-light)]">
          <th className="text-left p-3">Company</th>
          <th className="text-left p-3">Date</th>
          <th className="text-left p-3">Profiles</th>
          <th className="text-left p-3">Eligibility</th>
          <th className="text-left p-3">Package (LPA)</th>
        </tr>
      </thead>
      <tbody>
        {/* Sutherland */}
        <tr className="border-b border-[var(--border-light)]">
          <td className="p-3">Sutherland</td>
          <td className="p-3">Feb 25th</td>
          <td className="p-3">Consultant</td>
          <td className="p-3">MBA</td>
          <td className="p-3">2.7LPA</td>
        </tr>
        {/* TCS */}
        <tr className="border-b border-[var(--border-light)]">
          <td className="p-3">TCS</td>
          <td className="p-3">-</td>
          <td className="p-3">IT & BPS</td>
          <td className="p-3">MBA</td>
          <td className="p-3">-</td>
        </tr>
        {/* FUNNL */}
        <tr className="border-b border-[var(--border-light)]">
          <td className="p-3">FUNNL</td>
          <td className="p-3">-</td>
          <td className="p-3">B2B Sales</td>
          <td className="p-3">MBA</td>
          <td className="p-3">1.8LPA</td>
        </tr>
        {/* Middle Earth HR */}
        <tr className="border-b border-[var(--border-light)]">
          <td className="p-3">Middle Earth HR</td>
          <td className="p-3">-</td>
          <td className="p-3">Sales Executives</td>
          <td className="p-3">MBA</td>
          <td className="p-3">2.5LPA</td>
        </tr>
        {/* Learning Routes */}
        <tr className="border-b border-[var(--border-light)]">
          <td className="p-3">Learning Routes</td>
          <td className="p-3">-</td>
          <td className="p-3">Sales Associate</td>
          <td className="p-3">MBA</td>
          <td className="p-3">6LPA</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

            <div className="panel">
              <h2>Campus Drive Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Pre-Placement Activities</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Company registration and profile sharing</li>
                    <li>Job description and requirement analysis</li>
                    <li>Student eligibility verification</li>
                    <li>Pre-placement talk (PPT) scheduling</li>
                    <li>Online application and shortlisting</li>
                    <li>Assessment schedule finalization</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Recruitment Day Activities</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Company presentation and Q&A session</li>
                    <li>Written test/online assessment</li>
                    <li>Technical interview rounds</li>
                    <li>HR interview and final selection</li>
                    <li>Offer letter distribution</li>
                    <li>Acceptance and confirmation process</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Types of Campus Drives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🏢 Regular Placement Drives</h4>
                  <p className="text-sm mb-3">Standard full-time recruitment for final year students</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Full-time permanent positions</li>
                    <li>Comprehensive benefits package</li>
                    <li>Career growth opportunities</li>
                    <li>Training and development programs</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🚀 Off-Campus Opportunities</h4>
                  <p className="text-sm mb-3">External recruitment support and guidance</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Job portal registrations</li>
                    <li>Application guidance and support</li>
                    <li>Interview preparation assistance</li>
                    <li>Reference and recommendation letters</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">⏰ Fast-Track Recruitment</h4>
                  <p className="text-sm mb-3">Expedited hiring for urgent requirements</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Streamlined selection process</li>
                    <li>Quick decision-making</li>
                    <li>Immediate joining opportunities</li>
                    <li>Project-based assignments</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🌍 Virtual Campus Drives</h4>
                  <p className="text-sm mb-3">Online recruitment for remote and global opportunities</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Video conferencing interviews</li>
                    <li>Online assessment platforms</li>
                    <li>Digital document verification</li>
                    <li>Remote work opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Student Preparation Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Before the Drive</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Research the company and job profile thoroughly</li>
                    <li>Update resume and LinkedIn profile</li>
                    <li>Practice common interview questions</li>
                    <li>Prepare relevant project portfolios</li>
                    <li>Plan appropriate formal attire</li>
                    <li>Gather all required documents</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">During the Drive</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Arrive early and maintain punctuality</li>
                    <li>Present yourself professionally</li>
                    <li>Listen carefully to instructions</li>
                    <li>Stay calm and confident</li>
                    <li>Ask relevant questions during Q&A</li>
                    <li>Follow up appropriately</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
  <h2 className="text-1xl font-bold mb-6">Recent Success Stories</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {/* 1. Corizo Ed Tech */}
    <div className="card border p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold mb-2">Corizo Ed Tech</h4>
      <p className="text-sm mb-2 text-blue-600 font-medium">3 students selected</p>
      <p className="text-xs text-[var(--text-dim)]">Package: 6.5 LPA</p>
      <p className="text-xs text-[var(--text-dim)]">Role: Inside Sales Representative</p>
    </div>
    
    {/* 2. Glow logics Solutions Pvt Ltd */}
    <div className="card border p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold mb-2">Glow logics Solutions Pvt Ltd</h4>
      <p className="text-sm mb-2 text-blue-600 font-medium">12 students selected</p>
      <p className="text-xs text-[var(--text-dim)]">Package: 7 LPA</p>
      <p className="text-xs text-[var(--text-dim)]">Role: Inside Sales Representative</p>
    </div>
    
    {/* 3. Inspire AI Pvt Ltd */}
    <div className="card border p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold mb-2">Inspire AI Pvt Ltd</h4>
      <p className="text-sm mb-2 text-blue-600 font-medium">26 students selected</p>
      <p className="text-xs text-[var(--text-dim)]">Package: 6.2 LPA</p>
      <p className="text-xs text-[var(--text-dim)]">Role: Business Development Associate</p>
    </div>
  </div>
</div>

            <div className="panel">
              <h2>Campus Drive Statistics (2023-24)</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">42</div>
                  <p className="text-sm">Total Companies</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">380</div>
                  <p className="text-sm">Students Placed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">8.5 LPA</div>
                  <p className="text-sm">Average Package</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">95%</div>
                  <p className="text-sm">Placement Rate</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Register for Upcoming Drives</h2>
              <p>Stay updated with campus drive schedules and register for opportunities:</p>
              <div className="mt-4">
                <p><strong>Placement Portal:</strong> <a href="#" className="text-[var(--brand)] hover:underline">student.ssbputtaparthi.edu.in</a></p>
                <p><strong>Email Notifications:</strong> placement-updates@ssbputtaparthi.edu.in</p>
                <p><strong>WhatsApp Updates:</strong> +91-XXXX-XXXXXX</p>
                <p><strong>Office Contact:</strong> +91-XXXX-XXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}