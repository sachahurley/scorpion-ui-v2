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
 * - Width: 340px fixed (wider landscape format)
 * - Height: 130px fixed (accommodates progress bar)
 * - Position: 24px from bottom, 24px from right
 * 
 * LAYOUT:
 * - Left: Album cover thumbnail (120px landscape, rounded)
 * - Right: Song info (artist + title) + controls stacked vertically
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

// Demo playlist with real album cover images, durations, and audio files
// Using free public domain audio from Internet Archive
const DEMO_PLAYLIST: Song[] = [
  {
    id: 1,
    artist: "Roy Orbison",
    title: "Oh, Pretty Woman",
    albumCover: "https://upload.wikimedia.org/wikipedia/en/8/89/Royorbisonohprettywoman.jpg",
    duration: 178 // 2:58
  },
  {
    id: 2,
    artist: "Roy Orbison",
    title: "Crying",
    albumCover: "https://upload.wikimedia.org/wikipedia/en/4/4f/Roy_Orbison_-_Crying.jpg",
    duration: 163 // 2:43
  },
  {
    id: 3,
    artist: "Roy Orbison",
    title: "Only the Lonely",
    albumCover: "https://upload.wikimedia.org/wikipedia/en/3/3c/Only_the_Lonely_-_Roy_Orbison.jpg",
    duration: 142 // 2:22
  },
  {
    id: 4,
    artist: "Roy Orbison",
    title: "In Dreams",
    albumCover: "https://upload.wikimedia.org/wikipedia/en/a/a9/Roy_Orbison_-_In_Dreams.png",
    duration: 170 // 2:50
  },
  {
    id: 5,
    artist: "Roy Orbison",
    title: "You Got It",
    albumCover: "https://upload.wikimedia.org/wikipedia/en/9/91/Roy_Orbison_-_You_Got_It.jpg",
    duration: 206 // 3:26
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
    if (!audioRef.current) return;

    if (isPlaying) {
      // Play the audio
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
        // If autoplay is blocked, reset playing state
        setIsPlaying(false);
      });
    } else {
      // Pause the audio
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

  /**
   * Toggle between play and pause
   * Controls the actual HTML5 audio element
   */
  const togglePlayPause = () => {
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

  return (
    <>
      {/* 
        HIDDEN AUDIO ELEMENT
        - HTML5 audio for actual music playback
        - Controlled by our UI buttons
        - Note: For demo, using a single public domain audio file
        - In production, each song would have its own audio file
      */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
        // Using a royalty-free demo track from Free Music Archive
        // In production, you'd use actual song URLs
        src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3"
      />
      
      <div
        className="fixed bottom-6 right-6 w-[340px] h-[130px] bg-[var(--surface-card)] rounded-[24px] overflow-hidden z-40"
        style={{
          boxShadow: 'var(--elevation-1-shadow)',
          border: '0.5px solid var(--elevation-1-border)'
        }}
      >
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
            - Square format (82px to fit new height with padding)
            - Rounded corners (12px)
            - Background color while loading
            - Cover fit to fill container (crops to fit)
          */}
          <div className="w-[82px] h-[82px] flex-shrink-0">
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
            - Vertically stacked layout (flex-col)
            - Takes remaining space
            - Space distributed: title, progress bar, controls
          */}
          <div className="flex-1 flex flex-col">
            {/* 
              SONG INFO SECTION
              - Shows artist name and song title from current song
              - Truncates with ellipsis if too long
              - Uses primary text color token
              - Stacked vertically with tight spacing
            */}
            <div className="overflow-hidden mb-2">
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
            */}
            <div className="w-full mb-2">
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
            */}
            <div className="flex items-center gap-2">
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
                - Shows next track icon ⏭
                - Same hover and transition effects
              */}
              <button
                onClick={handleNext}
                className="w-7 h-7 flex items-center justify-center rounded-[8px] bg-sepia-100 dark:bg-sepia-800 text-sepia-900 dark:text-sepia-50 hover:bg-sepia-200 dark:hover:bg-sepia-700 transition-all duration-200 text-xs"
                aria-label="Next song"
              >
                ⏭
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
