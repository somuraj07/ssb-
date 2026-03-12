import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV } from '../../data/nav.js';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item.children && item.children.length > 0) {
      setCurrentSection(item);
    } else {
      navigate(item.href);
      setIsOpen(false);
    }
  };

  const handleSubItemClick = (subItem) => {
    navigate(subItem.href);
    setIsOpen(false);
    setCurrentSection(null);
  };

  const goBack = () => {
    setCurrentSection(null);
  };

  const closeMobile = () => {
    setIsOpen(false);
    setCurrentSection(null);
  };

  // Professional icons for different sections
  const getAppIcon = (label) => {
    const icons = {
      'Home': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      ),
      'About Us': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      ),
      'Admissions': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      'Academics': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      'Campus Life': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      'Examinations': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2"/>
          <rect x="9" y="7" width="6" height="6"/>
          <path d="M12 1v6"/>
        </svg>
      ),
      'Placements': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      'Committees': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      'Community Service': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      )
    };
    return icons[label] || (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
      </svg>
    );
  };

  return (
    <>
      {/* Mobile Menu Icon Trigger */}
      <div className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="mobile-menu-trigger group relative bg-gradient-to-br from-orange-500 to-red-600 text-white p-4 sm:p-5 rounded-[1.4rem] sm:rounded-3xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-110 transition-all duration-500 animate-pulse hover:animate-none"
          aria-label="Open navigation menu"
        >
          <div className="relative z-10">
            {/* Hamburger Menu Icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform duration-300">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400 to-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
          {/* Menu text hint */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Navigation Menu
          </div>
        </button>
      </div>

      {/* Mobile Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center justify-center min-h-screen p-2 sm:p-4">
              <div className="relative w-full max-w-[24rem]">
                {/* Mobile Phone Frame */}
                <div className="shadow-2xl shadow-black/50">
                  <div className="bg-black p-1 rounded-[2rem] shadow-2xl">
                    {/* Mobile Screen */}
                    <motion.div 
                      className="bg-black/95 backdrop-blur-xl rounded-[1.8rem] shadow-2xl border border-gray-800/50 h-[min(88dvh,760px)] w-full overflow-hidden relative"
                      initial={{ scale: 0.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ 
                        type: "spring",
                        damping: 25,
                        stiffness: 400,
                        duration: 0.3
                      }}
                    >
                      {/* Phone Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-6 bg-black rounded-b-2xl flex items-center justify-center z-10">
                        {/* Speaker */}
                        <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                        {/* Camera */}
                        <div className="absolute right-4 w-2 h-2 bg-gray-700 rounded-full"></div>
                      </div>
                  {/* Header with Close Button */}
                  <motion.div 
                    className="flex items-center justify-between px-3 sm:px-4 pt-8 pb-3 border-b border-gray-800/50"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <h2 className="text-sm font-medium text-white">Navigation</h2>
                    <motion.button
                      onClick={closeMobile}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg w-8 h-8 flex items-center justify-center transition-all duration-200"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </motion.button>
                  </motion.div>

                {/* Scrollable Content */}
                <div className="h-[calc(min(88dvh,760px)-4.75rem)] overflow-y-auto overscroll-contain">
                  {currentSection ? (
                    /* Sub-menu View */
                    <div className="p-3 sm:p-4 pb-6">
                      {/* Back Button */}
                      <motion.button
                        onClick={goBack}
                        className="flex items-center space-x-2 mb-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-3 py-2 rounded-lg text-sm"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m15 18-6-6 6-6"/>
                        </svg>
                        <span className="text-sm">Back</span>
                      </motion.button>

                      {/* Section Title */}
                      <motion.div 
                        className="text-center mb-4 bg-gray-900/60 border border-gray-800/50 rounded-xl p-4"
                        initial={{ scale: 0.3, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.05 }}
                      >
                        <motion.div 
                          className="text-xl mb-2 text-orange-400"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {getAppIcon(currentSection.label)}
                        </motion.div>
                        <h2 className="text-lg font-bold text-white mb-2">{currentSection.label}</h2>
                        <p className="text-gray-400 text-sm">{currentSection.description}</p>
                      </motion.div>

                      {/* Sub-items List */}
                      <motion.div 
                        className="space-y-2"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              delayChildren: 0.1,
                              staggerChildren: 0.03
                            }
                          }
                        }}
                      >
                        {currentSection.children.map((subItem, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSubItemClick(subItem)}
                            className="w-full bg-gray-900/60 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-600/20 rounded-xl p-3.5 text-left border border-gray-800/50 hover:border-orange-500/40 group"
                            variants={{
                              hidden: { 
                                scale: 0.5,
                                opacity: 0
                              },
                              visible: { 
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 25
                                }
                              }
                            }}
                            whileHover={{ 
                              scale: 1.02,
                              transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-white group-hover:text-orange-400 transition-colors duration-200 text-sm leading-snug">{subItem.label}</h3>
                                <p className="text-xs text-gray-400 leading-relaxed mt-1 line-clamp-2">{subItem.description}</p>
                              </div>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 group-hover:text-orange-400 transition-colors duration-200 flex-shrink-0">
                                <path d="m9 18 6-6-6-6"/>
                              </svg>
                            </div>
                          </motion.button>
                        ))}
                      </motion.div>
                    </div>
                  ) : (
                    /* Main Menu View */
                    <div className="min-h-full flex items-center justify-center p-3 sm:p-4">
                      {/* Grid of Navigation Items */}
                      <motion.div 
                        className="grid grid-cols-3 gap-3 w-full"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              delayChildren: 0.05,
                              staggerChildren: 0.01
                            }
                          }
                        }}
                      >
                        {NAV.map((item, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleItemClick(item)}
                            className="group relative bg-gray-900/70 hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-red-600/30 backdrop-blur-sm rounded-xl p-2 border border-gray-800/50 hover:border-orange-500/50 flex flex-col items-center justify-center space-y-1 min-h-[84px] aspect-square shadow-lg hover:shadow-xl transition-all duration-200"
                            variants={{
                              hidden: { 
                                y: 20,
                                opacity: 0
                              },
                              visible: { 
                                y: 0,
                                opacity: 1,
                                transition: {
                                  type: "tween",
                                  ease: "easeOut",
                                  duration: 0.3
                                }
                              }
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            whileTap={{ 
                              scale: 0.95,
                              transition: { type: "spring", stiffness: 500, damping: 30 }
                            }}
                          >
                            <motion.div 
                              className="text-orange-400 group-hover:text-orange-300"
                              whileHover={{ scale: 1.15 }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              {getAppIcon(item.label)}
                            </motion.div>
                            <div className="text-center">
                              <h3 id='mobileHeading' className="text-[11px] sm:text-xs font-light text-white group-hover:text-orange-300 transition-colors duration-200 leading-tight text-center px-0.5">
                                {item.label}
                              </h3>
                              {item.children && (
                                <motion.div 
                                  className="flex justify-center space-x-0.5 mt-0.5"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.1 + index * 0.005, type: "spring", stiffness: 500, damping: 30 }}
                                >
                                  {[0, 1, 2].map((dotIndex) => (
                                    <motion.div
                                      key={dotIndex}
                                      className="w-0.5 h-0.5 bg-orange-400 rounded-full"
                                      animate={{ 
                                        scale: [1, 1.3, 1]
                                      }}
                                      transition={{ 
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: dotIndex * 0.2
                                      }}
                                    />
                                  ))}
                                </motion.div>
                              )}
                            </div>
                            {/* Animated background effect */}
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-600/0 rounded-xl shadow-inner"
                              whileHover={{ 
                                background: "linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(220, 38, 38, 0.1))",
                                boxShadow: "0 4px 20px rgba(249, 115, 22, 0.15)",
                                transition: { duration: 0.2 }
                              }}
                            />
                          </motion.button>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </div>
                
                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-white/30 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
