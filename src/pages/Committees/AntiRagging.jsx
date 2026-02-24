import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AntiRagging() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Anti Ragging Committee"
            subtitle="Creating a safe and supportive campus environment"
            description="Zero tolerance policy against ragging and harassment"
          />

          <div className="space-y-section">
            <div className="panel">
              <h2>About Anti-Ragging Committee</h2>
              <p>
                The Anti-Ragging Committee is constituted as per the directions of the
                Hon'ble Supreme Court of India and UGC regulations to prevent and address
                any incidents of ragging in the institution. The committee is committed
                to maintaining a healthy, safe, and supportive environment for all students.
              </p>
            </div>

            <div className="panel">
              <h2>What Constitutes Ragging?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">⚠️ Physical Ragging</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Any form of physical assault or abuse</li>
                    <li>Forced physical activities</li>
                    <li>Making students do anything against their will</li>
                    <li>Any act causing physical harm or discomfort</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🗣️ Verbal/Psychological Ragging</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Verbal abuse, insults, or humiliation</li>
                    <li>Threats or intimidation</li>
                    <li>Psychological pressure or harassment</li>
                    <li>Discriminatory comments or remarks</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">💻 Cyber Ragging</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Online harassment or bullying</li>
                    <li>Sharing inappropriate content</li>
                    <li>Social media abuse or trolling</li>
                    <li>Digital threats or blackmail</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🚫 Other Forms</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Financial exploitation</li>
                    <li>Academic interference</li>
                    <li>Social isolation or exclusion</li>
                    <li>Sexual harassment or misconduct</li>
                  </ul>
                </div>
              </div>
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
                      <th className="text-left p-3">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Chairperson</td>
                      <td className="p-3">Dr. Bala Koteswari</td>
                      <td className="p-3">Director/Principal</td>
                      <td className="p-3">+91-9100974516</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Coordinator</td>
                      <td className="p-3">Prof. Prashanthi</td>
                      <td className="p-3">Faculty Coordinator</td>
                      <td className="p-3">+91-8186041091</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Faculty Member</td>
                      <td className="p-3">Dr. Girish</td>
                      <td className="p-3">Department Representative</td>
                      <td className="p-3">+91-63630 73453</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Student Representative</td>
                      <td className="p-3">Meghana</td>
                      <td className="p-3">Student Council Member</td>
                      <td className="p-3">+91-9000387028</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Non-Teaching Staff</td>
                      <td className="p-3">Mr./Ms. Sreenu</td>
                      <td className="p-3">Administrative Officer</td>
                      <td className="p-3">+91-97011 45900</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Preventive Measures</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Awareness Programs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Orientation sessions for new students</li>
                    <li>Anti-ragging awareness campaigns</li>
                    <li>Regular educational workshops</li>
                    <li>Guest lectures on student rights</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Monitoring Systems</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>CCTV surveillance in common areas</li>
                    <li>Regular hostel inspections</li>
                    <li>Faculty mentorship programs</li>
                    <li>Peer support networks</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Communication Channels</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>24/7 helpline numbers</li>
                    <li>Anonymous complaint boxes</li>
                    <li>Online reporting portal</li>
                    <li>WhatsApp support groups</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Reporting Mechanism</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🚨 Emergency Helpline</h4>
                  <p className="text-sm mb-3">24/7 Anti-Ragging Helpline</p>
                  <div className="space-y-1 text-sm">
                    <p><strong>UGC Helpline:</strong> 1800-180-5522</p>
                    <p><strong>Institution Helpline:</strong> +91-XXXX-XXXXXX</p>
                    <p><strong>Email:</strong> antiragging@ssbputtaparthi.edu.in</p>
                  </div>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">📧 Online Reporting</h4>
                  <p className="text-sm mb-3">Secure and confidential reporting</p>
                  <div className="space-y-1 text-sm">
                    <p><strong>National Portal:</strong> antiragging.in</p>
                    <p><strong>Institution Portal:</strong> report.ssbputtaparthi.edu.in</p>
                    <p><strong>Anonymous Form:</strong> Available on website</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Action Taken Against Ragging</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Immediate Actions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Immediate investigation of complaints</li>
                    <li>Suspension of alleged students pending inquiry</li>
                    <li>Counseling support for victims</li>
                    <li>Medical assistance if required</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Disciplinary Actions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Written warnings and apologies</li>
                    <li>Community service assignments</li>
                    <li>Suspension from institution</li>
                    <li>Expulsion for severe cases</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Legal Consequences</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h4 className="font-semibold mb-2 text-red-800">⚖️ Legal Provisions</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                  <li>Ragging is a criminal offense under the Indian Penal Code</li>
                  <li>FIR will be registered for all ragging incidents</li>
                  <li>Students may face imprisonment up to 2 years</li>
                  <li>Fine up to ₹10,000 or both imprisonment and fine</li>
                  <li>Permanent record in police verification</li>
                </ul>
              </div>
            </div>

            <div className="panel">
              <h2>Support Systems</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🤝 Counseling Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Professional counselors available</li>
                    <li>Trauma counseling for victims</li>
                    <li>Group therapy sessions</li>
                    <li>Peer counseling programs</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🏥 Medical Assistance</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>On-campus medical facility</li>
                    <li>Emergency medical care</li>
                    <li>Psychiatric support when needed</li>
                    <li>Tie-ups with nearby hospitals</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🏛️ Legal Aid</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Legal consultation services</li>
                    <li>Assistance in filing complaints</li>
                    <li>Court proceedings support</li>
                    <li>Rights awareness programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Student Charter & Pledge</h2>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                <h4 className="font-semibold mb-2">Anti-Ragging Pledge</h4>
                <p className="text-sm italic">
                  "I hereby pledge that I will not engage in, encourage, or support any form
                  of ragging. I understand that ragging is prohibited and is a criminal offense.
                  I promise to report any incident of ragging that comes to my knowledge and
                  will actively work towards creating a safe and supportive campus environment
                  for all students."
                </p>
              </div>
            </div>

            <div className="panel">
              <h2>Annual Statistics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-green-600 mb-2">0</div>
                  <p className="text-sm">Ragging Incidents Reported</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">100%</div>
                  <p className="text-sm">Students Signed Anti-Ragging Affidavit</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">25+</div>
                  <p className="text-sm">Awareness Programs Conducted</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">5</div>
                  <p className="text-sm">Years Ragging-Free Campus</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Important Links & Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Official Websites</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <a href="#" className="text-[var(--brand)] hover:underline">National Anti-Ragging Portal</a></li>
                    <li>• <a href="#" className="text-[var(--brand)] hover:underline">UGC Guidelines on Anti-Ragging</a></li>
                    <li>• <a href="#" className="text-[var(--brand)] hover:underline">Supreme Court Directives</a></li>
                    <li>• <a href="#" className="text-[var(--brand)] hover:underline">Anti-Ragging Affidavit Form</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Emergency Contacts</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Police: 100</li>
                    <li>• Women Helpline: 1091</li>
                    <li>• Child Helpline: 1098</li>
                    <li>• Student Helpline: 1800-180-5522</li>
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