# Sistem Informasi Peminjaman Barang Inventaris

## 1. Latar Belakang Masalah & Manfaat Aplikasi
### Latar Belakang Masalah
Proses pencatatan peminjaman dan pengembalian barang inventaris saat ini masih dilakukan secara manual menggunakan buku log petugas. Cara konvensional ini menimbulkan beberapa kendala, seperti sulitnya melacak status ketersediaan barang secara cepat, rawan hilangnya riwayat peminjaman, serta kesulitan dalam memantau daftar peminjam yang melewati batas waktu pengembalian.

### Manfaat Aplikasi
- Mempermudah petugas dalam mencatat dan melacak transaksi peminjaman serta pengembalian barang secara terpusat.
- Mempercepat pengecekan status ketersediaan barang inventaris secara real-time.
- Mencegah hilangnya data riwayat peminjaman dan memudahkan pemantauan keterlambatan pengembalian.

## 2. Target Pengguna dan Kebutuhan Pengguna
### PETUGAS / ADMIN
- Membutuhkan halaman login untuk mengamankan akses pengelolaan data.
- Membutuhkan ringkasan statistik di halaman dashboard (total barang/buku, sedang dipinjam, tersedia, dan terlambat kembali).
- Membutuhkan fitur untuk menambah, mengubah, melihat, dan menghapus data peminjaman serta data inventaris.

### MAHASISWA
- Membutuhkan informasi yang jelas mengenai ketersediaan barang/buku yang dapat dipinjam.
- Membutuhkan pencatatan tanggal pinjam dan batas tanggal kembali yang transparan.

## 3. Daftar Fitur Utama
1. Autentikasi Pengguna (Login & Logout): Membatasi akses sistem hanya untuk petugas/pengguna terdaftar.
2. Dashboard: Menampilkan informasi cepat jumlah total koleksi/barang, jumlah transaksi peminjaman aktif, dan jumlah pengembalian selesai.
3. Manajemen Daftar Data Peminjaman: Menampilkan tabel daftar peminjaman lengkap dengan fitur pencarian, filter status (Dipinjam/Dikembalikan), serta tombol aksi ubah dan hapus.
4. Form Transaksi Peminjaman & Pengembalian: Formulir untuk menginput data peminjam baru, memilih barang/buku yang dipinjam, menentukan tanggal pinjam/kembali, serta memperbarui status pengembalian.

## 4. Wireframe Halaman Inti
- Tautan Wireframe Canva: https://canva.link/hazrtb1yep7jh46

## 5. Struktur Folder Awal
- /asset : Menyimpan file aset gambar, ikon, dan styling.
- /docs  : Menyimpan dokumentasi dan tautan rancangan wireframe.
- /src   : Menyimpan source code utama aplikasi.
