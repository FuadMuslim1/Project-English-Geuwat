// File: js/symbol_interaction.js

// ---- Modal controls ----
const modal = document.getElementById('videoModal');
const openBtn = document.getElementById('openVideo');
const closeBtn = document.getElementById('closeVideo');
const playBtn = document.getElementById('playNow');
const pauseBtn = document.getElementById('pauseNow');

// Menggunakan fungsi BACK dan LOGOUT (harus tersedia di window scope)
function goBack() { window.history.back(); }
function logout() { console.log('Logout executed'); /* Tambahkan logika logout Anda di sini */ } 


openBtn.addEventListener('click', () => {
  modal.hidden = false;
  if (player && player.seekTo) {
    player.seekTo(0);
  }
  // make sure player (under header) is visible to the user
  try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  resetTriggers(); // Reset trigger saat modal dibuka
});
closeBtn.addEventListener('click', () => {
  modal.hidden = true;
  if (player && player.pauseVideo) player.pauseVideo();
  clearActive();
  resetTriggers(); // Reset trigger saat modal ditutup
});
playBtn.addEventListener('click', () => player && player.playVideo && player.playVideo());
pauseBtn.addEventListener('click', () => player && player.pauseVideo && player.pauseVideo());


// ---- Tambahan: Menu Toggle Logic ----
const menuToggle = document.getElementById('websiteTitle');
const mainMenu = document.getElementById('mainMenu');

if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
        mainMenu.classList.toggle('hidden');
    });

    // Menutup menu jika user mengklik di luar area menu/header
    document.addEventListener('click', (e) => {
        const header = document.querySelector('header');
        if (header) {
            const isClickInsideHeader = header.contains(e.target);
            if (!isClickInsideHeader && !mainMenu.classList.contains('hidden')) {
                mainMenu.classList.add('hidden');
            }
        }
    });
}
// ------------------------------------


// ---- Highlight logic ----
const cards = Array.from(document.querySelectorAll('.word-card'));

// Waktu cue (dalam detik) ketika setiap kata dimulai di video /ʌ/.
// ⚠️ SESUAIKAN JIKA VIDEO BERBEDA ⚠️
const cueTimes = [
  0.5, 1.3, 2.1, 2.9, 3.7, 4.5, 5.3, 6.1, 6.9, 7.7,
  8.5, 9.3, 10.1, 10.9, 11.7, 12.5, 13.3, 14.1, 14.9, 15.7,
  16.5, 17.3, 18.1, 18.9, 19.7, 20.5, 21.3, 22.1, 22.9, 23.7 
];
const wordTexts = [
  "Up", "Cup", "But", "Luck", "Fun", "Love", "Come", "Bus", "Sun", "Cut", 
  "Much", "Us", "Run", "Gun", "Jump", "Shut", "Dust", "Trust", "Stuff", "Dull", 
  "Ugly", "Uncle", "Under", "Onion", "Money", "Honey", "Cover", "Worry", "Hurry", "Touch"
];

let currentIndex = -1;
function setActive(index) {
  if (index === currentIndex) return;
  clearActive();
  if (index >= 0 && index < cards.length) {
    currentIndex = index;
    cards[index].classList.add('active');
  }
}
function clearActive() {
  cards.forEach(card => card.classList.remove('active'));
  currentIndex = -1;
}

// ---- Autoscroll triggers ----
// Peta waktu untuk kata yang akan memicu autoscroll.
// ⚠️ SESUAIKAN JIKA VIDEO BERBEDA ⚠️
const timeTriggers = [
  { time: 0.5, word: 'Up' },
  { time: 6.9, word: 'Sun' },
  { time: 13.3, word: 'Dust' },
  { time: 19.7, word: 'Money' },
  { time: 22.9, word: 'Hurry' }
];
const triggered = new Set();

function resetTriggers() {
  triggered.clear();
}

function scrollToWordByText(word) {
  const el = Array.from(document.querySelectorAll('.word-card .word'))
    .find(p => p.textContent.trim().toLowerCase() === word.toLowerCase());
  if (!el) return;
  const card = el.closest('.word-card');
  const playerContent = document.querySelector('.player-content');
  const header = document.querySelector('header');
  const elementAbsoluteTop = el.getBoundingClientRect().top + window.scrollY;
  
  if (playerContent && !document.getElementById('videoModal').hidden) {
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const playerHeight = playerContent.getBoundingClientRect().height;
    const gap = 18; 
    const scrollTarget = Math.max(0, elementAbsoluteTop - (headerHeight + playerHeight + gap));
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  } else {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ---- YouTube IFrame API ----
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytPlayer', {
    videoId: 'XF58n64f7M8', // ID Video Shorts untuk /ʌ/
    playerVars: {
      modestbranding: 1,
      rel: 0,
      playsinline: 1
    },
    events: {
      onReady: () => {
        if (!modal.hidden) player.playVideo();
        startTick();
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) {
          clearActive();
          resetTriggers();
        }
      }
    }
  });
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady; // Expose to global scope

// ---- Time-based ticker to update highlights ----
let tickId = null;
function startTick() {
  if (tickId) return;
  tickId = setInterval(() => {
    if (!player || typeof player.getCurrentTime !== 'function') return;
    const t = player.getCurrentTime();
    
    // 1. Time-triggered Autoscroll & Explicit Highlights
    for (const trig of timeTriggers) {
      if (t >= trig.time && !triggered.has(trig.time)) {
        triggered.add(trig.time);
        scrollToWordByText(trig.word);
        
        // Tambahkan highlight visual singkat untuk kata yang di-scroll-to
        const el = Array.from(document.querySelectorAll('.word-card .word'))
          .find(p => p.textContent.trim().toLowerCase() === trig.word.toLowerCase());
        if (el) {
          const card = el.closest('.word-card');
          clearActive(); 
          card.classList.add('active'); 
          setTimeout(() => {
            if (card) card.classList.remove('active');
          }, 2000); // Highlight selama 2 detik
        }
      }
    }
    
    // 2. Standard Highlight based on cueTimes
    for (let i = 0; i < cueTimes.length; i++) {
        const start = cueTimes[i];
        const end = cueTimes[i + 1] || t + 10; // Cukup lama untuk kata terakhir

        if (t >= start && t < end) {
            setActive(i);
            break;
        }
    }

  }, 100); // update 10 times per second
}

window.addEventListener('beforeunload', () => {
  if (tickId) clearInterval(tickId);
});

// Pastikan fungsi navigasi tersedia secara global (Jika tidak diimport dari file lain)
window.goBack = goBack; 
window.logout = logout;