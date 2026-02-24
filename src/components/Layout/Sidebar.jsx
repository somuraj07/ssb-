import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X, Home, GraduationCap, Users, Building, BookOpen, Award, Heart, FileText } from 'lucide-react';
import { NAV } from '../../data/nav.js';

const iconMap = {
  'Home': Home,
  'About Us': Users,
  'Admissions': GraduationCap,
  'Academics': BookOpen,
  'Campus Life': Building,
  'Examinations': FileText,
  'Placements': Award,
  'Committees': Users,
  'Community Service': Heart,
};

export default function Sidebar() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  const isItemActive = (item) => {
    if (location.pathname === item.href) return true;
    if (item.children) {
      return item.children.some(child => location.pathname === child.href);
    }
    return false;
  };

  const handleItemClick = (item, index) => {
    if (item.children) {
      setExpandedItem(expandedItem === index ? null : index);
      if (isCollapsed) {
        setIsCollapsed(false);
      }
    } else {
      // For items without children, navigate directly
      setExpandedItem(null);
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setExpandedItem(null);
    }
  };

  return (
    <>
      {/* Compact Floating Right Sidebar */}
      <aside
        className={`fixed top-6 right-6 z-[60] bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/60 shadow-2xl transition-all duration-300 ease-out
          ${isCollapsed ? 'w-52' : 'w-80'} max-h-[85vh] overflow-hidden`}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header/Toggle */}
        <div className="p-4 border-b border-gray-100">
          {isCollapsed ? (
            <button
              onClick={toggleSidebar}
              className="w-full h-10 bg-[var(--brand)] text-white rounded-xl flex items-center justify-center hover:bg-[var(--brand-dark)] transition-colors shadow-md"
              title="Expand Navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">SSB Navigation</h3>
                  <p className="text-xs text-gray-500">Puttaparthi</p>
                </div>
              </div>
              <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600"
                title="Collapse Navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2">
          {NAV.map((item, index) => {
            const IconComponent = iconMap[item.label] || Home;
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItem === index;
            const isActive = isItemActive(item);

            return (
              <div key={index} className="mb-1">
                {isCollapsed ? (
                  // Collapsed View - Icons with Names
                  <>
                    {hasChildren ? (
                      <button
                        onClick={() => handleItemClick(item, index)}
                        className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 mx-2
                          ${isActive 
                            ? 'bg-[var(--brand)] text-white shadow-md' 
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                      >
                        <IconComponent className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium truncate">{item.label}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 mx-2
                          ${isActive 
                            ? 'bg-[var(--brand)] text-white shadow-md' 
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                      >
                        <IconComponent className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium truncate">{item.label}</span>
                      </Link>
                    )}
                  </>
                ) : (
                  // Expanded View - Full Navigation
                  <>
                    {hasChildren ? (
                      <button
                        onClick={() => handleItemClick(item, index)}
                        className={`w-full flex items-center px-4 py-3 text-left transition-all duration-200 rounded-lg mx-2
                          ${isActive 
                            ? 'bg-[var(--brand)]/10 text-[var(--brand)] font-semibold' 
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                      >
                        <IconComponent className={`h-5 w-5 mr-3 ${isActive ? 'text-[var(--brand)]' : 'text-gray-500'}`} />
                        <span className="flex-1 text-sm font-medium">{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''} ${isActive ? 'text-[var(--brand)]' : 'text-gray-400'}`} />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center px-4 py-3 transition-all duration-200 rounded-lg mx-2
                          ${isActive 
                            ? 'bg-[var(--brand)]/10 text-[var(--brand)] font-semibold' 
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                      >
                        <IconComponent className={`h-5 w-5 mr-3 ${isActive ? 'text-[var(--brand)]' : 'text-gray-500'}`} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </Link>
                    )}

                    {/* Submenu - Only in expanded state */}
                    {!isCollapsed && isExpanded && hasChildren && (
                      <div className="ml-6 mr-2 mt-1 space-y-1 bg-gray-50/50 rounded-lg p-2">
                        {item.children.map((child, childIndex) => {
                          const isChildActive = location.pathname === child.href;
                          return (
                            <Link
                              key={childIndex}
                              to={child.href}
                              className={`flex items-center px-3 py-2 text-sm transition-all duration-200 rounded-md
                                ${isChildActive 
                                  ? 'bg-[var(--brand)]/8 text-[var(--brand)] font-medium' 
                                  : 'text-gray-600 hover:bg-white hover:text-gray-900'
                                }`}
                            >
                              <div className={`w-2 h-2 rounded-full mr-3 ${isChildActive ? 'bg-[var(--brand)]' : 'bg-gray-400'}`}></div>
                              {child.label}dgfdghdfdgf
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer - Only when expanded */}
        {!isCollapsed && (
          <div className="border-t border-gray-200 p-3 bg-gray-50/30">
            <div className="text-center">
              <p className="text-xs text-gray-500 font-medium">Academic Year 2024-25</p>
              <p className="text-xs text-gray-400 mt-1">© SSB Puttaparthi</p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}