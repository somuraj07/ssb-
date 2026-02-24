import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import home1 from '../../assets/home/20260202_121419.jpg';
import home2 from '../../assets/home/20260202_121633.jpg';
import home3 from '../../assets/home/20260202_122858.jpg';
import logo from '../../assets/SSb.svg';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Build a career that's",
      highlight: "future‑proof",
      subtitle: "Learn by doing, lead with insight. Sanskrithi School of Business blends timeless management with modern tech.",
      image: home1,
      badge: "AI-Ready Business Education",
      stats: [
        { k: "15+", v: "Years of Excellence" },
        { k: "1200+", v: "Alumni Network" },
        { k: "95%", v: "Placement Rate" },
        { k: "200+", v: "Recruiters" },
      ]
    },
    {
      title: "Shape the next generation of",
      highlight: "business leaders",
      subtitle: "Experience hands-on learning with industry partnerships, live projects, and cutting-edge technology integration.",
      image: home2,
      badge: "Industry-Connected Learning"
    },
    {
      title: "Transform your potential into",
      highlight: "measurable success",
      subtitle: "Join our network of 1200+ alumni making impact across BFSI, Consulting, Technology, and Entrepreneurship sectors.",
      image: home3,
      badge: "95% Placement Rate"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000); // Auto-advance every 6 seconds
    
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="hero-carousel">
        {/* Sticky Logo - Top Left */}
        <Link to="/" className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center">
          <img src={logo} alt="SSB Logo" className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-lg" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }} />
        </Link>

        {/* Floating decorative elements */}
        <div className="floating-elements"></div>

        {/* Carousel Slides */}
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-content" key={`content-${currentSlide}`}>
              <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-white max-w-3xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-4 py-2 text-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    {slide.badge}
                  </div>

                  {/* Main Title */}
                  <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                    {slide.title}{' '}
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Action Buttons - All lead to unified inquiry form */}
                  <div className="flex flex-wrap mt-9 gap-4 mb-12">
                    <a
                      href="/inquiry"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
                    >
                      Start Admissions
                      <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-90">
                        <path fill="currentColor" d="M5 12h12.17l-4.58-4.59L13 6l7 7-7 7-1.41-1.41L17.17 13H5z"/>
                      </svg>
                    </a>
                    <a
                      href="/inquiry"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/15 border border-white/30 text-white font-semibold text-lg transition-all hover:bg-white/25"
                    >
                      Schedule Visit
                    </a>
                  </div>

                  {/* Stats - Show only on first slide */}
                  {index === 0 && slide.stats && (
                    <div className="stats-grid">
                      {slide.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="stat-card">
                          <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {stat.k}
                          </div>
                          <div className="text-sm text-white/80">
                            {stat.v}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="carousel-controls">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="nav-arrow"
            aria-label="Previous slide"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="nav-dots">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="nav-arrow"
            aria-label="Next slide"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </section>
  );
};

export default HeroCarousel;