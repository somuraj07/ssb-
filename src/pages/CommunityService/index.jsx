import React, { useState } from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
      </>
    )
  },
  {
    id: 'ncc',
    title: 'National Cadet Corps (NCC)',
    subtitle: 'Unity and Discipline',
    desc: 'Building disciplined citizens through military training and character development',
    content: (
      <>
        <p className="mb-4">The NCC aims to develop character, comradeship, discipline, and ideals of selfless service among young citizens. Our NCC unit promotes these values through various training programs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div className="card"><h4 className="font-semibold mb-2">Training</h4><p className="text-sm">Drill and Discipline, Map Reading & Navigation, First Aid, Adventure Sports</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Activities</h4><p className="text-sm">Annual Training Camps, Republic Day & Independence Day Parades, Community Service, Leadership Development</p></div>
        </div>
        <div className="flex gap-4 sm:gap-6 flex-wrap text-sm">
          <span><strong className="text-[var(--brand)]">150+</strong> Active Cadets</span>
          <span><strong className="text-[var(--brand)]">25+</strong> Certified Officers</span>
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
      </>
    )
  },
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
      </>
    )
  }
];

function ProgramAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="panel overflow-hidden">
      <button
        onClick={() => onToggle(item.id)}
        className="w-full flex items-center justify-between text-left py-3 sm:py-2 min-h-[44px]"
      >
        <div className="min-w-0 flex-1 pr-2">
          <h3 className="text-base sm:text-lg font-semibold text-[var(--text)]">{item.title}</h3>
          <p className="text-sm text-[var(--brand)] mt-0.5">{item.subtitle}</p>
          <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2 sm:line-clamp-none">{item.desc}</p>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-[var(--brand)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />}
      </button>

      {isOpen && (
        <div className="pt-4 mt-4 border-t border-[var(--border-light)]">
          <div className="text-[var(--text-soft)]">{item.content}</div>
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
            <div className="panel">
              <h2>Our Commitment to Society</h2>
              <p>
                At SSB Puttaparthi, we believe in giving back to society and creating positive impact in our communities.
                Our community service initiatives are designed to instill social responsibility in our students while
                addressing real societal needs.
              </p>
            </div>

            <div className="panel">
              <h2>Student Involvement</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">100%</div>
                  <p className="text-sm">Student Participation</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">50+</div>
                  <p className="text-sm">Projects Annually</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">1000+</div>
                  <p className="text-sm">Lives Impacted</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Our Programs</h2>
              <p className="mb-6">All our community service programs in one place:</p>
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
    </div>
  );
}
