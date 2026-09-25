// Extra interactive surprises, music, memories, and voice-message feature.
const youtubePlay = document.getElementById('youtubePlay');
const youtubePlayer = document.getElementById('youtubePlayer');
let songPlaying = false;
if (youtubePlay && youtubePlayer) {
  youtubePlay.addEventListener('click', () => {
    songPlaying = !songPlaying;
    youtubePlayer.contentWindow.postMessage(JSON.stringify({ event: 'command', func: songPlaying ? 'playVideo' : 'pauseVideo', args: [] }), '*');
    youtubePlay.textContent = songPlaying ? 'pause our song ♫' : 'play our song ♫';
  });
}

const surprises = {
  wish: 'Close your eyes and make a wish. Mine already came true when I found you. ✨',
  reasons: 'I love your heart, your smile, your effort, your patience, and the way you make ordinary moments feel special. 💜',
  kiss: 'Mwaaaaa! A pocketful of kisses is flying to you right now. 💋💋💋'
};
document.querySelectorAll('.surprise-btn').forEach(button => button.addEventListener('click', () => {
  document.getElementById('surpriseResult').textContent = surprises[button.dataset.surprise];
  if (typeof hearts === 'function') hearts(20);
}));

document.querySelectorAll('.memory-card').forEach(card => card.addEventListener('click', () => {
  document.getElementById('lightboxImage').src = card.dataset.photo;
  document.getElementById('photoLightbox').classList.add('show');
}));
const closePhoto = document.getElementById('closePhoto');
if (closePhoto) closePhoto.addEventListener('click', () => document.getElementById('photoLightbox').classList.remove('show'));
const photoLightbox = document.getElementById('photoLightbox');
if (photoLightbox) photoLightbox.addEventListener('click', event => { if (event.target.id === 'photoLightbox') event.currentTarget.classList.remove('show'); });

const startDate = new Date('2024-09-25T00:00:00');
const days = Math.max(0, Math.floor((Date.now() - startDate) / 86400000));
const loveCounter = document.querySelector('#loveCounter span');
if (loveCounter) loveCounter.textContent = `${days.toLocaleString()} beautiful days together and counting ♡`;

// Voice message: upload your phone recording as assets/voice-message.mp3.
// A file input is included so the page can also preview a recording selected on a phone.
const voiceCard = document.createElement('section');
voiceCard.className = 'voice-card';
voiceCard.innerHTML = `
  <div class="voice-icon">🎙️</div>
  <div class="voice-copy"><p class="eyebrow">a message from my voice</p><h2>Press play when you miss me</h2><p>Your special voice message is waiting here, langga. 💜</p></div>
  <audio id="voiceMessage" controls preload="metadata"><source src="assets/voice-message.mp3" type="audio/mpeg">Your browser does not support audio playback.</audio>
  <label class="voice-upload" for="voiceUpload">preview a recording from this phone</label>
  <input id="voiceUpload" type="file" accept="audio/*" hidden>
  <p class="voice-status" id="voiceStatus">Upload your recording to the repository as <b>assets/voice-message.mp3</b> to make it permanent.</p>`;
const qrCard = document.querySelector('.qr-card');
if (qrCard) qrCard.parentNode.insertBefore(voiceCard, qrCard);
const voiceMessage = document.getElementById('voiceMessage');
const voiceUpload = document.getElementById('voiceUpload');
const voiceStatus = document.getElementById('voiceStatus');
if (voiceUpload) voiceUpload.addEventListener('change', event => {
  const file = event.target.files[0];
  if (!file) return;
  if (voiceMessage.src) URL.revokeObjectURL(voiceMessage.src);
  voiceMessage.src = URL.createObjectURL(file);
  voiceMessage.load();
  voiceStatus.textContent = `Now previewing “${file.name}” on this device. Upload it to assets/voice-message.mp3 to share it with everyone.`;
});
