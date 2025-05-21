window.addEventListener('DOMContentLoaded', () => {
  const bgAudio = document.getElementById('bg-audio');
  const videos = document.querySelectorAll('video:not(.bg-video)');

  bgAudio.play().catch(() => console.warn("Autoplay blocked"));

  videos.forEach(video => {
    video.addEventListener('play', () => bgAudio.pause());
    video.addEventListener('pause', () => bgAudio.play().catch(() => {}));
    video.addEventListener('ended', () => bgAudio.play().catch(() => {}));
  });
});

function showPreview(event) {
  const file = event.target.files[0];
  if (file) {
    const preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(file);
    preview.classList.remove("hidden");
  }
}
