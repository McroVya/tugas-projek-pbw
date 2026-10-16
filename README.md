 # Sistem Informasi Peminjaman Barang & Inventaris Kampus

## 1. Deskripsi Singkat & Latar Belakang Masalah
Aplikasi berbasis web yang dirancang untuk membantu pengelolaan peminjaman barang inventaris kampus atau organisasi (seperti proyektor, laptop, kamera, dan alat laboratorium lainnya).

*Permasalahan yang diselesaikan:*
- Status ketersediaan barang (tersedia atau sedang dipinjam) sulit dipantau secara real-time karena masih dipantau secara offline.
- Riwayat transaksi peminjaman tidak terdokumentasi dengan baik (banyaknya kelalaian yang diakibatkan oleh administrator).
- Admin membutuhkan sistem manajemen data inventaris yang terpusat dan mudah dikelola.

## 2. Target Pengguna Aplikasi
- Admin: Bertanggung jawab penuh dalam mengelola data master (kategori, barang, pengguna/peminjam) serta memverifikasi status dan riwayat peminjaman.
- Peminjam (Mahasiswa/Petugas): Pengguna yang dapat masuk ke sistem untuk melihat ketersediaan inventaris serta mengajukan permohonan peminjaman barang.

## 3. Fitur Utama
- Autentikasi: Sistem Login, Logout, dan Manajemen Sesi.
- Dashboard Admin: Menampilkan ringkasan statistik (jumlah total barang, barang tersedia, barang dipinjam, dan total transaksi).
- Manajemen Kategori: Kelola kategori inventaris barang.
- Kelola Data Barang: Tambah, edit, hapus, dan lihat detail inventaris.
- Kelola Peminjaman: Pencatatan dan pembaruan status peminjaman (Menunggu, Dipinjam, Dikembalikan, Dibatalkan).
- Antarmuka Interaktif: Tabel daftar data dengan dukungan pencarian/filter dan pagination menggunakan jQuery AJAX, serta penunjuk waktu menggunakan JavaScript.

## 4. Tautan Wireframe & Desain UI
Rancangan antarmuka (wireframe) untuk halaman Login, Pendaftaran, Dashboard, Daftar Data, dan Form telah disiapkan melalui tautan berikut:
- [Tautan Canva Wireframe & Desain UI](https://www.canva.com/design/DAHYFneNfec/gcu8BCvlcrvVEZXzo4-0wA/edit)

## 5. Struktur Folder Awal Repository
├── assets/           
├── config/      
├── includes/     
├── uploads/           
├── README.md   
├── dashboard.php
├── index.php
└── wireframe.md      
