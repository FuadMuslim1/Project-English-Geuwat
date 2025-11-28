// js/auth.js

import { goBack, logout } from './router.js'; // Import sekarang berhasil

// Fungsi logout global yang akan dipanggil dari tombol di HTML
window.logout = function() {
    localStorage.clear();
    // Sesuaikan path ke login.html, karena auth.js di folder js/
    window.location.href = "../login.html"; 
};

/**
 * Handles the login process.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {Promise<boolean>} - True if login is successful.
 */
export async function handleLogin(email, password) {
    try {
        // Ambil data dari users.json
        const response = await fetch('./data/users.json');
        const users = await response.json();

        // Cari pengguna dengan email dan password yang cocok
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Login Berhasil: Simpan status login & Redirect
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html'; // Pindah ke Main Menu
            return true;
        } else {
            // Login Gagal
            localStorage.setItem('isLoggedIn', 'false');
            return false;
        }
    } catch (error) {
        console.error('Error fetching users data:', error);
        return false;
    }
}
