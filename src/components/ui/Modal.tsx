/**
 * MODAL COMPONENT
 * 
 * A reusable modal dialog component with backdrop overlay
 * Built entirely from design tokens defined in tokens.json
 * 
 * FEATURES:
 * - Fixed header with title and close button (always visible)
 * - Scrollable content area (max-height: 66vh)
 * - Fade in/out animations (200ms duration)
 * - Backdrop scrim (semi-transparent overlay)
 * - Drop shadow using elevation tokens
 * - Click outside to close
 * - ESC key to close
 * - Full light/dark theme support
 * 
 * DIMENSIONS:
 * - Width: 740px fixed
 * - Max height: 80% of viewport height
 * - Border radius: 24px (radius.container token)
 * 
 * TOKENS USED:
 * - surface.card: Card background color
 * - sepia.500/800: Border colors (light/dark)
 * - sepia.900/50: Primary text colors (light/dark)
 * - radius.container: 24px border radius
 * - elevation.2: Drop shadow
 */

import { useEffect, type ReactNode } from "react";

// Define the props interface for the Modal component
export interface ModalProps {
  isOpen: boolean;                    // Controls whether modal is visible
  onClose: () => void;                // Function to call when modal should close
  title: string;                      // Title text displayed in fixed header
  children: ReactNode;                // Content to display in scrollable area
}

/**
 * Modal Component
 * 
 * @param isOpen - Whether the modal is currently visible
 * @param onClose - Callback function triggered when user closes modal
 * @param title - Header title text
 * @param children - Modal content (will be scrollable if it exceeds max-height)
 */
export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  
  // EFFECT: Handle ESC key press to close modal
  // This listens for keyboard events and closes the modal when ESC is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Only add listener when modal is open
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    // Cleanup: Remove listener when modal closes or component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // EFFECT: Prevent body scroll when modal is open
  // This keeps the background page from scrolling while modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup: Restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  return (
    <>
      {/* 
        BACKDROP / SCRIM
        - Full-screen semi-transparent overlay
        - Covers entire viewport with dark shade
        - Clicking it closes the modal
        - Uses fade-in/fade-out animation
        - z-50 ensures it sits above page content
      */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-5 animate-in fade-in duration-200"
        onClick={onClose}
      >
        {/* 
          MODAL CONTAINER
          - 740px fixed width
          - Max height: 80% of viewport (80vh)
          - Card styling with background, border, and shadow
          - Clicking inside the modal does NOT close it (stopPropagation)
          - Uses elevation-2 shadow tokens for medium elevation
          - rounded-[24px] uses radius.container token
        */}
        <div
          className="w-[740px] max-h-[80vh] bg-[var(--surface-card)] rounded-[24px] flex flex-col overflow-hidden"
          style={{
            boxShadow: 'var(--elevation-2-shadow)',
            border: '0.5px solid var(--elevation-2-border)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 
            FIXED HEADER
            - Always visible at top (does not scroll)
            - Contains title on left, close button on right
            - Flexbox layout for positioning
            - 24px padding matches card padding from Colors page
            - Border bottom separates header from content
          */}
          <div className="flex items-center justify-between px-8 py-6 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800">
            {/* Title text using primary text color token */}
            <h2 className="text-base font-mono text-sepia-900 dark:text-sepia-50 font-medium">
              {title}
            </h2>

            {/* 
              CLOSE BUTTON
              - X icon to close modal
              - Hover state darkens/lightens based on theme
              - Uses secondary text color for subtle appearance
              - Transition for smooth hover effect
            */}
            <button
              onClick={onClose}
              className="text-sepia-600 dark:text-sepia-400 hover:text-sepia-900 dark:hover:text-sepia-50 transition-colors duration-200 text-xl leading-none"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* 
            SCROLLABLE CONTENT AREA
            - Takes remaining height after header
            - Scrolls vertically when content exceeds available space
            - 24px padding matches card padding
            - overflow-y-auto adds scrollbar only when needed
          */}
          <div className="overflow-y-auto px-8 py-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

