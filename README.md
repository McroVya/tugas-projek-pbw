@'# Sistem Informasi Peminjaman Barang & Inventaris Kampus

## 1. Deskripsi Singkat & Latar Belakang Masalah
Aplikasi berbasis web yang dirancang untuk membantu pengelolaan peminjaman barang inventaris kampus atau organisasi (seperti proyektor, laptop, kamera, dan alat laboratorium).

*Permasalahan yang diselesaikan:*
- Pencatatan peminjaman barang sebelumnya masih dilakukan secara manual (risiko data hilang atau tercatat ganda).
- Status ketersediaan barang (tersedia atau sedang dipinjam) sulit dipantau secara real-time.
- Riwayat transaksi peminjaman tidak terdokumentasi dengan baik.
- Admin membutuhkan sistem manajemen data inventaris yang terpusat dan mudah dikelola.

## 2. Target Pengguna Aplikasi
- *Admin:* Bertanggung jawab penuh dalam mengelola data master (kategori, barang, pengguna/peminjam) serta memverifikasi status dan riwayat peminjaman.
- *Peminjam (Mahasiswa/Petugas):* Pengguna yang dapat masuk ke sistem untuk melihat ketersediaan inventaris serta mengajukan permohonan peminjaman barang.

## 3. Fitur Utama
- *Autentikasi:* Sistem Login, Logout, dan Manajemen Sesi (Session).
- *Dashboard Admin:* Menampilkan ringkasan statistik (jumlah total barang, barang tersedia, barang dipinjam, dan total transaksi).
- *Manajemen Kategori:* Kelola kategori inventaris barang.
- *Kelola Data Barang:* Tambah, edit, hapus, dan lihat detail inventaris.
- *Kelola Peminjaman:* Pencatatan dan pembaruan status peminjaman (Menunggu, Dipinjam, Dikembalikan, Dibatalkan).
- *Antarmuka Interaktif:* Tabel daftar data dengan dukungan pencarian/filter dan pagination menggunakan jQuery AJAX, serta penunjuk waktu (Real-time Clock) menggunakan JavaScript.

## 4. Tautan Wireframe & Desain UI
Rancangan antarmuka (wireframe) untuk halaman Login, Pendaftaran, Dashboard, Daftar Data, dan Form telah disiapkan melalui tautan berikut:
- [Tautan Canva Wireframe & Desain UI](https://www.canva.com/design/DAHYFneNfec/gcu8BCvlcrvVEZXzo4-0wA/edit)
- [Tautan Alternatif Canva (View Link)](https://canva.link/hazrtb1yep7jh46)

## 5. Struktur Folder Awal Repository
```text
├── assets/             # Folder aset pendukung (CSS, JS, Gambar/Icon)
├── config/             # Konfigurasi koneksi database dan session
├── includes/           # Komponen modular (Header, Sidebar, Footer)
├── uploads/            # Direktori penyimpanan foto barang (fitur opsional)
├── index.php / login.html # Halaman utama / masuk
├── dashboard.php       # Halaman dashboard admin
└── README.md           # Dokumentasi proyek
