// 🎧 Spotify Clone Main Script

const playButton = document.getElementById('music-player');
const audio = document.getElementById('audio');
const progressBar = document.querySelector('.progress-bar');
const currTime = document.querySelector('.curr-time');
const totalTime = document.querySelector('.tot-time');
let isPlaying = false;

// Update total duration when metadata loads
audio.addEventListener('loadedmetadata', () => {
  totalTime.textContent = formatTime(audio.duration);
});

// Play/Pause logic
playButton.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    playButton.src = "./Assets/pause_icon.png";
    isPlaying = true;
  } else {
    audio.pause();
    playButton.src = "./Assets/player_icon3.png";
    isPlaying = false;
  }
});

// Update progress bar and current time
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  currTime.textContent = formatTime(audio.currentTime);
});

// Allow user to seek
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Format seconds → mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}
