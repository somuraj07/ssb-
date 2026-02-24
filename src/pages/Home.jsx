import React, { useEffect, useRef } from "react";
import HeroCarousel from "../components/ui/HeroCarousel.jsx";
import progMba from "../assets/programes/11111.jpg";
import progPgdm from "../assets/programes/22222.jpg";
import progBba from "../assets/programes/33333.jpg";
import homeCampus from "../assets/home/20260202_121419.jpg";
import libraryImg from "../assets/home/Library.jpeg";
import sportsImg from "../assets/home/Sports.jpeg"
import logoTCS from "../assets/companylogos/Tata_Consultancy_Services_Logo.svg.png";
import logoDeloitte from "../assets/companylogos/Deloitte_Logo.png";
import logoAccenture from "../assets/companylogos/Accenture.svg.png";
import logoHDFC from "../assets/companylogos/HDFC_Bank_Logo.svg.png";
import logoWipro from "../assets/companylogos/Wipro-logo.png";
import logoIcici from "../assets/companylogos/icici.png";
import logoAmazon from "../assets/companylogos/amazon.png";
import logoYesBank from "../assets/companylogos/yes bank.png";
import logoGenpact from "../assets/companylogos/800px-Genpact_logo.svg.png";
import logoMphasis from "../assets/companylogos/mphasis-logo (1).png";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import lab from "../assets/lab.jpeg";
/**
 * SSB — Sanskrithi School of Business
 * Home Page (single-file, drop-in)
 * - No external libraries required
 * - Tailwind CSS required
 * - Micro-interactions via CSS + tiny JS (intersection reveals)
 *
 * Notes:
 * - Replace placeholder images/links as needed.
 * - Colors come from CSS variables defined below.
 */

export default function Home() {
  // reveal on scroll - throttled for scroll performance
  useEffect(() => {
    let ticking = false;
    const el = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("reveal-visible");
          });
          ticking = false;
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    el.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  // marquee pause on hover
  const marqueeRef = useRef(null);
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const pause = () => (el.style.animationPlayState = "paused");
    const play = () => (el.style.animationPlayState = "running");
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", play);
    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", play);
    };
  }, []);


  const programs = [
    {
      title: "MBA Program",
      desc: "Master of Business Administration with multiple specializations and industry exposure.",
      chip: "2 Years Full-time",
      img: progMba,
      to: "/academics/mba",
    },
    {
      title: "PGDM Program",
      desc: "Post Graduate Diploma in Management with practical business applications.",
      chip: "Industry Focused",
      img: progPgdm,
      to: "/academics/pgdm",
    },
    {
      title: "BBA Program",
      desc: "Bachelor of Business Administration building foundational business knowledge.",
      chip: "3 Years Full-time",
      img: progBba,
      to: "/academics/bba",
    },
  ];

  const faqs = [
    {
      q: "What specializations do you offer?",
      a: "Marketing, Finance, HR, Business Analytics, Operations, and Entrepreneurship.",
    },
    {
      q: "Do you provide scholarships?",
      a: "Yes—merit, need-based, and sports scholarships. Limited seats each intake.",
    },
    {
      q: "How strong is placement support?",
      a: "Dedicated placement cell, mock interviews, resume clinics, and 200+ recruiter connects.",
    },
    {
      q: "Is there hostel & transport?",
      a: "On-campus residential facilities and city-wide transport options are available.",
    },
  ];

  const recruiters = [
    { name: "TCS", logo: logoTCS },
    { name: "Deloitte", logo: logoDeloitte },
    { name: "Accenture", logo: logoAccenture },
    { name: "HDFC Bank", logo: logoHDFC },
    { name: "Wipro", logo: logoWipro },
    { name: "ICICI Bank", logo: logoIcici },
    { name: "Amazon", logo: logoAmazon },
    { name: "Yes Bank", logo: logoYesBank },
    { name: "Genpact", logo: logoGenpact },
    { name: "Mphasis", logo: logoMphasis },
  ];

  return (
    <div className="relative bg-[var(--base)] text-[var(--text)] bg-mesh">

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Recruiters marquee */}
      <section
        aria-label="Our Recruiters"
        className="py-10 md:py-14 border-t border-[var(--border-light)]"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-[var(--text-muted)] text-sm mb-6">
            Trusted by leading recruiters
          </p>
          <div className="overflow-hidden">
            <div className="marquee" ref={marqueeRef}>
              {[...recruiters, ...recruiters].map((r, idx) => (
                <div
                  key={r.name + idx}
                  className="shrink-0 px-6 py-3 rounded-xl border border-[var(--border-light)] bg-white flex items-center justify-center h-14"
                >
                  <img src={r.logo} alt={r.name} className="h-8 object-contain max-w-[120px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <Header title="Programs" subtitle="Choose your track" />
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <a
                key={p.title}
                href={p.to}
                className="group relative rounded-2xl overflow-hidden border border-[var(--border-light)] bg-[var(--surface-2)] block hover:border-[var(--border-medium)] transition-colors duration-200"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-flex text-[10px] tracking-wide uppercase bg-[var(--surface-2)] border border-[var(--border-light)] px-3 py-1.5 rounded-full text-[var(--text-soft)] font-semibold">
                    {p.chip}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--text-soft)]">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes / Placements */}
      <section className="py-16 md:py-24 border-y border-[var(--border-light)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <Header title="Outcomes" subtitle="Where our students thrive" />
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <Card
              title="Career Accelerator"
              desc="Resume labs, mock interviews, and mentorship pairings tailored to your specialization."
            />
            <Card
              title="Hiring Partners"
              desc="200+ companies across BFSI, IT, Consulting, and Retail regularly visit our campus."
            />
            <Card
              title="Placement Cell"
              desc="Dedicated placement support with industry connections and career guidance."
            />
          </div>
          {/* testimonial row */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Testimonial
              quote="SSB's industry-focused curriculum and practical exposure prepared me for the consulting world. The mentorship and live projects made all the difference."
              name="H ASMA BANU"
              role="HR Executive, Tech Mahindra, 2022-2024"
              img={test1}
            />
            <Testimonial
              quote="The analytical thinking and business fundamentals from SSB helped me excel in e-commerce. Strong foundation for a career in analytics and operations."
              name="BABA FAKRUDDIEN N"
              role="Developer, TCS, 2020-2022"
              img={test2}
            />
          </div>
        </div>
      </section>

      {/* Campus & Facilities */}
      <section id="visit" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <Header title="Campus" subtitle="Designed for curiosity" />
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <Facility
              title="Library & Research"
              img={libraryImg}
              points={["Digital journals", "Quiet pods", "Late hours"]}
            />
            <Facility
              title="Technology Labs"
              img={lab}
              points={["Analytics suites", "AI sandbox", "Prototyping"]}
            />
            <Facility
              title="Residential & Sports"
              img={sportsImg}
              points={[
                "On-campus hostels",
                "Ground & courts",
                "Healthy dining",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_10%,rgba(203,181,139,0.12),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)]">
            Admissions 2026 Now Open
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Limited seats with scholarships for high performers. Applications
            reviewed on a rolling basis.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium hover:scale-105 hover:shadow-xl transition focus-ring"
            >
              Apply Online
            </a>
            <a
              href="/admissions/scholarships"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[var(--surface-2)] border border-[var(--border-light)] text-[var(--text)] font-medium hover:bg-[var(--surface-3)] transition focus-ring"
            >
              Scholarships
            </a>
          </div>
        </div>
      </section>

      {/* Events & Announcements */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <Header
            title="Events & Announcements"
            subtitle="Stay updated with campus happenings"
          />
          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            {/* Upcoming Events */}
            <div className="lg:col-span-2">
              <div className="grid gap-6">
                <EventCard
                  type="Upcoming Event"
                  title="Annual Business Conclave 2026"
                  date="March 15-16, 2026"
                  desc="Join industry leaders and students for two days of inspiring talks, networking sessions, and business competitions."
                  image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
                  link="/campus-life/activities"
                />
                <EventCard
                  type="Admission Alert"
                  title="Final Round of Admissions 2026"
                  date="Deadline: February 28, 2026"
                  desc="Last chance to secure your seat for MBA/PGDM programs. Apply now with merit scholarships available."
                  image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
                  link="/admissions"
                  urgent={true}
                />
                <EventCard
                  type="Campus Drive"
                  title="TCS & Deloitte On-Campus Placement"
                  date="March 8-10, 2026"
                  desc="Multiple roles available for final year students. Pre-placement talk and selection process."
                  image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  link="/placements/campus-drives"
                />
              </div>
            </div>

            {/* Quick Announcements */}
            <div className="space-y-6">
              <div className="reveal rounded-2xl border border-[var(--border-light)] bg-[var(--surface-1)] p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                  Quick Updates
                </h3>
                <div className="space-y-4">
                  <AnnouncementItem
                    title="Library Extended Hours"
                    desc="24/7 access during exam weeks"
                    link="/campus-life/library"
                  />
                  <AnnouncementItem
                    title="Sports Meet Registration"
                    desc="Inter-college championships"
                    link="/campus-life/sports"
                  />
                  <AnnouncementItem
                    title="Industry Mentorship Program"
                    desc="Applications now open"
                    link="/placements/training"
                  />
                </div>
              </div>

              <div className="reveal rounded-2xl border border-[var(--border-light)] bg-[var(--surface-1)] p-6">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                  Important Links
                </h3>
                <div className="space-y-3">
                  <QuickLink title="About" href="/about/overview" icon="🎓" />
                  <QuickLink
                    title="Academic Calendar"
                    href="/admissions/calendar"
                    icon="📅"
                  />
                  <QuickLink
                    title="Fee Payment"
                    href="/admissions/fee-payment"
                    icon="💳"
                  />
                  <QuickLink
                    title="Exam Results"
                    href="/examinations"
                    icon="📊"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-t border-[var(--border-light)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <Header title="FAQs" subtitle="Quick answers" />
          <div className="mt-8 divide-y divide-[var(--border-light)] rounded-2xl border border-[var(--border-light)] overflow-hidden">
            {faqs.map((f, i) => (
              <FAQ key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-[var(--surface-1)]/30 to-transparent">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">Get in Touch</h2>
            <p className="text-[var(--text-muted)] mt-2 max-w-xl mx-auto">Visit our campus or reach out — we&apos;re here to help you take the next step.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="reveal group rounded-2xl overflow-hidden border border-[var(--border-light)] bg-[var(--surface-2)] shadow-lg hover:shadow-xl hover:border-[var(--brand)]/30 transition-all duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={homeCampus} alt="Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)]">Visit Us</h3>
                </div>
                <p className="text-[var(--text-soft)] leading-relaxed">
                  Book a guided campus tour and interact with faculty. Experience our facilities firsthand.
                </p>
                <a href="/inquiry" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition-all focus-ring">
                  Schedule a Visit
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h12.17l-4.58-4.59L13 6l7 7-7 7-1.41-1.41L17.17 13H5z"/></svg>
                </a>
              </div>
            </div>
            <div className="reveal group rounded-2xl border border-[var(--border-light)] bg-[var(--surface-2)] p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-[var(--brand)]/30 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)]">Ask Admissions</h3>
              </div>
              <p className="text-[var(--text-soft)] leading-relaxed flex-1">
                We usually respond within 24 hours on working days. Submit your inquiry using our form — admission, schedule visit, or general contact.
              </p>
              <a href="/inquiry" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition-all focus-ring w-fit">
                Send Inquiry
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h12.17l-4.58-4.59L13 6l7 7-7 7-1.41-1.41L17.17 13H5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ---------- Small presentational helpers (inline, no external deps) ---------- */

function Header({ title, subtitle }) {
  return (
    <div className="reveal flex items-end justify-between flex-wrap gap-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          {title}
        </h2>
        <p className="text-[var(--muted)] mt-1">{subtitle}</p>
      </div>
      <div className="h-px w-24 bg-gradient-to-r from-[var(--brand)]/70 to-transparent rounded-full" />
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="reveal group p-6 rounded-2xl border border-[var(--border-light)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] hover:border-[var(--border-medium)] transition-colors duration-200">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-[var(--text)]">{title}</h3>
        <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-2)] border border-[var(--border-light)] text-[var(--text-soft)]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="opacity-90"
          >
            <path
              fill="currentColor"
              d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m1 5v5l4 2"
            />
          </svg>
        </span>
      </div>
      <p className="text-[var(--text-soft)] mt-2">{desc}</p>
    </div>
  );
}

function Testimonial({ quote, name, role, img }) {
  return (
    <div className="reveal relative overflow-hidden rounded-2xl border border-[var(--border-light)] bg-[var(--surface-1)] p-6">
      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[var(--brand)]/8 pointer-events-none" />
      <div className="flex items-start gap-4">
        <img
          src={img}
          alt={name}
          className="h-16 w-16 rounded-xl object-cover border border-[var(--border-light)]"
        />
        <div>
          <p className="text-[var(--text)] italic leading-relaxed">"{quote}"</p>
          <div className="mt-3 text-sm text-[var(--text-soft)]">
            <span className="font-semibold text-[var(--text-dim)]">{name}</span> • {role}
          </div>
        </div>
      </div>
    </div>
  );
}

function Facility({ title, img, points }) {
  return (
    <div className="reveal group relative overflow-hidden rounded-2xl border border-[var(--border-light)] bg-[var(--surface-1)]">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[var(--text)]">{title}</h3>
        <ul className="mt-3 text-sm text-[var(--text-soft)] grid grid-cols-2 gap-x-4 gap-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FAQ({ q, a }) {
  const id = q.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <details className="group p-5 bg-white/5 open:bg-white/7 transition">
      <summary className="list-none cursor-pointer flex items-center justify-between gap-4">
        <span className="text-white font-medium">{q}</span>
        <span className="shrink-0 h-8 w-8 grid place-items-center rounded-xl bg-white/10 border border-white/15 transition group-open:rotate-45">
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
          </svg>
        </span>
      </summary>
      <div id={id} className="pt-3 text-[var(--muted)]">
        {a}
      </div>
    </details>
  );
}

function EventCard({ type, title, date, desc, image, link, urgent = false }) {
  return (
    <div className="reveal group relative rounded-2xl overflow-hidden border border-[var(--border-light)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] transition-colors duration-200">
      <div className="grid md:grid-cols-3 gap-0">
        <div className="md:col-span-1">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-102"
          />
        </div>
        <div className="md:col-span-2 p-6">
          <div className="flex items-start justify-between mb-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                urgent
                  ? "bg-red-100 text-red-800 border border-red-200"
                  : "bg-blue-100 text-blue-800 border border-blue-200"
              }`}
            >
              {type}
            </span>
            {urgent && (
              <span className="animate-pulse text-red-500 text-xs font-bold">
                URGENT
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--brand)] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mb-3">{date}</p>
          <p className="text-[var(--text-muted)] mb-4 line-clamp-3">{desc}</p>
          <a
            href={link}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium hover:scale-105 hover:shadow-lg transition focus-ring text-sm"
          >
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5 12h12.17l-4.58-4.59L13 6l7 7-7 7-1.41-1.41L17.17 13H5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function AnnouncementItem({ title, desc, link }) {
  return (
    <a href={link} className="block group">
      <div className="border-l-2 border-[var(--brand)] pl-3 hover:border-[var(--accent)] transition-colors">
        <h4 className="font-medium text-[var(--text)] group-hover:text-[var(--brand)] transition-colors">
          {title}
        </h4>
        <p className="text-sm text-[var(--text-muted)] mt-1">{desc}</p>
      </div>
    </a>
  );
}

function QuickLink({ title, href, icon }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--surface-2)] transition-colors group"
    >
      <span className="text-lg">{icon}</span>
      <span className="text-[var(--text)] group-hover:text-[var(--brand)] transition-colors">
        {title}
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        className="ml-auto text-[var(--text-muted)]"
      >
        <path
          fill="currentColor"
          d="M5 12h12.17l-4.58-4.59L13 6l7 7-7 7-1.41-1.41L17.17 13H5z"
        />
      </svg>
    </a>
  );
}
