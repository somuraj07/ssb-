import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import riseImage from "../../assets/B.Tech & M.Tech-12.jpg";  // ✅ Better way to import image

export default function AboutRISE() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="About RISE"
            subtitle="Research, Innovation, and Startup Ecosystem"
            description="Fostering innovation and entrepreneurship"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>RISE Initiative</h2>

             
             

              <p className="mt-3">
                RISE focuses on promoting research, innovation, and startup culture
                by supporting students and faculty with modern infrastructure,
                incubation support, and industry collaboration.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}