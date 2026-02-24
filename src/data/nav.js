export const NAV = [
  { 
    label: 'Home', 
    href: '/',
    description: 'Welcome to SSB Puttaparthi'
  },

  { 
    label: 'About Us', 
    href: '/about',
    description: 'Learn about our mission, vision and heritage',
    children: [
      { 
        label: 'Overview', 
        href: '/about/overview',
        description: 'Complete overview of SSB Puttaparthi'
      },
      { 
        label: 'Mission & Vision', 
        href: '/about/mission-vision',
        description: 'Our mission, vision, and values'
      },
      { 
        label: 'About Chairperson', 
        href: '/about/chairperson',
        description: 'Message from our Chairperson'
      },
      { 
        label: 'Governing Body', 
        href: '/about/governing-body',
        description: 'Our governing council members'
      },
   
      { 
        label: 'Academic Council', 
        href: '/about/academic-council',
        description: 'Academic governance and oversight'
      },
   
      { 
        label: 'Organisation Chart', 
        href: '/about/organisation-chart',
        description: 'Institutional organizational structure'
      },
      { 
        label: 'About RISE', 
        href: '/about/rise',
        description: 'Research, Innovation, and Startup Ecosystem'
      },
      { 
        label: 'MOUs', 
        href: '/about/mous',
        description: 'Memorandums of Understanding and partnerships'
      },
     
     
    ]
  },

  { 
    label: 'Admissions', 
    href: '/admissions',
    description: 'Join our academic community',
    children: [
      { 
        label: 'Courses Offered', 
        href: '/admissions/courses',
        description: 'All academic courses and programs'
      },
      { 
        label: 'Admission Procedure', 
        href: '/admissions/admission-procedure',
        description: 'Step-by-step admission process'
      },
      { 
        label: 'Fee Structure', 
        href: '/admissions/fee-structure',
        description: 'Course fees and payment details'
      },
      { 
        label: 'Fee Payment', 
        href: '/admissions/fee-payment',
        description: 'QR code payment and fee information'
      },
      { 
        label: 'Scholarships', 
        href: '/admissions/scholarships',
        description: 'Merit-based scholarships and financial aid'
      },
      { 
        label: 'ICET Ranks/', 
        href: '/admissions/ranks',
        description: 'Entrance exam rank requirements'
      },
      { 
        label: 'Admissions Committee', 
        href: '/admissions/admissions-committee',
        description: 'Admissions committee members and policies'
      },
      { 
        label: 'Academic Calendar', 
        href: '/admissions/calendar',
        description: 'Important academic dates and events'
      },
   
    ]
  },

  { 
    label: 'Academics', 
    href: '/academics',
    description: 'Our academic programs and excellence',
    children: [
      { 
        label: 'About BBA', 
        href: '/academics/bba',
        description: 'Bachelor of Business Administration program'
      },
      { 
        label: 'About MBA', 
        href: '/academics/mba',
        description: 'Master of Business Administration program'
      },
   
    ]
  },

  { 
    label: 'Campus Life', 
    href: '/campus-life',
    description: 'Vibrant student life and facilities',
    children: [
      { 
        label: 'About SSB Campus', 
        href: '/campus-life/campus',
        description: 'Our beautiful campus overview'
      },
      { 
        label: 'Library', 
        href: '/campus-life/library',
        description: 'Digital and physical learning resources'
      },
      { 
        label: 'Transportation', 
        href: '/campus-life/transportation',
        description: 'Campus and city transport services'
      },
      { 
        label: 'Hostel Facility', 
        href: '/campus-life/hostel',
        description: 'On-campus accommodation facilities'
      },
      { 
        label: 'Computer Centre', 
        href: '/campus-life/computer-centre',
        description: 'IT infrastructure and computer labs'
      },
      { 
        label: 'Sports Facility', 
        href: '/campus-life/sports',
        description: 'Sports and recreational facilities'
      },
      { 
        label: 'Activities & Events', 
        href: '/campus-life/activities',
        description: 'Student activities and campus events'
      }
    ]
  },

  { 
    label: 'Examinations', 
    href: '/examinations',
    description: 'Examination policies and procedures',
    children: [
      { 
        label: 'Team Members', 
        href: '/examinations/team',
        description: 'Examination committee and staff members'
      },
      { 
        label: 'Evaluation Procedure', 
        href: '/examinations/evaluation-procedure',
        description: 'Assessment and evaluation methodology'
      },
      { 
        label: 'Academic Calendar', 
        href: '/examinations/calendar',
        description: 'Examination schedule and important dates'
      },
      
      
    ]
  },

  { 
    label: 'Placements', 
    href: '/placements',
    description: 'Career opportunities and industry connections',
    children: [
      { 
        label: 'Team Members', 
        href: '/placements/team',
        description: 'Placement cell team and coordinators'
      },
      { 
        label: 'Vision & Mission of Placement Cell', 
        href: '/placements/vision-mission',
        description: 'Our placement philosophy and objectives'
      },
      { 
        label: 'Training Programs', 
        href: '/placements/training',
        description: 'Skill development and career preparation'
      },
      { 
        label: 'Campus Drives', 
        href: '/placements/campus-drives',
        description: 'On-campus recruitment activities'
      },
      { 
        label: 'MOUs & Collaborations', 
        href: '/placements/mous',
        description: 'Industry partnerships and collaborations'
      },
      { 
        label: 'Internships', 
        href: '/placements/internships',
        description: 'Summer internship programs and opportunities'
      }
    ]
  },

  { 
    label: 'Committees', 
    href: '/committees',
    description: 'Institutional committees and governance',
    children: [
      { 
        label: 'Anti Ragging', 
        href: '/committees/anti-ragging',
        description: 'Anti-ragging measures and reporting'
      },
      { 
        label: 'All Other Committees', 
        href: '/committees/all-committees',
        description: 'Grievance Redressal, NPTEL, Academic, IIC, R&D, Women Empowerment, and more'
      }
    ]
  },

  { 
    label: 'Community Service', 
    href: '/community-service',
    description: 'Social responsibility and community outreach'
  }
];

// Quick navigation items for mobile and footer
export const quickNav = [
  { label: 'Admissions', href: '/admissions', icon: '📝' },
  { label: 'Programs', href: '/programs', icon: '📚' },
  { label: 'Placements', href: '/placements/statistics', icon: '💼' },
  { label: 'Campus Tour', href: '/facilities', icon: '🏫' },
  { label: 'Faculty', href: '/faculty', icon: '👨‍🏫' },
  { label: 'Contact', href: '/inquiry', icon: '📞' }
];

// Footer navigation structure
export const footerNav = {
  academic: {
    title: 'Academic',
    links: [
      { label: 'MBA Program', href: '/programs/mba' },
      { label: 'Faculty', href: '/faculty' },
      { label: 'Academic Calendar', href: '/programs/academic-calendar' },
      { label: 'Library', href: '/facilities/library' }
    ]
  },
  admissions: {
    title: 'Admissions',
    links: [
      { label: 'How to Apply', href: '/admissions' },
      { label: 'Eligibility', href: '/admissions#eligibility' },
      { label: 'Scholarships', href: '/scholarships' },
      { label: 'Fee Structure', href: '/admissions#fees' },
      { label: 'FAQ', href: '/admissions#faq' }
    ]
  },
  campus: {
    title: 'Campus Life',
    links: [
      { label: 'Facilities', href: '/facilities' },
      { label: 'Hostel', href: '/facilities/student-residential' },
      { label: 'Sports', href: '/facilities/sports' },
      { label: 'Student Clubs', href: '/campus-life/clubs' },
      { label: 'Events', href: '/campus-life/events' }
    ]
  },
  career: {
    title: 'Career & Placements',
    links: [
      { label: 'Placement Statistics', href: '/placements/statistics' },
      { label: 'Our Recruiters', href: '/placements/recruiters' },
      { label: 'Training Programs', href: '/placements/activities' },
      { label: 'Alumni Network', href: '/alumni' },
      { label: 'Success Stories', href: '/placements/success-stories' }
    ]
  },
  about: {
    title: 'About SSB',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Leadership', href: '/about/chairman-message' },
      { label: 'Governance', href: '/committees' },
      { label: 'Awards', href: '/about/awards' },
      { label: 'Contact Us', href: '/contact' }
    ]
  }
};

// Breadcrumb helper
export const getBreadcrumb = (pathname) => {
  const pathParts = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'Home', href: '/' }];
  
  let currentPath = '';
  for (const part of pathParts) {
    currentPath += `/${part}`;
    
    // Find the nav item for this path
    const findNavItem = (items, path) => {
      for (const item of items) {
        if (item.href === path) return item;
        if (item.children) {
          const found = findNavItem(item.children, path);
          if (found) return found;
        }
      }
      return null;
    };
    
    const navItem = findNavItem(NAV, currentPath);
    if (navItem) {
      breadcrumbs.push({
        label: navItem.label,
        href: currentPath
      });
    } else {
      // Fallback for dynamic routes
      breadcrumbs.push({
        label: part.charAt(0).toUpperCase() + part.slice(1).replace('-', ' '),
        href: currentPath
      });
    }
  }
  
  return breadcrumbs;
};