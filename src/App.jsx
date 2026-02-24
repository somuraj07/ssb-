import React, { Suspense, useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Layout/Footer.jsx';
import MobileNavigation from './components/Layout/MobileNavigation.jsx';
import routes from './routes.jsx';


// Scroll to top component
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Use setTimeout to ensure the page has rendered
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <main className="flex-1 min-w-0 overflow-x-hidden">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh] p-16">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-[var(--brand)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-[var(--text-soft)]">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <MobileNavigation />
      <Footer />
    </div>
  );
}