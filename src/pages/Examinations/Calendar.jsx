import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ExaminationCalendar() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Academic Calendar"
            subtitle="Examination schedule and important dates"
            description="Complete schedule of examinations and academic activities"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Academic Year 2024-25</h2>
              <p>
                The academic calendar outlines all important examination dates, 
                submission deadlines, and academic activities for the current year. 
                Students are advised to refer to this calendar regularly for planning 
                their study schedule and meeting important deadlines.
              </p>
            </div>

            <div className="panel">
              <h2>Semester Examination Schedule</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-3">Odd Semester (July - December)</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Mid-term Exams:</strong> September 15-25, 2024</li>
                    <li><strong>Internal Assessment:</strong> October 15-30, 2024</li>
                    <li><strong>End Semester Exams:</strong> December 1-15, 2024</li>
                    <li><strong>Result Declaration:</strong> December 30, 2024</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-3">Even Semester (January - June)</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Mid-term Exams:</strong> March 15-25, 2026</li>
                    <li><strong>Internal Assessment:</strong> April 15-30, 2026</li>
                    <li><strong>End Semester Exams:</strong> May 15-30, 2026</li>
                    <li><strong>Result Declaration:</strong> June 15, 2026</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Important Deadlines</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Activity</th>
                      <th className="text-left p-3">Deadline</th>
                      <th className="text-left p-3">Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">Examination Form Submission</td>
                      <td className="p-3">15 days before exam</td>
                      <td className="p-3">Both</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">Hall Ticket Download</td>
                      <td className="p-3">7 days before exam</td>
                      <td className="p-3">Both</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">Re-evaluation Application</td>
                      <td className="p-3">15 days after result</td>
                      <td className="p-3">Both</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">Supplementary Exam Registration</td>
                      <td className="p-3">30 days after result</td>
                      <td className="p-3">Both</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Special Examinations</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Supplementary Examinations:</strong> Conducted for failed subjects</li>
                <li><strong>Improvement Examinations:</strong> For students seeking grade enhancement</li>
                <li><strong>Backlog Examinations:</strong> For incomplete coursework</li>
                <li><strong>Special Examinations:</strong> For medical and other genuine cases</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Holiday Schedule</h2>
              <p>
                Examinations will not be conducted on national holidays, regional festivals, 
                and declared holidays by the institution. Alternative dates will be announced 
                for any postponed examinations due to unforeseen circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}