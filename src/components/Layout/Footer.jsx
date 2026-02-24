import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-6 grid gap-6 md:grid-cols-4 text-text-soft">
        <div>
          <div className="text-white font-semibold">SSB</div>
          <p className="mt-2">Sanskrithi School of Business — a modern business school focused on real-world impact.</p>
        </div>
        <div>
          <div className="text-white font-medium">Explore</div>
          <ul className="mt-2 space-y-2">
            <li><Link to="/about/overview" className="hover:text-white">About</Link></li>
            <li><Link to="/academics/mba" className="hover:text-white">MBA Program</Link></li>
            <li><Link to="/academics/pgdm" className="hover:text-white">PGDM Program</Link></li>
            <li><Link to="/placements/statistics" className="hover:text-white">Placements</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium">Resources</div>
          <ul className="mt-2 space-y-2">
            <li><Link to="/examinations/downloads" className="hover:text-white">Downloads</Link></li>
            <li><Link to="/admissions/fee-payment" className="hover:text-white">Fee Payment</Link></li>
            <li><Link to="/committees/iqac" className="hover:text-white">IQAC</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium">Contact</div>
          <div className="mt-2 space-y-1 text-sm">
            <p>Behind Sri Sathya Sai Super Speciality Hospital</p>
            <p>Sri Sathyasai District, Andhra Pradesh</p>
            <div className="mt-2">
              <p>mail : admissions.director@sanskrithibschool.com</p>
              <p>📞 +91 9100064545</p>
              <p>📞 +91 9100074545</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-3 text-sm text-text-dim flex items-center justify-between">
          <span>© {new Date().getFullYear()} Sanskrithi School of Business, Puttaparthi</span>
          <div className="flex gap-4">
            <Link to="/about/policies-documents" className="hover:text-white">Policies</Link>
            <Link to="/committees/grievance-redressal" className="hover:text-white">Grievances</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
