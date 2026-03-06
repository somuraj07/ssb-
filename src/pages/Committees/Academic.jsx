import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AcademicCommittee() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="College Academic Committee"
            subtitle="Academic governance and oversight"
            description="Ensuring academic excellence and maintaining quality standards"
          />

          <div className="space-y-section">
            <div className="panel">
              <h2>About the Academic Committee</h2>
              <p>
                The College Academic Committee serves as the primary governing body for
                all academic matters within the institution. It ensures the maintenance
                of high academic standards, oversees curriculum development, and makes
                key decisions regarding academic policies and procedures.
              </p>
            </div>

            <div className="panel">
              <h2>Committee Note</h2>
              <p>
                The College Academic Committee oversees curriculum development and academic
                policies ensuring alignment with industry requirements.
              </p>
            </div>

            <div className="panel">
              <h2>Committee Composition</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Position</th>
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Designation</th>
                      <th className="text-left p-3">Department</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Chairperson</td>
                      <td className="p-3">Dr. Balakoteshwari</td>
                      <td className="p-3">Dean & Principal</td>
                      <td className="p-3">Administration</td>
                    </tr>

                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Vice-Chairperson</td>
                      <td className="p-3">Dr. Bhabani Shankar Pandhy</td>
                      <td className="p-3">Vice-Chairperson</td>
                      <td className="p-3">Administration</td>
                    </tr>

                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Secretary</td>
                      <td className="p-3">E. Prashanthi</td>
                      <td className="p-3">Secretary</td>
                      <td className="p-3">Administration</td>
                    </tr>

                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">HOD Representative</td>
                      <td className="p-3">A. Aradhana</td>
                      <td className="p-3">HOD Representative</td>
                      <td className="p-3">Department</td>
                    </tr>

                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Faculty Representative</td>
                      <td className="p-3">Mr. B. Girish Babu</td>
                      <td className="p-3">Faculty Representative</td>
                      <td className="p-3">Department</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="panel">
              <h2>Key Responsibilities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📚 Curriculum Management</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Curriculum design and review</li>
                    <li>Syllabus updates and modifications</li>
                    <li>Course structure planning</li>
                    <li>Academic calendar preparation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">👩‍🏫 Faculty Affairs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Faculty recruitment guidelines</li>
                    <li>Teaching load distribution</li>
                    <li>Professional development programs</li>
                    <li>Performance evaluation criteria</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🎓 Student Affairs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Admission policies and procedures</li>
                    <li>Academic regulation formulation</li>
                    <li>Examination policies</li>
                    <li>Student grievance resolution</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Recent Initiatives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🔄 Curriculum Updates</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Integration of industry-relevant subjects</li>
                    <li>Addition of digital marketing modules</li>
                    <li>Enhanced practical training components</li>
                    <li>Soft skills development programs</li>
                    <li>Research methodology enhancement</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">💻 Technology Integration</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>E-learning platform implementation</li>
                    <li>Digital library resources expansion</li>
                    <li>Online assessment tools adoption</li>
                    <li>Virtual classroom setup</li>
                    <li>Student portal enhancements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Meeting Schedule & Decisions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">📅 Meeting Schedule</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Regular monthly meetings</li>
                    <li>Special meetings as required</li>
                    <li>Annual academic planning sessions</li>
                    <li>Emergency meetings for urgent matters</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">📋 Recent Decisions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Revised examination pattern approval</li>
                    <li>New course introduction authorization</li>
                    <li>Faculty development program planning</li>
                    <li>Student project guidelines update</li>
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
