import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import riseImage1 from "../../assets/2222.jpeg";
import riseImage2 from "../../assets/111.jpeg";
import riseImage3 from "../../assets/333.jpeg";
import riseImage4 from "../../assets/444.jpeg";
import riseImage5 from "../../assets/555.jpeg";
import riseImage6 from "../../assets/666.jpeg";

export default function AboutRISE() {
  return (
    <div className="main-content ">
      <div className="section-spacing">
        <div className="container mx-auto px-0"> {/* Removed container side padding */}
          <SectionHeader
            title="About RISE"
            subtitle="Research, Innovation, and Skill Ecosystem"
            description="A premium ecosystem dedicated to high-end software engineering and entrepreneurial excellence."
          />

          <div className="mt-16 space-y-24">
            
            {/* SECTION 1: THE RESEARCH FRONTIER - Split 50/50 No Card */}
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2 flex flex-col justify-center pr-12 pb-8 lg:pb-0">
                <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2">Pillar One</span>
                <h2 className="text-4xl font-extrabold mb-6">Advanced Research Frontier</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  In collaboration with the <strong>Vienna University of Technology</strong>, our research wing pushes the boundaries of Distributed Systems and Industrial AI. We translate complex theoretical frameworks into practical, scalable software solutions that meet European engineering standards.
                </p>
                <div className="mt-6 space-y-4">
                    <p className="flex items-center gap-3 font-medium"><span className="h-2 w-2 bg-orange-600 rounded-full"></span> Industrial Systems Engineering</p>
                    <p className="flex items-center gap-3 font-medium"><span className="h-2 w-2 bg-orange-600 rounded-full"></span> High-Performance Computing Labs</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img src={riseImage1} alt="Research" className="w-full h-[450px] object-cover rounded-none lg:rounded-l-3xl shadow-2xl" />
              </div>
            </div>

            {/* SECTION 2: INNOVATION ENGINE - Full Width Text + Grid */}
            <div className="w-full">
              <div className="max-w-4xl mb-12">
                <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2">Pillar Two</span>
                <h2 className="text-4xl font-extrabold mb-6">The Innovation Engine: RIT Program</h2>
                <p className="text-lg text-gray-700">
                  Innovation is not an accident; it is a discipline. The Research Industrial Technology (RIT) program is a specialized 4-year track that redefines software education through intensive, hands-on architectural training.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-gray-100">
                {[
                  { title: "M1: Foundations", img: riseImage2, text: "Setting up professional stacks, Slack integration, and Scratch logic." },
                  { title: "M2: Core Java", img: riseImage3, text: "Mastering syntax, data types, and procedural programming excellence." },
                  { title: "M3: Advanced Java", img: riseImage4, text: "Scaling logic with complex assignments and industrial timelines." },
                  { title: "M4: Architecture", img: riseImage5, text: "OOP, Design Patterns, SQLite, and professional Git/GitHub workflows." }
                ].map((item, i) => (
                  <div key={i} className="group overflow-hidden border-r border-gray-100 last:border-r-0">
                    <img src={item.img} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition duration-500" alt={item.title} />
                    <div className="p-6">
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: INNOVATION INCUBATION - Asymmetrical Layout */}
            <div className="flex flex-col lg:flex-row-reverse items-center">
              <div className="lg:w-1/2 lg:pl-20 py-10">
                <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2">Pillar Three</span>
                <h2 className="text-4xl font-extrabold mb-6">The Innovation Incubator</h2>
                <p className="text-lg text-gray-700 mb-8">
                  We provide a launchpad for student-led innovation and projects. By offering technical mentorship from RISE Austria, industry collaboration, and hands-on project experience, we ensure that innovative ideas are nurtured into real-world applications.
                </p>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="text-2xl font-black text-orange-100 italic">01</div>
                    <div><h5 className="font-bold">Project Support</h5><p className="text-gray-600">Backing for high-potential student prototypes and innovations.</p></div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-2xl font-black text-orange-100 italic">02</div>
                    <div><h5 className="font-bold">European Mentorship</h5><p className="text-gray-600">Direct technical reviews by senior developers from Austria.</p></div>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <img src={riseImage6} alt="Incubator" className="w-full h-[600px] object-cover rounded-none lg:rounded-r-3xl" />
              </div>
            </div>

            {/* SECTION 4: INDUSTRY OFFICE - Clean Minimalist Text Block */}
            <div className="max-w-5xl mx-auto text-center py-10 border-y border-gray-100">
              <h2 className="text-3xl font-bold mb-4">RISE Austria Office @ SSE</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As the <strong>first software company located within an educational institution</strong> in the region, 
                we provide a unique environment where students work on live international projects alongside their 
                university curriculum. This immersive experience ensures they are industry-ready from day one.
              </p>
            </div>

            {/* SECTION 5: TECHNICAL COMPETENCIES - List Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-10">
               <div>
                 <h3 className="text-2xl font-bold mb-4 border-l-4 border-orange-600 pl-4">Architecture</h3>
                 <p className="text-gray-600">Deep integration of Object-Oriented Design Patterns and system scalability concepts used in modern enterprise software.</p>
               </div>
               <div>
                 <h3 className="text-2xl font-bold mb-4 border-l-4 border-orange-600 pl-4">Data Systems</h3>
                 <p className="text-gray-600">Specialized training in SQLite and persistent data management, ensuring robust performance for mobile and desktop applications.</p>
               </div>
               <div>
                 <h3 className="text-2xl font-bold mb-4 border-l-4 border-orange-600 pl-4">Workflow</h3>
                 <p className="text-gray-600">Adopting industrial standards through Git version control, collaborative code reviews, and agile project management tools like Slack.</p>
               </div>
            </div>

            {/* SECTION 6: THE MISSION - Dark Clean Footer Block */}
            <div className="w-full bg-black py-20 px-10 rounded-none lg:rounded-[4rem]">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-white text-4xl font-bold mb-8">Our Global Mission</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To transform the landscape of technical education by merging industrial production with academic learning. 
                  We are building a future where every graduate is not just a student, but a seasoned software architect 
                  capable of leading global innovation.
                </p>
                <div className="mt-12 flex flex-wrap justify-center gap-10 opacity-50">
                   <span className="text-white font-bold">RESEARCH</span>
                   <span className="text-white font-bold">INNOVATION</span>
                   <span className="text-white font-bold">SKILL</span>
                   <span className="text-white font-bold">ECOSYSTEM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}