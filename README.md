# ProofyLink.ai Documentation

Ini adalah repositori untuk situs dokumentasi **ProofyLink.ai**, yang dibuat menggunakan [Docusaurus](https://docusaurus.io/).

## Tentang ProofyLink.ai

**ProofyLink.ai** adalah platform yang menyediakan standardisasi kepercayaan baru untuk era digital. Dokumentasi ini mencakup semua yang perlu Anda ketahui untuk menggunakan layanan kami, mulai dari panduan pengguna, dokumentasi enterprise, hingga referensi API untuk developer.

## Struktur Repositori

-   `/docs`: Berisi semua file Markdown untuk dokumentasi.
-   `/src`: Berisi komponen React kustom dan halaman untuk situs Docusaurus.
-   `/static`: Berisi aset statis seperti gambar.
-   `docusaurus.config.ts`: File konfigurasi utama untuk situs Docusaurus.
-   `sidebars.ts`: Mendefinisikan struktur sidebar untuk dokumentasi.

## Cara Menjalankan Project Secara Lokal

### 1. Prasyarat

Pastikan Anda memiliki [Node.js](https://nodejs.org/en/) versi 20.0 atau lebih tinggi.

### 2. Install Dependencies

Silahkan jalankan perintah berikut untuk menginstall semua dependencies yang dibutuhkan:

```bash
npm install
```

### 3. Jalankan Development Server

Untuk menjalankan project dalam mode development, jalankan perintah:

```bash
npm start
```

Perintah ini akan memulai server development lokal dan membuka jendela browser. Sebagian besar perubahan akan terlihat secara langsung tanpa perlu me-restart server.

### 4. Build Project

Untuk membuat build produksi statis, jalankan perintah:

```bash
npm run build
```

Perintah ini akan menghasilkan konten statis ke dalam direktori `build` dan dapat di-hosting di layanan hosting web apa pun.

### 5. Menjalankan Build Produksi Secara Lokal

Jika Anda ingin mencoba build produksi secara lokal, jalankan perintah berikut setelah proses build selesai:

```bash
npm run serve
```
