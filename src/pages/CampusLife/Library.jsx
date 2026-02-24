import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function Library() {
  const libraryResources = [
    {
      category: "Print Collection",
      icon: "📚",
      items: [
        { name: "50,000+ Books", description: "Comprehensive collection covering all disciplines and specializations" },
        { name: "Business Journals", description: "Leading management and business journals for research and learning" },
        { name: "Reference Materials", description: "Encyclopedias, dictionaries, and academic reference books" },
        { name: "Periodicals", description: "Current newspapers, magazines, and industry publications" },
        { name: "Thesis Collection", description: "Repository of student research projects and dissertations" }
      ]
    },
    {
      category: "Digital Resources",
      icon: "💻",
      items: [
        { name: "E-Journal Access", description: "Online access to leading academic and research journals" },
        { name: "Digital Library", description: "Vast collection of e-books and digital publications" },
        { name: "Database Subscriptions", description: "Premium research databases for academic excellence" },
        { name: "Multimedia Resources", description: "Educational videos, presentations, and interactive content" },
        { name: "Online Catalogs", description: "Easy search and discovery of library resources" }
      ]
    }
  ];

  const libraryFacilities = [
    {
      name: "Reading Halls",
      description: "Spacious and well-lit reading areas with comfortable seating arrangements",
      icon: "📖",
      features: ["Silent Study Zones", "Group Study Areas", "Individual Carrels", "Natural Lighting"]
    },
    {
      name: "Computer Lab",
      description: "Internet-enabled computers for research and digital resource access",
      icon: "🖥️",
      features: ["High-Speed Internet", "Research Software", "Printing Services", "Scanner Access"]
    },
    {
      name: "Discussion Rooms",
      description: "Private rooms for group discussions and collaborative study sessions",
      icon: "💬",
      features: ["Sound Proof", "Whiteboard Facility", "Projection System", "Comfortable Seating"]
    },
    {
      name: "Archive Section",
      description: "Special collection of rare books, historical documents, and institutional records",
      icon: "🗂️",
      features: ["Climate Controlled", "Preservation System", "Restricted Access", "Digital Backup"]
    }
  ];

  const libraryServices = [
    {
      service: "Reference & Research Support",
      description: "Professional librarians provide research guidance and resource discovery assistance",
      availability: "All Working Days"
    },
    {
      service: "Inter-Library Loan",
      description: "Access to books and resources from other libraries through exchange programs",
      availability: "On Request"
    },
    {
      service: "Document Delivery",
      description: "Digital copies of articles, papers, and documents delivered electronically",
      availability: "Same Day"
    },
    {
      service: "Information Literacy",
      description: "Training sessions on research methods, citation, and academic writing",
      availability: "Weekly Sessions"
    },
    {
      service: "Book Reservation",
      description: "Reserve books and materials in advance through online catalog",
      availability: "24/7 Online"
    },
    {
      service: "Printing & Scanning",
      description: "High-quality printing, copying, and scanning services for academic work",
      availability: "Library Hours"
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "09:45 AM - 04:35 PM" },
    { day: "Saturday", hours: "09:00 AM - 06:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 1:00 PM" },
    { day: "Exam Period", hours: "Extended Hours till 05:00 PM" }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Library"
            subtitle="Knowledge Hub of Excellence"
            description="Comprehensive library services and resources for academic excellence and research"
          />
          
          <div className="space-y-section">
            {/* Library Introduction */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-3xl font-bold gradient-text mb-6">Academic Resource Center</h2>
              <p className="text-[var(--text-soft)] text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
                The Sanskrithi Library serves as the intellectual heart of our campus, providing students and 
                faculty with access to extensive collections, digital resources, and modern facilities that 
                support learning, teaching, and research across all disciplines.
              </p>
              
              <div className="grid sm:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">📚</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">50,000+</span>
                  <p className="text-[var(--text-soft)] text-sm">Books & Resources</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">💻</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Digital</span>
                  <p className="text-[var(--text-soft)] text-sm">Library Access</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🕒</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Extended</span>
                  <p className="text-[var(--text-soft)] text-sm">Hours</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">👨‍🏫</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Expert</span>
                  <p className="text-[var(--text-soft)] text-sm">Library Staff</p>
                </div>
              </div>
            </Card>

            {/* Library Resources */}
            <div className="space-y-12">
              {libraryResources.map((resource, i) => (
                <Card key={i}>
                  <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                      <span className="text-2xl">{resource.icon}</span>
                    </div>
                    {resource.category}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {resource.items.map((item, j) => (
                      <div key={j} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-3">{item.name}</h3>
                        <p className="text-[var(--text-soft)] leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Library Facilities */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                Library Facilities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {libraryFacilities.map((facility, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                        <span className="text-2xl">{facility.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{facility.name}</h3>
                        <p className="text-[var(--text-soft)] leading-relaxed mb-4">{facility.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {facility.features.map((feature, j) => (
                        <span key={j} className="text-sm px-3 py-1 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--text-soft)] text-center">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Library Services */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                Library Services
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {libraryServices.map((service, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[var(--text)]">{service.service}</h3>
                      <span className="px-3 py-1 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--accent)] rounded-full text-sm font-medium">
                        {service.availability}
                      </span>
                    </div>
                    <p className="text-[var(--text-soft)] leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Operating Hours */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🕐</span>
                </div>
                Library Hours
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {operatingHours.map((schedule, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-center">
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{schedule.day}</h3>
                    <p className="text-2xl font-bold text-[var(--accent)]">{schedule.hours}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)] text-center">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Need Research Assistance?</h3>
                <p className="text-[var(--text-soft)] mb-6">
                  Our professional librarians are here to help you with research queries, resource discovery, and academic support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/inquiry"
                    className="px-6 py-3 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                  >
                    Contact Library Staff
                  </a>
                  <a 
                    href="/academic-resources"
                    className="px-6 py-3 bg-[var(--surface-2)] text-[var(--text)] font-semibold rounded-lg border border-[var(--border-light)] hover:bg-[var(--surface-3)] transition-colors"
                  >
                    Explore Resources
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}