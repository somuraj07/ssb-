import React, { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import { ChevronDown, ChevronUp } from "lucide-react";
import IQAC from './IQAC'

/* ================= TABLE HELPER (OPTIMIZATION) ================= */

const renderTable = (columns, rows) => (
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 text-sm">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="border px-3 py-2 text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="border px-3 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ================= COMMITTEE DATA ================= */

const committeeSections = [
  {
    id: "grievance",
    title: "Students Grievance Redressal Committee",
    desc: "Addressing student concerns and ensuring fair resolution",
    content: renderTable(
      ["Position", "Name", "Designation", "Department"],
      [
        ["Chairperson", "Dr. Bala Koteswari", "Dean Academic Affairs", "Administration"],
        ["Coordinator", "Prashanthi", "Senior Faculty", "Management"],
        ["Faculty Representative", "Dr. Bhabani Shankar", "Associate Professor", "Business Administration"],
        ["Student Rep (Senior)", "Krishnaveni", "Student Council President", "MBA Final Year"],
        ["Student Rep (Junior)", "Saipriya", "Student Council Member", "BBA Second Year"],
      ]
    ),
  },

  {
    id: "nptel",
    title: "NPTEL Local Chapter",
    desc: "National Programme on Technology Enhanced Learning",
    content:
      "The NPTEL Local Chapter promotes quality online education through certification programs across Computer Science, Management, Mathematics, and Humanities.",
  },

  {
    id: "academic",
    title: "College Academic Committee",
    desc: "Academic governance and oversight",
    content:
      "The College Academic Committee oversees curriculum development and academic policies ensuring alignment with industry requirements.",
  },

  {
    id: "iic",
    title: "IIC Committee",
    desc: "Institution Innovation Council",
    content: `
Coordinator: Prof. Vedavyas
Email: iic@sanskrithibschool.com
Phone: +91-93986 60034`,
  },

  {
    id: "rnd",
    title: "R & D Cell",
    desc: "Research and Development Cell",
    content: `
R&D Coordinator: Dr. Bhabani Shankar Padhy
Email: R&D@sanskrithibschool.com
Phone: +91-94919 88398
Office: R&D Cell, Sanskrithi School of Business`,
  },

  {
    id: "women",
    title: "Women Empowerment Cell",
    desc: "Women empowerment and support",
    content: `
Co-ordinator: Prof. Aradhana
Email: aradhana.a@sanskrithibschool.com
Phone: +91-93986 60034`,
  },

  {
    id: "library",
    title: "Library Committee",
    desc: "Library management and policies",
    content: renderTable(
      ["Position", "Name", "Designation", "Department"],
      [
        ["Chairperson", "Dr. Bala Koteswari", "Dean Academic Affairs", "Administration"],
        ["Librarian", "Mr. Obulapati", "Chief Librarian", "Library Services"],
        ["Faculty Representative", "Prof. Rajeshwari", "Senior Faculty", "Management"],
        ["tudent Reperesentative", "Gousia", "Student Council Member", "Final Year"]
      ]
    ),
  },

  {
    id: "welfare",
    title: "Student Welfare Committee",
    desc: "Student welfare and support services",
    content: renderTable(
      ["Position", "Name", "Designation", "Contact"],
      [
        ["Chairperson", "Dr. Bala Koteswari", "Dean Student Affairs", "+91-9100974516"],
        ["Coordinator", "Prof. Girish", "Student Welfare Officer", "+91-63630 73453"],
        ["Faculty Representative", "Prof. Aradhana", "Senior Faculty", "+91-79050 71707"],
        ["Student Representative", "Vishwanath", "Student Council President", "+91-6305808290"],
      ]
    ),
  },

  {
    id: "sports",
    title: "Games & Sports Cell",
    desc: "Sports and recreational activities",
    content: renderTable(
      ["Position", "Name", "Specialization", "Contact"],
      [
        ["Sports Coordinator", "Prof. Shaheer", "Physical Education", "+91-63040 93116"],
        ["Fitness Instructor", "Mr. Ramu", "Fitness Training", "+91-63020 70194"],
        ["Sports Captain (Male)", "Kullayappa", "Cricket / Football", "+91-9701714178"],
        ["Sports Captain (Female)", "Lavanaya Bai", "Badminton / Volleyball", "+91-7093249434"],
      ]
    ),
  },

  {
    id: "finance",
    title: "Finance Committee",
    desc: "Financial planning and oversight",
    content: renderTable(
      ["S. No.", "Name and Affiliation", "Designation"],
      [
        ["1", "Dr. Bala Koteswari, Principal", "Chairman"],
        ["2", "Mr. Ashok Reddy, Director", "Member"],
        ["3", "Prof. Prashanthi, Senior Faculty Member", "Member"],
        ["4", "Mr. Lakshmi Reddy, Finance Officer", "Member"],
      ]
    ),
  },

  {
    id: "scst",
    title: "SC/ST Committee",
    desc: "Support and welfare for SC/ST students",
    content: renderTable(
      ["Position", "Name", "Designation", "Contact"],
      [
        ["Chairperson", "Dr. Bala Koteswari", "Dean Student Affairs", "+91-9100974516"],
        ["Coordinator", "Prof. Vedavyas", "Faculty Coordinator", "+91-94911 34309"],
        ["SC Representative", "SaiDeepa", "Student Representative", "+91-8639337639"],
        ["ST Representative", "Swapna Bai", "Student Representative", "+91-7386075128"],
      ]
    ),
  },

  {
    id: "alumni",
    title: "Alumni Cell",
    desc: "Alumni relations and engagement",
    content: (
      <div className="space-y-2 text-sm">
        <p><strong>Alumni Coordinator:</strong> Prof. Sandhya</p>
        <p><strong>Email:</strong> alumni@sanskrithibschool.com</p>
        <p><strong>Phone:</strong> +91-98855 70767</p>
        <p><strong>Office:</strong> Alumni Cell, Sanskrithi School of Business</p>
      </div>
    ),
  },
];

/* ================= ACCORDION ITEM ================= */

function CommitteeAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="panel overflow-hidden">
      <button
        onClick={() => onToggle(item.id)}
        className="w-full flex items-center justify-between text-left py-2"
      >
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)]">{item.title}</h3>
          <p className="text-sm text-[var(--text-muted)] mt-0.5">{item.desc}</p>
        </div>

        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[var(--brand)]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />
        )}
      </button>

      {isOpen && (
        <div className="pt-4 mt-4 border-t border-[var(--border-light)]">
          <div className="text-[var(--text-soft)] leading-relaxed whitespace-pre-line">
            {item.content}
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= MAIN PAGE ================= */

export default function AllCommittees() {
  const [openId, setOpenId] = useState("grievance");

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="All Other Committees"
            subtitle="Institutional committees and cells"
            description="Overview of committees supporting academics, student welfare, and institutional governance"
          />

          <div className="space-y-4">
            {committeeSections.map((item) => (
              <CommitteeAccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
          <IQAC/>
        </div>
      </div>
    </div>
  );
}