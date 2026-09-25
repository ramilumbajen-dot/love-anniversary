// Extra interactive surprises and the requested YouTube song.
const youtubePlay = document.getElementById('youtubePlay');
const youtubePlayer = document.getElementById('youtubePlayer');
let songPlaying = false;
youtubePlay.addEventListener('click', () => {
  songPlaying = !songPlaying;
  youtubePlayer.contentWindow.postMessage(JSON.stringify({ event: 'command', func: songPlaying ? 'playVideo' : 'pauseVideo', args: [] }), '*');
  youtubePlay.textContent = songPlaying ? 'pause our song ♫' : 'play our song ♫';
});
const surprises = {
  wish: 'Close your eyes and make a wish. Mine already came true when I found you. ✨',
  reasons: 'I love your heart, your smile, your effort, your patience, and the way you make ordinary moments feel special. 💜',
  kiss: 'Mwaaaaa! A pocketful of kisses is flying to you right now. 💋💋💋'
};
document.querySelectorAll('.surprise-btn').forEach(button => button.addEventListener('click', () => {
  document.getElementById('surpriseResult').textContent = surprises[button.dataset.surprise];
  if (typeof hearts === 'function') hearts(20);
}));
const startDate = new Date('2024-09-25T00:00:00');
const days = Math.max(0, Math.floor((Date.now() - startDate) / 86400000));
document.querySelector('#loveCounter span').textContent = `${days.toLocaleString()} beautiful days together and counting ♡`;
