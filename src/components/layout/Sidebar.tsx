/**
 * SIDEBAR NAVIGATION COMPONENT
 * 
 * Fixed-width sidebar navigation with nested sections
 * Contains navigation links for Foundation and Components sections
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();
  const [isFoundationExpanded, setIsFoundationExpanded] = useState(true);
  const [isComponentsExpanded, setIsComponentsExpanded] = useState(true);
  const [isPatternsExpanded, setIsPatternsExpanded] = useState(true);

  // Helper to check if route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className="w-64 h-screen bg-[var(--surface-container)] flex flex-col fixed left-0 top-16 z-40"
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      {/* Navigation Links - consistent left padding */}
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-2">
          {/* Home Link with Icon - Uses secondary button styling */}
          <Link
            to="/"
            className={`
              flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
              transition-colors
              ${
                isActive("/")
                  ? "bg-sepia-700 text-sepia-50 font-medium"
                  : "hover:bg-sepia-600 hover:text-sepia-50"
              }
            `}
          >
            <img 
              src="/Icons/Dark theme/2. System apps/Home.png" 
              alt="Home" 
              className="w-7 h-7 object-contain"
            />
            <span>Home Page</span>
          </Link>

          {/* Foundation Section with Icon - Uses secondary button hover styling */}
          <div>
            <button
              onClick={() => setIsFoundationExpanded(!isFoundationExpanded)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-button hover:bg-sepia-600 hover:text-sepia-50 transition-colors font-mono text-sm"
            >
              <img 
                src="/Icons/Dark theme/3. System folders/Library.png" 
                alt="Foundation" 
                className="w-7 h-7 object-contain"
              />
              <span className="flex-1 text-left">Foundation</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isFoundationExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Foundation Sub-links with Icons - Uses secondary button styling */}
            {isFoundationExpanded && (
              <div className="mt-1 space-y-1">
                <Link
                  to="/foundation/base-colors"
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/base-colors")
                        ? "bg-sepia-700 text-sepia-50 font-medium"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Base Colors</span>
                </Link>
                <Link
                  to="/foundation/semantic-colors"
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/semantic-colors")
                        ? "bg-sepia-700 text-sepia-50 font-medium"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Semantic Colors</span>
                </Link>
                <Link
                  to="/foundation/typography"
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/typography")
                        ? "bg-sepia-700 text-sepia-50 font-medium"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Typography</span>
                </Link>
              </div>
            )}
          </div>

          {/* Components Section with Icon - Uses secondary button hover styling */}
          <div>
            <button
              onClick={() => setIsComponentsExpanded(!isComponentsExpanded)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-button hover:bg-sepia-600 hover:text-sepia-50 transition-colors font-mono text-sm"
            >
              <img 
                src="/Icons/Dark theme/3. System folders/Applications.png" 
                alt="Components" 
                className="w-7 h-7 object-contain"
              />
              <span className="flex-1 text-left">Components</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isComponentsExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Components Sub-links with Icons - Uses secondary button styling */}
            {isComponentsExpanded && (
              <div className="mt-1 space-y-1">
                <Link
                  to="/components/buttons"
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/buttons")
                        ? "bg-sepia-700 text-sepia-50 font-medium"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Buttons</span>
                </Link>
              </div>
            )}
          </div>

          {/* Patterns Section with Icon - Uses secondary button hover styling */}
          <div>
            <button
              onClick={() => setIsPatternsExpanded(!isPatternsExpanded)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-button hover:bg-sepia-600 hover:text-sepia-50 transition-colors font-mono text-sm"
            >
              <img 
                src="/Icons/Dark theme/2. System apps/Mission Control.png" 
                alt="Patterns" 
                className="w-7 h-7 object-contain"
              />
              <span className="flex-1 text-left">Patterns</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isPatternsExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Patterns Sub-links with Icons - Uses secondary button styling */}
            {isPatternsExpanded && (
              <div className="mt-1 space-y-1">
                <Link
                  to="/patterns/side-navigation"
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/patterns/side-navigation")
                        ? "bg-sepia-700 text-sepia-50 font-medium"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Side Navigation</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
}

