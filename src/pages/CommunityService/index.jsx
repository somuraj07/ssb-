import React, { useState } from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Img1 from '../../assets/uba.jpeg';
import Img2 from '../../assets/ebsb.jpeg';
import Img3 from '../../assets/viksit.jpeg';
import Img4 from '../../assets/green.webp';
import Img5 from '../../assets/nss.jpg'; 

const programSections = [
  {
    id: 'nss',
    title: 'National Service Scheme (NSS)',
    subtitle: 'Not Me But You',
    desc: 'Fostering social consciousness and community service among students',
    content: (
      <>
        <p className="mb-4">The National Service Scheme (NSS) is a Central Sector Scheme of Government of India. At SSB Puttaparthi, our NSS unit actively engages in community development and social service.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div className="card"><h4 className="font-semibold mb-2">Core Activities</h4><p className="text-sm">Village Adoption, Literacy Programs, Health Awareness, Environmental Conservation, Blood Donation, Disaster Management</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Special Programs</h4><p className="text-sm">Annual Special Camps, National Youth Day, Swachh Bharat Abhiyaan, Digital Literacy</p></div>
        </div>
        <div className="flex gap-4 sm:gap-6 flex-wrap text-sm">
          <span><strong className="text-[var(--brand)]">200+</strong> Active Volunteers</span>
          <span><strong className="text-[var(--brand)]">5</strong> Adopted Villages</span>
          <span><strong className="text-[var(--brand)]">5000+</strong> Lives Impacted</span>
        </div>
       <div className="mb-6">
        <img
          src={Img5}
          alt="nss"
          className="w-full pt-4 h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
      </>
    )
  },
  
  {
    id: 'green',
    title: 'Green Club',
    subtitle: 'Nurturing Nature, Securing Future',
    desc: 'Promoting environmental awareness and sustainable practices',
    content: (
      <>
        <p className="mb-4">The Green Club is dedicated to creating environmental awareness and promoting sustainable practices among students and the local community.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div className="card"><h4 className="font-semibold mb-2">Mission</h4><p className="text-sm">Environmental Education, Conservation Projects, Green Campus, Community Outreach</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Initiatives</h4><p className="text-sm">Tree Plantation, Waste Management, Water Conservation, Renewable Energy, Organic Farming</p></div>
        </div>
        <div className="flex gap-4 sm:gap-6 flex-wrap text-sm">
          <span><strong className="text-green-600">2000+</strong> Trees Planted</span>
          <span><strong className="text-green-600">80%</strong> Waste Recycled</span>
          <span><strong className="text-green-600">100+</strong> Active Members</span>
        </div>

         <div className="mb-6">
        <img
          src={Img4}
          alt="UnnaBharat Green Club"
          className="w-full pt-4 h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
      </>
    )
  },
  {
    id: 'uba',
    title: 'Unnat Bharat Abhiyaan',
    subtitle: 'Transforming Rural India',
    desc: 'Connecting higher education with rural communities for development',
    content: (
      <>
      <p className="mb-4">UBA is a flagship program of the Ministry of Education aiming to leverage knowledge and resources for sustainable development in rural communities.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div className="card"><h4 className="font-semibold mb-2">Adopted Villages</h4><p className="text-sm">Bukkapatnam, Kothacheruvu, Kalyanadurgam, Mudigubba, Chintalapalli</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Key Interventions</h4><p className="text-sm">Agricultural Technology, Water Management, Digital Literacy, Health & Hygiene, Skill Development</p></div>
        </div>
        <div className="flex gap-4 sm:gap-6 flex-wrap text-sm">
          <span><strong className="text-[var(--brand)]">5</strong> Adopted Villages</span>
          <span><strong className="text-[var(--brand)]">12,000+</strong> Beneficiaries</span>
          <span><strong className="text-[var(--brand)]">150+</strong> Student Volunteers</span>
        </div>
         <div className="mb-6">
        <img
          src={Img1}
          alt="Unnat Bharat Abhiyaan"
          className="w-full pt-4 h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
      </>
      )},
  {
    id: 'ebsb',
    title: 'Ek Bharat Shreshtha Bharat',
    subtitle: 'One India, Excellent India',
    desc: 'Fostering unity in diversity through cultural exchange',
    content: (
      <>
        <p className="mb-4">EBSB aims to enhance interaction between people of diverse cultures across States and UTs, promoting greater mutual understanding.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div className="card"><h4 className="font-semibold mb-2">State Pairing</h4><p className="text-sm">Andhra Pradesh ↔ Himachal Pradesh — Cultural exchange between paired states</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Activities</h4><p className="text-sm">Cultural Exchange Programs, Language Learning Initiative, Cultural Festivals, Youth Engagement</p></div>
        </div>

         <div className="mb-6">
        <img
          src={Img2}
          alt="Ek Bharat Shreshtha Bharat"
          className="w-full pt-4 h-80 object-cover rounded-2xl "
        />
      </div>
      </>
    )
  },
  {
    id: 'viksit',
    title: 'Viksit Bharat @2047',
    subtitle: 'Developed India by 2047',
    desc: 'Contributing to India\'s vision of becoming a developed nation by 2047',
    content: (
      <>
        <p className="mb-4">Viksit Bharat @2047 aims to transform India into a fully developed nation by 2047, the 100th year of India&apos;s independence.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div className="card"><h4 className="font-semibold mb-2">Focus Areas</h4><p className="text-sm">Economic Development, Technological Advancement, Social Progress, Environmental Sustainability</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Key Initiatives</h4><p className="text-sm">Digital India & Technology, Innovation & Entrepreneurship, Skill Development, Clean Energy, Rural Development</p></div>
        </div>

         <div className="mb-6">
        <img
          src={Img3}
          alt="Viksit Bharat @2047"
          className="w-full pt-4 h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
      </>
    )
  }
];

function ProgramAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="panel overflow-hidden px-4 py-4 sm:px-6 sm:py-5">
      <button
        onClick={() => onToggle(item.id)}
        className="w-full flex items-start justify-between gap-3 text-left py-1 min-h-[44px]"
      >
        <div className="min-w-0 flex-1">
          <h3 className="text-[1.15rem] sm:text-lg leading-tight font-semibold text-[var(--text)]">{item.title}</h3>
          <p className="text-sm text-[var(--brand)] mt-1">{item.subtitle}</p>
          <p className="text-sm sm:text-xs leading-6 text-[var(--text-muted)] mt-2 line-clamp-3 sm:line-clamp-none">{item.desc}</p>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 mt-2 shrink-0 text-[var(--brand)]" />
        ) : (
          <ChevronDown className="w-5 h-5 mt-2 shrink-0 text-[var(--text-muted)]" />
        )}
      </button>

      {isOpen && (
        <div className="pt-4 mt-4 border-t border-[var(--border-light)]">
          <div className="program-accordion-content text-[var(--text-soft)]">{item.content}</div>
        </div>
      )}
    </div>
  );
}

export default function CommunityService() {
  const [openId, setOpenId] = useState('nss');

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Community Service"
            subtitle="Social responsibility and community outreach"
            description="Building better communities through service and engagement"
          />

          <div className="space-y-section">
            <div className="panel community-intro-panel">
              <h2>Our Commitment to Society</h2>
              <p className="community-intro-copy">
                At SSB Puttaparthi, we believe in giving back to society and creating positive impact in our communities.
                Our community service initiatives are designed to instill social responsibility in our students while
                addressing real societal needs.
              </p>
            </div>

            <div className="panel">
              <h2>Student Involvement</h2>
              <div className="community-stats-grid grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="community-stat-card text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">100%</div>
                  <p className="text-sm">Student Participation</p>
                </div>
                <div className="community-stat-card text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">50+</div>
                  <p className="text-sm">Projects Annually</p>
                </div>
                <div className="community-stat-card text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">1000+</div>
                  <p className="text-sm">Lives Impacted</p>
                </div>
              </div>
            </div>

            <div className="panel community-programs-panel">
              <h2>Our Programs</h2>
              <p className="mb-6 community-programs-copy">All our community service programs in one place:</p>
              <div className="space-y-4">
                {programSections.map((item) => (
                  <ProgramAccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={handleToggle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .program-accordion-content .card {
          border-radius: 1.25rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 1.1rem;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        }

        .program-accordion-content img {
          padding-top: 0.75rem;
          height: clamp(210px, 52vw, 320px);
        }

        .program-accordion-content > p {
          font-size: 1rem;
          line-height: 1.9;
        }

        .program-accordion-content > div[class*='flex'] > span {
          min-width: 140px;
        }

        @media (max-width: 640px) {
          .main-content .panel {
            padding: 1.1rem;
          }

          .community-intro-copy,
          .community-programs-copy {
            font-size: 0.98rem;
            line-height: 1.75;
          }

          .community-stats-grid {
            grid-template-columns: 1fr;
          }

          .community-stat-card {
            padding: 0.9rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .community-stat-card .text-2xl {
            font-size: 1.6rem;
          }

          .program-accordion-content .card h4 {
            font-size: 1.15rem;
            line-height: 1.35;
          }

          .program-accordion-content .card p {
            font-size: 0.98rem;
            line-height: 1.7;
          }

          .program-accordion-content > p {
            font-size: 0.98rem;
            line-height: 1.75;
          }

          .program-accordion-content img {
            height: 220px;
            border-radius: 1.25rem;
          }

          .program-accordion-content > div[class*='flex'] {
            gap: 0.75rem;
            display: grid;
            grid-template-columns: 1fr;
          }

          .program-accordion-content > div[class*='flex'] > span {
            min-width: 0;
            font-size: 0.98rem;
          }
        }
      `}</style>
    </div>
  );
}
