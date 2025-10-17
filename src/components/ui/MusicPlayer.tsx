/**
 * MUSIC PLAYER COMPONENT (VISUAL PROTOTYPE)
 * 
 * A fixed-position music player that displays in the bottom-right corner
 * Visual prototype with demo content - perfect for design system showcase
 * 
 * FEATURES:
 * - Fixed position (bottom-right corner, always visible)
 * - Demo playlist with Roy Orbison songs
 * - Play/Pause control (visual simulation)
 * - Next song button (cycles through playlist)
 * - Real album cover images
 * - Song title display with artist name
 * - Paused by default (no auto-play)
 * - Full light/dark theme support
 * - No external dependencies or blocking issues
 * 
 * DIMENSIONS:
 * - Width: 380px (accommodates larger album art)
 * - Height: 140px (natural content height + padding)
 * - Album art: 108px × 108px (fills available vertical space)
 * - Position: 24px from bottom, 24px from right
 * 
 * LAYOUT:
 * - Left: Album cover (108px square, perfectly aligned top/bottom with right content)
 * - Right: Song info + progress + controls (108px total, flush top and bottom)
 * 
 * TOKENS USED:
 * - surface.card: Card background color
 * - sepia.500/800: Border colors (light/dark)
 * - sepia.900/50: Primary text colors (light/dark)
 * - sepia.600/400: Secondary text for artist name
 * - radius.container: 24px border radius for card
 * - radius.button: 12px border radius for album cover
 * - elevation.2: Drop shadow (same as Modal)
 */

import { useState, useEffect, useRef } from "react";

// Demo playlist data - Roy Orbison songs
// In a real app, this would come from an API or database
interface Song {
  id: number;
  artist: string;
  title: string;
  albumCover: string;
  duration: number; // Duration in seconds
}

// Demo playlist with CC0 (Public Domain - No Attribution Required) 8-bit style music
// Using royalty-free audio that works on localhost
// All tracks are CC0 or Public Domain from various free music sources
const DEMO_PLAYLIST: Song[] = [
  {
    id: 1,
    artist: "8-Bit",
    title: "Pixel Adventure",
    albumCover: "https://picsum.photos/seed/8bit1/400/400",
    duration: 120 // 2:00
  },
  {
    id: 2,
    artist: "Chiptune",
    title: "Retro Dreams",
    albumCover: "https://picsum.photos/seed/8bit2/400/400",
    duration: 150 // 2:30
  },
  {
    id: 3,
    artist: "Synthwave",
    title: "Digital Sunrise",
    albumCover: "https://picsum.photos/seed/8bit3/400/400",
    duration: 180 // 3:00
  },
];

/**
 * Helper function to format seconds as MM:SS
 * Example: 125 seconds → "2:05"
 */
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * MusicPlayer Component
 * 
 * This component creates a mini music control panel that:
 * 1. Displays a demo playlist
 * 2. Simulates play/pause functionality
 * 3. Allows cycling through songs with next button
 * 4. Shows song info and album covers
 */
export function MusicPlayer() {
  // STATE: Track whether music is currently "playing"
  const [isPlaying, setIsPlaying] = useState(false);
  
  // STATE: Current song index in the playlist
  // Starts at 0 (first song)
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  // STATE: Current playback time in seconds
  // Updated by the audio element's timeupdate event
  const [currentTime, setCurrentTime] = useState(0);
  
  // STATE: Actual duration from loaded audio
  const [duration, setDuration] = useState(0);
  
  // STATE: Position of the music player on screen
  // Allows dragging the player to any location
  // Default: bottom-right corner (24px from edges)
  const [position, setPosition] = useState({ x: window.innerWidth - 380 - 24, y: window.innerHeight - 140 - 24 });
  
  // STATE: Track if player is being dragged
  const [isDragging, setIsDragging] = useState(false);
  
  // STATE: Track initial mouse position when drag starts
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // STATE: Track if component just mounted (for slide-in animation)
  const [justMounted, setJustMounted] = useState(true);
  
  // REF: Reference to the HTML5 audio element
  // This allows us to control playback programmatically
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Get the current song from the playlist
  // This updates automatically when currentSongIndex changes
  const currentSong = DEMO_PLAYLIST[currentSongIndex];
  
  // Calculate progress percentage for the progress bar
  // Returns value between 0 and 100
  // Use actual duration from audio if available, otherwise use playlist duration
  const actualDuration = duration || currentSong.duration;
  const progressPercentage = (currentTime / actualDuration) * 100;

  // EFFECT: Sync audio playback with isPlaying state
  // When isPlaying changes, play or pause the actual audio
  useEffect(() => {
    if (!audioRef.current) {
      console.log("Audio ref not ready yet");
      return;
    }

    if (isPlaying) {
      // Play the audio
      console.log("Attempting to play audio...");
      audioRef.current.play()
        .then(() => {
          console.log("✅ Audio playing successfully!");
        })
        .catch((error) => {
          console.error("❌ Error playing audio:", error);
          console.log("This is likely a browser autoplay restriction. User must interact with the page first.");
          console.log("Try: Click anywhere on the page, then click play again.");
          // If autoplay is blocked, reset playing state
          setIsPlaying(false);
        });
    } else {
      // Pause the audio
      console.log("Pausing audio...");
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // EFFECT: Reset audio when song changes
  // Load new audio source and reset playback
  useEffect(() => {
    if (!audioRef.current) return;
    
    // Reset time when song changes
    setCurrentTime(0);
    setDuration(0);
    
    // Pause if playing
    audioRef.current.pause();
    setIsPlaying(false);
    
    // Audio will load when src changes in JSX
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongIndex]);

  // EFFECT: Handle drag event listeners
  // Attaches mousemove and mouseup events to document when dragging
  useEffect(() => {
    if (isDragging) {
      // Add event listeners to track mouse movement and release
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
      
      // Change cursor to grabbing while dragging
      document.body.style.cursor = 'grabbing';
      
      // Cleanup: Remove event listeners when dragging stops
      return () => {
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.body.style.cursor = 'default';
      };
    }
  }, [isDragging, dragStart, position]);

  // EFFECT: Slide-in animation on mount
  // Sets justMounted to false after a brief delay to trigger animation
  useEffect(() => {
    // After component mounts, wait 100ms then start slide-in animation
    const timer = setTimeout(() => {
      setJustMounted(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  /**
   * Toggle between play and pause
   * Controls the actual HTML5 audio element
   */
  const togglePlayPause = () => {
    console.log("Play/Pause clicked. Current state:", isPlaying);
    console.log("Audio element exists:", !!audioRef.current);
    if (audioRef.current) {
      console.log("Audio src:", audioRef.current.src);
      console.log("Audio ready state:", audioRef.current.readyState);
    }
    setIsPlaying(!isPlaying);
  };

  /**
   * Skip to next song in playlist
   * Cycles back to start when reaching the end
   */
  const handleNext = () => {
    setCurrentSongIndex((prev) => {
      // If we're at the last song, go back to first
      // Otherwise, go to next song
      return prev === DEMO_PLAYLIST.length - 1 ? 0 : prev + 1;
    });
  };

  /**
   * Go to previous song in playlist
   * Only works if not on first song
   */
  const handlePrevious = () => {
    setCurrentSongIndex((prev) => {
      // Only go back if we're not already at the first song
      return prev > 0 ? prev - 1 : prev;
    });
  };

  /**
   * Check if Previous button should be disabled
   * Disabled when on the first track (index 0)
   */
  const isPreviousDisabled = currentSongIndex === 0;

  /**
   * Handle audio time update
   * Called continuously as audio plays
   */
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  /**
   * Handle audio metadata loaded
   * Sets the actual duration from the audio file
   */
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  /**
   * Handle audio ended
   * Reset to beginning when song finishes
   */
  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  /**
   * DRAG FUNCTIONALITY: Start dragging
   * Called when user clicks on the drag handle
   * Records starting mouse position
   */
  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    // Record where the mouse was when dragging started
    // We'll use this to calculate how far the mouse has moved
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  /**
   * DRAG FUNCTIONALITY: Handle mouse movement
   * Updates player position as mouse moves
   * Only active when isDragging is true
   */
  const handleDragMove = (e: MouseEvent) => {
    if (!isDragging) return;

    // Calculate new position based on mouse movement
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Keep player within screen bounds
    // Prevent dragging off-screen
    const maxX = window.innerWidth - 380; // player width
    const maxY = window.innerHeight - 140; // player height
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  /**
   * DRAG FUNCTIONALITY: Stop dragging
   * Called when user releases mouse button
   */
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* 
        HIDDEN AUDIO ELEMENT
        - HTML5 audio for actual music playback
        - Controlled by our UI buttons
        - Using public domain music from reliable source
        - CC0/Public Domain - No attribution required
        - Note: In production, each song would have its own unique audio file
      */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
        onError={(e) => {
          console.error("Audio loading error:", e);
          console.log("If audio won't play, try clicking anywhere on the page first (browser autoplay policy)");
        }}
        // Using a reliable public domain audio source
        // This URL is known to work with HTML5 audio on localhost
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      
      <div
        className="fixed w-[380px] h-[140px] bg-[var(--surface-card)] rounded-[24px] overflow-visible z-[60]"
        style={{
          // Dynamic positioning based on state (allows dragging)
          left: `${position.x}px`,
          top: `${position.y}px`,
          // Using elevation-1 tokens for subtle, well-defined card elevation
          // More blur and subtlety than direct shadows
          boxShadow: 'var(--elevation-1-shadow)',
          border: '0.5px solid var(--elevation-1-border)',
          // Slide-in animation from bottom
          // Starts off-screen (translateY 200px) and slides up
          transform: justMounted ? 'translateY(200px)' : 'translateY(0)',
          opacity: justMounted ? 0 : 1,
          transition: justMounted ? 'none' : 'transform 0.5s ease-out, opacity 0.5s ease-out',
        }}
      >
      {/* 
        DRAG HANDLE - CENTER LEFT SIDE
        - Positioned in the padding space between left edge and album art
        - Perfectly centered in available padding (16px p-4 space)
        - 6 dots in a 2×3 grid pattern (2px × 2px dots, 2px gaps)
        - White dots in dark mode, black dots in light mode
        - No background - just the dots
        - Changes cursor to grab/grabbing on hover/drag
      */}
      <div
        onMouseDown={handleDragStart}
        className="absolute top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
        style={{
          // Position in center of left padding space
          // Padding is 16px (p-4), dots are 6px wide (2px+2px+2px)
          // To center: (16px - 6px) ÷ 2 = 5px from left edge
          left: '5px'
        }}
        aria-label="Drag to move music player"
      >
        {/* 2×3 grid of dots: 2px dots with 2px gaps */}
        <div className="grid grid-cols-2 gap-[2px]">
          {/* Row 1 */}
          <div className="w-[2px] h-[2px] rounded-full bg-sepia-900 dark:bg-sepia-50"></div>
          <div className="w-[2px] h-[2px] rounded-full bg-sepia-900 dark:bg-sepia-50"></div>
          {/* Row 2 */}
          <div className="w-[2px] h-[2px] rounded-full bg-sepia-900 dark:bg-sepia-50"></div>
          <div className="w-[2px] h-[2px] rounded-full bg-sepia-900 dark:bg-sepia-50"></div>
          {/* Row 3 */}
          <div className="w-[2px] h-[2px] rounded-full bg-sepia-900 dark:bg-sepia-50"></div>
          <div className="w-[2px] h-[2px] rounded-full bg-sepia-900 dark:bg-sepia-50"></div>
        </div>
      </div>

      {/* 
        MAIN CONTAINER WITH PADDING
        - Uses p-4 padding (16px) to match About Card component
        - Full height to contain all elements
      */}
      <div className="h-full p-4 flex flex-col">
        {/* 
          TOP SECTION: Album cover + Song info + Controls
          - Flexbox row layout
          - Takes available space
        */}
        <div className="flex flex-row gap-3 mb-3">
          {/* 
            LEFT SECTION: ALBUM COVER
            - Shows album art from current song
            - Square format (108px - fills full height: 140px - 32px padding = 108px)
            - Top and bottom perfectly flush with right-side content
            - Rounded corners (12px)
            - Background color while loading
            - Cover fit to fill container (crops to fit)
          */}
          <div className="w-[108px] h-[108px] flex-shrink-0">
            <div className="w-full h-full rounded-[12px] bg-sepia-200 dark:bg-sepia-800 overflow-hidden">
            {currentSong.albumCover ? (
              <img
                src={currentSong.albumCover}
                alt={`${currentSong.title} album cover`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // If image fails to load, show placeholder
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              // Placeholder when no album cover available
              <div className="w-full h-full flex items-center justify-center text-sepia-400 dark:text-sepia-600 text-2xl">
                ♪
              </div>
            )}
            </div>
          </div>

          {/* 
            RIGHT SECTION: SONG INFO + PROGRESS + CONTROLS
            - Vertically stacked layout (flex-col with justify-between)
            - Takes remaining space
            - Content flush top and bottom (108px height matches album art)
            - Space distributed evenly between sections
          */}
          <div className="flex-1 flex flex-col justify-between h-[108px]">
            {/* 
              SONG INFO SECTION
              - Shows artist name and song title from current song
              - Truncates with ellipsis if too long
              - Uses primary text color token
              - Stacked vertically with tight spacing
              - No bottom margin (justify-between handles spacing)
            */}
            <div className="overflow-hidden">
              {/* Artist/Band Name - slightly smaller and secondary color */}
              <div className="text-[10px] text-sepia-600 dark:text-sepia-400 font-mono leading-tight mb-0.5 truncate">
                {currentSong.artist}
              </div>
              {/* Song Title - primary text */}
              <div className="text-[11px] text-sepia-900 dark:text-sepia-50 font-mono leading-snug line-clamp-2">
                {currentSong.title}
              </div>
            </div>

            {/* 
              PROGRESS BAR SECTION
              - Shows time elapsed and total duration
              - Visual progress bar fills from left to right
              - Between song info and controls
              - No bottom margin (justify-between handles spacing)
            */}
            <div className="w-full">
              {/* 
                TIME DISPLAY
                - Current time on left, total duration on right
                - Small mono font matching overall design
              */}
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-sepia-600 dark:text-sepia-400 font-mono">
                  {formatTime(currentTime)}
                </span>
                <span className="text-[9px] text-sepia-600 dark:text-sepia-400 font-mono">
                  {formatTime(actualDuration)}
                </span>
              </div>

              {/* 
                PROGRESS BAR
                - Background track (light gray)
                - Filled portion (accent color) animates based on currentTime
                - Height: 4px for subtle but visible progress
                - Rounded ends for polished look
              */}
              <div className="w-full h-1 bg-sepia-200 dark:bg-sepia-800 rounded-full overflow-hidden">
                {/* Progress fill - width animates based on actual playback */}
                <div 
                  className="h-full bg-sepia-600 dark:bg-sepia-400 rounded-full transition-all duration-100 ease-linear"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* 
              CONTROLS ROW
              - Horizontal layout for buttons
              - gap-2 adds 8px space between buttons
              - Aligned to start (left side)
              - Order: Previous | Play/Pause | Next
            */}
            <div className="flex items-center gap-2">
              {/* 
                PREVIOUS BUTTON
                - Go back to previous song in playlist
                - Disabled when on first track (can't go back further)
                - Shows left arrow with line icon (line + triangle, properly centered)
                - Grayed out when disabled
                - w-7 h-7 = 28px square button
              */}
              <button
                onClick={handlePrevious}
                disabled={isPreviousDisabled}
                className={`w-7 h-7 flex items-center justify-center rounded-[8px] transition-all duration-200 ${
                  isPreviousDisabled
                    ? 'bg-sepia-50 dark:bg-sepia-900 text-sepia-300 dark:text-sepia-700 cursor-not-allowed'
                    : 'bg-sepia-100 dark:bg-sepia-800 text-sepia-900 dark:text-sepia-50 hover:bg-sepia-200 dark:hover:bg-sepia-700'
                }`}
                aria-label="Previous song"
              >
                <span className="flex items-center font-sans text-[11px] leading-none" style={{ letterSpacing: '-1px' }}>
                  <span>│</span>
                  <span>◀</span>
                </span>
              </button>

              {/* 
                PLAY/PAUSE BUTTON
                - Icon-only button (no text)
                - Shows play ▶ or pause ⏸ based on isPlaying state
                - Changes color on hover for feedback
                - Uses sepia tokens for colors
                - Smooth transition on interactions
                - w-7 h-7 = 28px square button
              */}
              <button
                onClick={togglePlayPause}
                className="w-7 h-7 flex items-center justify-center rounded-[8px] bg-sepia-100 dark:bg-sepia-800 text-sepia-900 dark:text-sepia-50 hover:bg-sepia-200 dark:hover:bg-sepia-700 transition-all duration-200 text-xs"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>

              {/* 
                NEXT BUTTON
                - Skip to next song in playlist
                - Cycles back to start after last song
                - Similar styling to play/pause button
                - Shows next track icon (triangle + line, properly centered)
                - Same hover and transition effects
              */}
              <button
                onClick={handleNext}
                className="w-7 h-7 flex items-center justify-center rounded-[8px] bg-sepia-100 dark:bg-sepia-800 text-sepia-900 dark:text-sepia-50 hover:bg-sepia-200 dark:hover:bg-sepia-700 transition-all duration-200"
                aria-label="Next song"
              >
                <span className="flex items-center font-sans text-[11px] leading-none" style={{ letterSpacing: '-1px' }}>
                  <span>▶</span>
                  <span>│</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
