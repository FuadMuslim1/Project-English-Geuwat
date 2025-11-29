// js/vowel_detail.js

// Data Pronunciation untuk semua Vowel. 
// Ganti youtubeId ('...') dengan ID video YouTube yang sebenarnya
const vowelData = {
    'ʌ': {
        title: 'Lax Vowel: /ʌ/ (cup, love)',
        // YouTube ID yang sudah dikoreksi dari link: https://youtube.com/shorts/e6rjJiOxVCs
        youtubeId: 'e6rjJiOxVCs', 
        words: [
            { word: 'Up', ipa: '/ʌp/' },
            { word: 'Cup', ipa: '/kʌp/' },
            { word: 'But', ipa: '/bʌt/' },
            { word: 'Luck', ipa: '/lʌk/' },
            { word: 'Fun', ipa: '/fʌn/' },
            { word: 'Love', ipa: '/lʌv/' },
            { word: 'Come', ipa: '/kʌm/' },
            { word: 'Bus', ipa: '/bʌs/' },
            { word: 'Sun', ipa: '/sʌn/' },
            { word: 'Cut', ipa: '/kʌt/' },
            { word: 'Much', ipa: '/mʌʧ/' },
            { word: 'Us', ipa: '/ʌs/' },
            { word: 'Run', ipa: '/rʌn/' },
            { word: 'Gun', ipa: '/gʌn/' },
            { word: 'Jump', ipa: '/ʤʌmp/' },
            { word: 'Shut', ipa: '/ʃʌt/' },
            { word: 'Dust', ipa: '/dʌst/' },
            { word: 'Trust', ipa: '/trʌst/' },
            { word: 'Stuff', ipa: '/stʌf/' },
            { word: 'Dull', ipa: '/dʌl/' },
            { word: 'Ugly', ipa: '/ˈʌgli/' },
            { word: 'Uncle', ipa: '/ˈʌŋkəl/' },
            { word: 'Under', ipa: '/ˈʌndɚ/' },
            { word: 'Onion', ipa: '/ˈʌnjən/' },
            { word: 'Money', ipa: '/ˈmʌni/' },
            { word: 'Honey', ipa: '/ˈhʌni/' },
            { word: 'Cover', ipa: '/ˈkʌvɚ/' },
            { word: 'Worry', ipa: '/ˈwʌri/' },
            { word: 'Hurry', ipa: '/ˈhʌri/' },
            { word: 'Touch', ipa: '/tʌʧ/' }
        ]
    },
    'ɪ': {
        title: 'Lax Vowel: /ɪ/ (sit, fish)',
        youtubeId: 'GHIJKL67890', // Placeholder: Tunggu input ID video /ɪ/ dari Anda
        words: [
            { word: 'sit', ipa: '/sɪt/' }, { word: 'big', ipa: '/bɪg/' }, { word: 'fish', ipa: '/fɪʃ/' }, 
            { word: 'ship', ipa: '/ʃɪp/' }, { word: 'it', ipa: '/ɪt/' }, { word: 'is', ipa: '/ɪz/' },
            { word: 'in', ipa: '/ɪn/' }, { word: 'live', ipa: '/lɪv/' }, { word: 'win', ipa: '/wɪn/' }, 
            { word: 'if', ipa: '/ɪf/' }, { word: 'dinner', ipa: '/ˈdɪnɚ/' }, { word: 'milk', ipa: '/mɪlk/' }, 
            { word: 'miss', ipa: '/mɪs/' }, { word: 'listen', ipa: '/ˈlɪsən/' }, { word: 'build', ipa: '/bɪld/' },
            { word: 'busy', ipa: '/ˈbɪzi/' }, { word: 'pretty', ipa: '/ˈprɪti/' }, { word: 'women', ipa: '/ˈwɪmɪn/' }, 
            { word: 'system', ipa: '/ˈsɪstəm/' }, { word: 'city', ipa: '/ˈsɪti/' }, { word: 'village', ipa: '/ˈvɪlɪʤ/' }, 
            { word: 'image', ipa: '/ˈɪmɪʤ/' }, { word: 'mirror', ipa: '/ˈmɪrɚ/' }, { word: 'quickly', ipa: '/ˈkwɪkli/' }, 
            { word: 'minute', ipa: '/ˈmɪnɪt/' }, { word: 'business', ipa: '/ˈbɪznɪs/' }, { word: 'English', ipa: '/ˈɪŋglɪʃ/' }, 
            { word: 'ticket', ipa: '/ˈtɪkɪt/' }, { word: 'window', ipa: '/ˈwɪndoʊ/' }, { word: 'kitchen', ipa: '/ˈkɪʧɪn/' }
        ]
    },
    // Data dummy untuk simbol-simbol lainnya (Perlu Anda isi nanti)
    'ʊ': { title: 'Lax Vowel: /ʊ/ (book, put)', youtubeId: '...', words: [{word: 'book', ipa: '/bʊk/'}, {word: 'put', ipa: '/pʊt/'}, {word: 'look', ipa: '/lʊk/'}, {word: 'good', ipa: '/gʊd/'}, {word: 'woman', ipa: '/ˈwʊmən/'}, {word: 'full', ipa: '/fʊl/'}, {word: 'sugar', ipa: '/ˈʃʊgər/'}, {word: 'cushion', ipa: '/ˈkʊʃən/'}, {word: 'wolf', ipa: '/wʊlf/'}, {word: 'foot', ipa: '/fʊt/'}, {word: 'should', ipa: '/ʃʊd/'}, {word: 'could', ipa: '/kʊd/'}, {word: 'stood', ipa: '/stʊd/'}, {word: 'hood', ipa: '/hʊd/'}, {word: 'wood', ipa: '/wʊd/'}, {word: 'pudding', ipa: '/ˈpʊdɪŋ/'}, {word: 'bull', ipa: '/bʊl/'}, {word: 'push', ipa: '/pʊʃ/'}, {word: 'bush', ipa: '/bʊʃ/'}, {word: 'took', ipa: '/tʊk/'}, {word: 'cook', ipa: '/kʊk/'}, {word: 'pull', ipa: '/pʊl/'}, {word: 'soot', ipa: '/sʊt/'}, {word: 'rookie', ipa: '/ˈrʊki/'}, {word: 'cookie', ipa: '/ˈkʊki/'}, {word: 'wool', ipa: '/wʊl/'}, {word: 'hook', ipa: '/hʊk/'}, {word: 'rucksack', ipa: '/ˈrʌksæk/'}, {word: 'bullet', ipa: '/ˈbʊlɪt/'}, {word: 'butcher', ipa: '/ˈbʊʧɚ/'}] }, 
    'ɛ': { title: 'Lax Vowel: /ɛ/ (bed, ten)', youtubeId: '...', words: [{word: 'bed', ipa: '/bɛd/'}, {word: 'ten', ipa: '/tɛn/'}, {word: 'pen', ipa: '/pɛn/'}, {word: 'red', ipa: '/rɛd/'}, {word: 'get', ipa: '/gɛt/'}, {word: 'send', ipa: '/sɛnd/'}, {word: 'next', ipa: '/nɛkst/'}, {word: 'friend', ipa: '/frɛnd/'}, {word: 'said', ipa: '/sɛd/'}, {word: 'any', ipa: '/ˈɛni/'}, {word: 'many', ipa: '/ˈmɛni/'}, {word: 'heavy', ipa: '/ˈhɛvi/'}, {word: 'ready', ipa: '/ˈrɛdi/'}, {word: 'weather', ipa: '/ˈwɛðɚ/'}, {word: 'pleasure', ipa: '/ˈplɛʒɚ/'}, {word: 'measure', ipa: '/ˈmɛʒɚ/'}, {word: 'thread', ipa: '/θrɛd/'}, {word: 'head', ipa: '/hɛd/'}, {word: 'bread', ipa: '/brɛd/'}, {word: 'dead', ipa: '/dɛd/'}, {word: 'guess', ipa: '/gɛs/'}, {word: 'west', ipa: '/wɛst/'}, {word: 'best', ipa: '/bɛst/'}, {word: 'test', ipa: '/tɛst/'}, {word: 'press', ipa: '/prɛs/'}, {word: 'egg', ipa: '/ɛg/'}, {word: 'leg', ipa: '/lɛg/'}, {word: 'belt', ipa: '/bɛlt/'}, {word: 'shelf', ipa: '/ʃɛlf/'}, {word: 'twenty', ipa: '/ˈtwɛnti/'}] },
    'ə': { title: 'Lax Vowel: /ə/ (about, a)', youtubeId: '...', words: [{word: 'about', ipa: '/əˈbaʊt/'}, {word: 'ago', ipa: '/əˈgoʊ/'}, {word: 'upon', ipa: '/əˈpɑn/'}, {word: 'zebra', ipa: '/ˈzɛbrə/'}, {word: 'banana', ipa: '/bəˈnænə/'}, {word: 'teacher', ipa: '/ˈtiʧər/'}, {word: 'doctor', ipa: '/ˈdɑktər/'}, {word: 'motor', ipa: '/ˈmoʊtər/'}, {word: 'actor', ipa: '/ˈæktər/'}, {word: 'famous', ipa: '/ˈfeɪməs/'}, {word: 'courage', ipa: '/ˈkɜrɪʤ/'}, {word: 'circus', ipa: '/ˈsɜrkəs/'}, {word: 'moment', ipa: '/ˈmoʊmənt/'}, {word: 'system', ipa: '/ˈsɪstəm/'}, {word: 'problem', ipa: '/ˈprɑbləm/'}, {word: 'camera', ipa: '/ˈkæmərə/'}, {word: 'officer', ipa: '/ˈɑfɪsər/'}, {word: 'yesterday', ipa: '/ˈjɛstərdɪ/'}, {word: 'today', ipa: '/təˈdeɪ/'}, {word: 'tomorrow', ipa: '/təˈmɑroʊ/'}, {word: 'perhaps', ipa: '/pərˈhæps/'}, {word: 'suppose', ipa: '/səˈpoʊz/'}, {word: 'polite', ipa: '/pəˈlaɪt/'}, {word: 'connect', ipa: '/kəˈnɛkt/'}, {word: 'collect', ipa: '/kəˈlɛkt/'}, {word: 'success', ipa: '/səkˈsɛs/'}, {word: 'support', ipa: '/səˈpɔrt/'}, {word: 'family', ipa: '/ˈfæməli/'}, {word: 'enemy', ipa: '/ˈɛnəmi/'}, {word: 'holiday', ipa: '/ˈhɑlədeɪ/'}] },
    'ɚ': { title: 'Lax Vowel: /ɚ/ (bird, learn)', youtubeId: '...', words: [{word: 'bird', ipa: '/bɜrd/'}, {word: 'learn', ipa: '/lɜrn/'}, {word: 'first', ipa: '/fɜrst/'}, {word: 'turn', ipa: '/tɜrn/'}, {word: 'journey', ipa: '/ˈʤɜrni/'}, {word: 'early', ipa: '/ˈɜrli/'}, {word: 'world', ipa: '/wɜrld/'}, {word: 'work', ipa: '/wɜrk/'}, {word: 'nurse', ipa: '/nɜrs/'}, {word: 'girl', ipa: '/gɜrl/'}, {word: 'her', ipa: '/hɜr/'}, {word: 'term', ipa: '/tɜrm/'}, {word: 'sir', ipa: '/sɜr/'}, {word: 'certain', ipa: '/ˈsɜrtən/'}, {word: 'refer', ipa: '/rəˈfɜr/'}, {word: 'prefer', ipa: '/prɪˈfɜr/'}, {word: 'heard', ipa: '/hɜrd/'}, {word: 'worm', ipa: '/wɜrm/'}, {word: 'were', ipa: '/wɜr/'}, {word: 'verb', ipa: '/vɜrb/'}, {word: 'earth', ipa: '/ɜrθ/'}, {word: 'per', ipa: '/pɜr/'}, {word: 'further', ipa: '/ˈfɜrðər/'}, {word: 'urban', ipa: '/ˈɜrbən/'}, {word: 'curve', ipa: '/kɜrv/'}, {word: 'blur', ipa: '/blɜr/'}, {word: 'fur', ipa: '/fɜr/'}, {word: 'purge', ipa: '/pɜrʤ/'}, {word: 'curt', ipa: '/kɜrt/'}, {word: 'hurt', ipa: '/hɜrt/'}] },
    
    // Data dummy untuk simbol Tense Vowel
    'ɑ': { title: 'Tense Vowel: /ɑː/ (car, park)', youtubeId: '...', words: [{word: 'car', ipa: '/kɑr/'}, {word: 'park', ipa: '/pɑrk/'}, {word: 'start', ipa: '/stɑrt/'}, {word: 'father', ipa: '/ˈfɑðər/'}, {word: 'hard', ipa: '/hɑrd/'}, {word: 'arm', ipa: '/ɑrm/'}, {word: 'calm', ipa: '/kɑm/'}, {word: 'palm', ipa: '/pɑm/'}, {word: 'bath', ipa: '/bæθ/'}, {word: 'glass', ipa: '/glæs/'}, {word: 'fast', ipa: '/fæst/'}, {word: 'pass', ipa: '/pæs/'}, {word: 'ask', ipa: '/æsk/'}, {word: 'dance', ipa: '/dæns/'}, {word: 'after', ipa: '/ˈæftər/'}, {word: 'class', ipa: '/klæs/'}, {word: 'grass', ipa: '/græs/'}, {word: 'plant', ipa: '/plænt/'}, {word: 'branch', ipa: '/brænʧ/'}, {word: 'laugh', ipa: '/læf/'}, {word: 'half', ipa: '/hæf/'}, {word: 'command', ipa: '/kəˈmænd/'}, {word: 'staff', ipa: '/stæf/'}, {word: 'answer', ipa: '/ˈænsər/'}, {word: 'market', ipa: '/ˈmɑrkɪt/'}, {word: 'artist', ipa: '/ˈɑrtɪst/'}, {word: 'garden', ipa: '/ˈgɑrdən/'}, {word: 'dark', ipa: '/dɑrk/'}, {word: 'smart', ipa: '/smɑrt/'}, {word: 'star', ipa: '/stɑr/'}] }, 
    'i': { title: 'Tense Vowel: /iː/ (sheep, see)', youtubeId: '...', words: [{word: 'sheep', ipa: '/ʃip/'}, {word: 'see', ipa: '/si/'}, {word: 'me', ipa: '/mi/'}, {word: 'key', ipa: '/ki/'}, {word: 'feel', ipa: '/fil/'}, {word: 'keep', ipa: '/kip/'}, {word: 'green', ipa: '/grin/'}, {word: 'free', ipa: '/fri/'}, {word: 'need', ipa: '/nid/'}, {word: 'tree', ipa: '/tri/'}, {word: 'speak', ipa: '/spik/'}, {word: 'read', ipa: '/rid/'}, {word: 'leave', ipa: '/liv/'}, {word: 'team', ipa: '/tim/'}, {word: 'complete', ipa: '/kəmˈplit/'}, {word: 'meet', ipa: '/mit/'}, {word: 'believe', ipa: '/bɪˈliv/'}, {word: 'secret', ipa: '/ˈsikrət/'}, {word: 'police', ipa: '/pəˈlis/'}, {word: 'machine', ipa: '/məˈʃin/'}, {word: 'people', ipa: '/ˈpipəl/'}, {word: 'ceiling', ipa: '/ˈsilɪŋ/'}, {word: 'receive', ipa: '/rɪˈsiv/'}, {word: 'field', ipa: '/fild/'}, {word: 'piece', ipa: '/pis/'}, {word: 'chief', ipa: '/ʧif/'}, {word: 'theme', ipa: '/θim/'}, {word: 'street', ipa: '/strit/'}, {word: 'sweet', ipa: '/swit/'}, {word: 'weak', ipa: '/wik/'}] }, 
    'u': { title: 'Tense Vowel: /uː/ (food, blue)', youtubeId: '...', words: [{word: 'food', ipa: '/fud/'}, {word: 'blue', ipa: '/blu/'}, {word: 'too', ipa: '/tu/'}, {word: 'who', ipa: '/hu/'}, {word: 'move', ipa: '/muv/'}, {word: 'soon', ipa: '/sun/'}, {word: 'moon', ipa: '/mun/'}, {word: 'group', ipa: '/grup/'}, {word: 'through', ipa: '/θru/'}, {word: 'truth', ipa: '/truθ/'}, {word: 'rule', ipa: '/rul/'}, {word: 'student', ipa: '/ˈstudənt/'}, {word: 'fruit', ipa: '/frut/'}, {word: 'juice', ipa: '/ʤus/'}, {word: 'shoe', ipa: '/ʃu/'}, {word: 'two', ipa: '/tu/'}, {word: 'grew', ipa: '/gru/'}, {word: 'view', ipa: '/vju/'}, {word: 'duty', ipa: '/ˈduti/'}, {word: 'tune', ipa: '/tun/'}, {word: 'super', ipa: '/ˈsupər/'}, {word: 'music', ipa: '/ˈmju:zɪk/'}, {word: 'community', ipa: '/kəmˈjunɪti/'}, {word: 'school', ipa: '/skul/'}, {word: 'cool', ipa: '/kul/'}, {word: 'choose', ipa: '/ʧuz/'}, {word: 'lose', ipa: '/luz/'}, {word: 'tooth', ipa: '/tuθ/'}, {word: 'room', ipa: '/rum/'}, {word: 'zoom', ipa: '/zum/'}] }, 
    'æ': { title: 'Tense Vowel: /æː/ (cat, map)', youtubeId: '...', words: [{word: 'cat', ipa: '/kæt/'}, {word: 'map', ipa: '/mæp/'}, {word: 'hat', ipa: '/hæt/'}, {word: 'man', ipa: '/mæn/'}, {word: 'apple', ipa: '/ˈæpəl/'}, {word: 'back', ipa: '/bæk/'}, {word: 'hand', ipa: '/hænd/'}, {word: 'black', ipa: '/blæk/'}, {word: 'family', ipa: '/ˈfæməli/'}, {word: 'plan', ipa: '/plæn/'}, {word: 'matter', ipa: '/ˈmætər/'}, {word: 'sad', ipa: '/sæd/'}, {word: 'bad', ipa: '/bæd/'}, {word: 'happy', ipa: '/ˈhæpi/'}, {word: 'thank', ipa: '/θæŋk/'}, {word: 'can', ipa: '/kæn/'}, {word: 'have', ipa: '/hæv/'}, {word: 'am', ipa: '/æm/'}, {word: 'fat', ipa: '/fæt/'}, {word: 'lack', ipa: '/læk/'}, {word: 'cash', ipa: '/kæʃ/'}, {word: 'travel', ipa: '/ˈtrævəl/'}, {word: 'traffic', ipa: '/ˈtræfɪk/'}, {word: 'bag', ipa: '/bæg/'}, {word: 'rag', ipa: '/ræg/'}, {word: 'tap', ipa: '/tæp/'}, {word: 'pad', ipa: '/pæd/'}, {word: 'flat', ipa: '/flæt/'}, {word: 'land', ipa: '/lænd/'}, {word: 'act', ipa: '/ækt/'}] },
    'ɔ': { title: 'Tense Vowel: /ɔː/ (door, saw)', youtubeId: '...', words: [{word: 'door', ipa: '/dɔr/'}, {word: 'saw', ipa: '/sɔ/'}, {word: 'all', ipa: '/ɔl/'}, {word: 'talk', ipa: '/tɔk/'}, {word: 'walk', ipa: '/wɔk/'}, {word: 'short', ipa: '/ʃɔrt/'}, {word: 'sport', ipa: '/spɔrt/'}, {word: 'more', ipa: '/mɔr/'}, {word: 'before', ipa: '/bɪˈfɔr/'}, {word: 'four', ipa: '/fɔr/'}, {word: 'board', ipa: '/bɔrd/'}, {word: 'course', ipa: '/kɔrs/'}, {word: 'bought', ipa: '/bɔt/'}, {word: 'thought', ipa: '/θɔt/'}, {word: 'caught', ipa: '/kɔt/'}, {word: 'daughter', ipa: '/ˈdɔtər/'}, {word: 'water', ipa: '/ˈwɔtər/'}, {word: 'corner', ipa: '/ˈkɔrnər/'}, {word: 'morning', ipa: '/ˈmɔrnɪŋ/'}, {word: 'storm', ipa: '/stɔrm/'}, {word: 'law', ipa: '/lɔ/'}, {word: 'pause', ipa: '/pɔz/'}, {word: 'author', ipa: '/ˈɔθər/'}, {word: 'audience', ipa: '/ˈɔdiəns/'}, {word: 'fault', ipa: '/fɔlt/'}, {word: 'cork', ipa: '/kɔrk/'}, {word: 'horse', ipa: '/hɔrs/'}, {word: 'torn', ipa: '/tɔrn/'}, {word: 'born', ipa: '/bɔrn/'}, {word: 'warm', ipa: '/wɔrm/'}] }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil simbol dari URL (misal: ?symbol=ʌ)
    const urlParams = new URLSearchParams(window.location.search);
    const symbol = urlParams.get('symbol');
    
    // Simbol di URL harus sesuai dengan kunci di vowelData (misal: 'ʌ')
    const key = symbol.replace(/ː/g, '').replace(/\:/g, ''); // Hapus tanda panjang (ː atau :) jika ada, agar cocok dengan kunci data

    if (!key || !vowelData[key]) {
        // Handle jika simbol tidak valid
        document.getElementById('symbol-main').textContent = '/Error/';
        document.getElementById('header-title').textContent = 'Error: Simbol Tidak Ditemukan';
        return;
    }

    const data = vowelData[key];
    
    // 2. Isi konten ke dalam template
    // Tambahkan tanda panjang (ː) kembali ke tampilan jika itu Tense Vowel
    // Kita cek key-nya dan tambahkan 'ː' jika itu Tense Vowel.
    const displaySymbol = (['ɑ', 'i', 'u', 'æ', 'ɔ'].includes(key)) ? `${key}ː` : key;

    document.getElementById('page-title').textContent = data.title;
    document.getElementById('header-title').textContent = data.title;
    document.getElementById('symbol-main').textContent = `/${displaySymbol}/`;
    
    // Set YouTube Player
    const youtubePlayer = document.getElementById('youtube-player');
    youtubePlayer.src = `https://www.youtube.com/embed/${data.youtubeId}?autoplay=0&rel=0`;

    // 3. Isi daftar kata contoh (Logic menangani objek {word, ipa})
    const wordList = document.getElementById('example-word-list');
    wordList.innerHTML = ''; 
    
    // Looping data dan memasukkannya ke dalam list item dengan format vertikal
    data.words.forEach(item => {
        const listItem = document.createElement('li');
        // Menggunakan innerHTML untuk menyisipkan <span>. .word-text dan .ipa-text akan diatur di CSS
        listItem.innerHTML = `<span class="word-text">${item.word}</span><span class="ipa-text">${item.ipa}</span>`;
        wordList.appendChild(listItem);
    });
});