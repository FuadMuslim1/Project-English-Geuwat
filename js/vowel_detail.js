// File: js/vowel_detail.js

const VOWEL_DATA = {
    // Data untuk /ʌ/
    'ʌ': {
        youtube_id: "XF58n64f7M8", // ID Video YouTube untuk /ʌ/
        title: "Vowel Sound /ʌ/ - (Up, Cup, Love)",
        words: [
            { word: "Up", ipa: "/ʌp/" },
            { word: "Cup", ipa: "/kʌp/" },
            { word: "But", ipa: "/bʌt/" },
            { word: "Luck", ipa: "/lʌk/" },
            { word: "Fun", ipa: "/fʌn/" },
            { word: "Love", ipa: "/lʌv/" },
            { word: "Come", ipa: "/kʌm/" },
            { word: "Bus", ipa: "/bʌs/" },
            { word: "Sun", ipa: "/sʌn/" },
            { word: "Cut", ipa: "/kʌt/" },
            { word: "Much", ipa: "/mʌʧ/" },
            { word: "Us", ipa: "/ʌs/" },
            { word: "Run", ipa: "/rʌn/" },
            { word: "Gun", ipa: "/gʌn/" },
            { word: "Jump", ipa: "/ʤʌmp/" },
            { word: "Shut", ipa: "/ʃʌt/" },
            { word: "Dust", ipa: "/dʌst/" },
            { word: "Trust", ipa: "/trʌst/" },
            { word: "Stuff", ipa: "/stʌf/" },
            { word: "Dull", ipa: "/dʌl/" },
            { word: "Ugly", ipa: "/ˈʌgli/" },
            { word: "Uncle", ipa: "/ˈʌŋkəl/" },
            { word: "Under", ipa: "/ˈʌndɚ/" },
            { word: "Onion", ipa: "/ˈʌnjən/" },
            { word: "Money", ipa: "/ˈmʌni/" },
            { word: "Honey", ipa: "/ˈhʌni/" },
            { word: "Cover", ipa: "/ˈkʌvɚ/" },
            { word: "Worry", ipa: "/ˈwʌri/" },
            { word: "Hurry", ipa: "/ˈhʌri/" },
            { word: "Touch", ipa: "/tʌʧ/" },
        ]
    },
    // Data untuk /ɪ/
    'ɪ': {
        youtube_id: "7X_u0tB08g0", 
        title: "Vowel Sound /ɪ/ - (Sit, Fish, Big)",
        words: [
            // Tambahkan 30 kata untuk simbol /ɪ/ di sini
            { word: "Sit", ipa: "/sɪt/" },
            { word: "Fish", ipa: "/fɪʃ/" },
            { word: "Big", ipa: "/bɪg/" },
            { word: "Hit", ipa: "/hɪt/" },
            { word: "Ship", ipa: "/ʃɪp/" },
            { word: "Thin", ipa: "/θɪn/" },
            { word: "Fill", ipa: "/fɪl/" },
            { word: "Listen", ipa: "/ˈlɪsən/" },
            { word: "Miss", ipa: "/mɪs/" },
            { word: "King", ipa: "/kɪŋ/" },
            { word: "Quick", ipa: "/kwɪk/" },
            { word: "With", ipa: "/wɪð/" },
            { word: "Live", ipa: "/lɪv/" },
            { word: "Dinner", ipa: "/ˈdɪnər/" },
            { word: "System", ipa: "/ˈsɪstəm/" },
            { word: "Image", ipa: "/ˈɪmɪʤ/" },
            { word: "Give", ipa: "/gɪv/" },
            { word: "Think", ipa: "/θɪŋk/" },
            { word: "Trip", ipa: "/trɪp/" },
            { word: "Rich", ipa: "/rɪʧ/" },
            { word: "City", ipa: "/ˈsɪti/" },
            { word: "Window", ipa: "/ˈwɪndoʊ/" },
            { word: "Swim", ipa: "/swɪm/" },
            { word: "Milk", ipa: "/mɪlk/" },
            { word: "Business", ipa: "/ˈbɪznəs/" },
            { word: "Minute", ipa: "/ˈmɪnɪt/" },
            { word: "English", ipa: "/ˈɪŋglɪʃ/" },
            { word: "Limit", ipa: "/ˈlɪmɪt/" },
            { word: "Difficult", ipa: "/ˈdɪfɪkəlt/" },
            { word: "Village", ipa: "/ˈvɪlɪʤ/" },
        ]
    }
    // ... (lanjutkan simbol lainnya) ...
};


// PENTING: Gunakan 'export' agar fungsi dapat di-import di file HTML
export function loadVowelDetail(symbol) {
    const data = VOWEL_DATA[symbol];
    if (!data) {
        console.error(`Data for symbol ${symbol} not found.`);
        document.getElementById('symbol-title').textContent = `Simbol ${symbol} tidak ditemukan`;
        return;
    }

    // 1. Update Judul (Hanya untuk document title tab browser)
    const siteName = " - Learning English Geuwat";
    document.title = data.title + siteName;

    // 2. Update YouTube Player
    const player = document.getElementById('youtube-player');
    player.src = `https://www.youtube.com/embed/${data.youtube_id}`;

    // 3. Update Daftar Kata
    const wordListContainer = document.getElementById('word-list-container');
    wordListContainer.innerHTML = ''; // Kosongkan container

    // Perhatikan struktur yang akan dimasukkan ke word-list-grid di HTML
    const listHtml = data.words.map(item => `
        <div class="word-item">
            <span class="word">${item.word}</span>
            <span class="ipa">${item.ipa}</span>
        </div>
    `).join('');
    
    // Grid 3 kolom dibuat di sini
    wordListContainer.innerHTML = `<div class="word-list-grid">${listHtml}</div>`;
}