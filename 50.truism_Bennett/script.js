/* 
====================================================
 Video Switcher Script (with delayed unmute)
====================================================
 - Plays one of two videos full-screen.
 - Starts muted so autoplay works.
 - On first click:
     → Unmutes video playback.
     → Switches to the other video.
 - Each video remembers its last position.
 - The text box stays visible at all times.
====================================================
*/

// Get references to DOM elements
const videoPlayer = document.getElementById('videoPlayer');
const textBox = document.getElementById('textBox');

// Store playback positions for both videos
let positions = {
    video01: 0,
    video02: 0
};

// Keep track of which video is currently playing
let currentVideo = 'video01';

// Track whether we've already unmuted
let hasUnmuted = false;

// Function to switch videos
function switchVideo() {
    // If this is the first click, unmute both videos
    if (!hasUnmuted) {
        videoPlayer.muted = false; // Unmute current video
        hasUnmuted = true;
    }

    // Save the current playback position
    positions[currentVideo] = videoPlayer.currentTime;

    // Determine which video to switch to
    if (currentVideo === 'video01') {
        currentVideo = 'video02';
        videoPlayer.src = 'videos/crackedWindow.mp4';
    } else {
        currentVideo = 'video01';
        videoPlayer.src = 'videos/graf_Pan.mp4';   
    }

    // When the new video is ready, seek to its last saved position
    videoPlayer.addEventListener('loadedmetadata', () => {
        const newTime = positions[currentVideo] || 0;
        videoPlayer.currentTime = newTime;

        // Keep unmuted after first click
        if (hasUnmuted) videoPlayer.muted = false;

        videoPlayer.play();
    }, { once: true });
}

// Attach click event to the text box
textBox.addEventListener('click', switchVideo);
