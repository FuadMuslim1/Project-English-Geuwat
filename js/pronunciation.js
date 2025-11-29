// Navigasi yang berfungsi untuk Pronunciation Menu (pronunciation.html)
document.addEventListener('DOMContentLoaded', () => {
    const vowelBtn = document.getElementById('btn-vowel');
    const diphthongBtn = document.getElementById('btn-diphthong');
    const consonantBtn = document.getElementById('btn-consonant');
    const exerciseBtn = document.getElementById('btn-exercise');

    if (vowelBtn) {
        vowelBtn.addEventListener('click', () => {
            // PERUBAHAN DI SINI: Mengarah ke file kategori yang baru
            window.location.href = './materials/vowel_categories.html';
        });
    }
    if (diphthongBtn) {
        diphthongBtn.addEventListener('click', () => {
            window.location.href = './materials/diphthong.html'; // Path tetap
        });
    }
    if (consonantBtn) {
        consonantBtn.addEventListener('click', () => {
            window.location.href = './materials/consonant.html'; // Path tetap
        });
    }
    if (exerciseBtn) {
        exerciseBtn.addEventListener('click', () => {
            window.location.href = './exercise/exercise-vowel.html'; // Path tetap
        });
    }
});