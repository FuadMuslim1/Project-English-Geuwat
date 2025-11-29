// js/auth.js

// Import fungsi dari router.js (tetap dipertahankan)
import { goBack, logout } from './router.js'; 

// 1. Definisikan goBack secara global agar bisa diakses oleh onclick di HTML
window.goBack = goBack; 

// 2. Definisikan logout secara global
window.logout = function() {
    localStorage.clear();
    // Path absolute yang stabil
    window.location.href = "/Git/login.html"; 
};

/**
 * Handles the login process.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {Promise<boolean>} - True if login is successful.
 */
export async function handleLogin(email, password) {
    try {
        const response = await fetch('./data/users.json');
        const users = await response.json();

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html'; 
            return true;
        } else {
            localStorage.setItem('isLoggedIn', 'false');
            return false;
        }
    } catch (error) {
        console.error('Error fetching users data:', error);
        return false;
    }
}

// =========================================================
// START: LOGIKA SHOW PASSWORD
// =========================================================

// Pastikan script dijalankan setelah DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded in auth.js"); // Debugging: pastikan ini muncul di konsol

    const passwordInput = document.getElementById('password');
    const showPasswordToggle = document.getElementById('showPasswordToggle');

    console.log("Password Input Element:", passwordInput); // Debugging: cek apakah elemen ditemukan
    console.log("Show Password Toggle Element:", showPasswordToggle); // Debugging: cek apakah elemen ditemukan

    // Hanya tambahkan event listener jika kedua elemen ditemukan
    if (passwordInput && showPasswordToggle) {
        console.log("Elements found, attaching event listener."); // Debugging: pastikan ini muncul

        // Tambahkan event listener saat checkbox diubah
        showPasswordToggle.addEventListener('change', function() {
            console.log("Checkbox change detected. Is checked:", this.checked); // Debugging: cek status checkbox
            // Jika checkbox dicentang, ubah tipe input menjadi 'text'
            if (this.checked) {
                passwordInput.type = 'text';
                console.log("Password input type changed to 'text'.");
            } else {
                // Jika tidak dicentang, kembalikan tipe input menjadi 'password'
                passwordInput.type = 'password';
                console.log("Password input type changed to 'password'.");
            }
        });

        // Debugging: Cek status awal saat halaman dimuat
        // if (showPasswordToggle.checked) {
        //     passwordInput.type = 'text';
        //     console.log("Initial state: Checkbox is checked, password input type set to 'text'.");
        // }
    } else {
        console.error("ERROR: One or both elements (passwordInput or showPasswordToggle) not found.");
    }
});

// =========================================================
// END: LOGIKA SHOW PASSWORD
// =========================================================