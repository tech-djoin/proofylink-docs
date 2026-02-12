---
sidebar_position: 1
---

# Tentang Proofylink

Selamat datang di dokumentasi resmi **ProofyLink**.

**ProofyLink** adalah platform berbasis web untuk bisnis yang ingin melakukan pengecekan individu secara cepat dan aman—agar pengambilan keputusan operasional jadi lebih terukur, terutama di proses yang rawan risiko seperti rekrutmen, sewa kendaraan, atau screening calon pelanggan (misalnya layanan internet/pascabayar). Release awal ProofyLink memang difokuskan untuk kebutuhan **enterprise**: perusahaan dapat mendaftar, melakukan aktivasi, lalu mulai menjalankan pengecekan sesuai kebutuhannya.

## Untuk siapa ProofyLink?

ProofyLink dirancang untuk tim bisnis yang perlu melakukan verifikasi/penilaian sebelum memberikan akses layanan, aset, atau kontrak kepada seseorang.

Contoh pengguna di perusahaan:
- Tim HR/rekrutmen yang ingin mengurangi risiko di tahap hiring.
- Tim operasional rental/leasing yang perlu memastikan proses screening berjalan konsisten.
- Tim sales/credit/collection yang butuh sinyal tambahan saat onboarding pelanggan.

## Cara kerja singkat

Secara umum, ProofyLink dipakai dengan alur sederhana:

1. Perusahaan membuat akun dan menyelesaikan aktivasi.
2. Tim menjalankan pengecekan individu lewat dashboard web, atau sistem perusahaan memanggil API ProofyLink untuk otomatisasi.
3. Hasil pengecekan muncul di dashboard (atau dikembalikan via API) untuk membantu proses operasional berikutnya.

## Manfaatkan ProofyLink

Gunakan ProofyLink untuk membuat proses screening individu di bisnis anda jadi lebih cepat, konsisten, dan mudah ditelusuri. Cocok untuk kebutuhan seperti rekrutmen, sewa kendaraan, atau screening calon pelanggan—baik lewat dashboard web maupun lewat integrasi API untuk otomatisasi [file:5].

## Output

Saat screening selesai, ProofyLink memberikan output yang bisa langsung dipakai untuk pengambilan keputusan operasional.

### Skor kredibilitas individu

ProofyLink merangkum hasil pengecekan menjadi **skor kredibilitas** yang memudahkan tim melihat gambaran cepat tanpa harus membaca detail dari awal. Skor ini biasanya jadi “starting point” untuk menentukan apakah perlu lanjut verifikasi tambahan atau langsung lanjut proses berikutnya (misalnya interview lanjutan, approval sewa, atau aktivasi layanan).

### Analisa berdasarkan use case (tujuan screening)

Setiap screening punya konteks yang berbeda, jadi output ProofyLink juga menyesuaikan tujuan screening yang dipilih. Misalnya, kebutuhan rekrutmen cenderung fokus pada konsistensi dan pola risiko, sedangkan rental lebih fokus pada potensi masalah selama masa kontrak, dan screening calon pelanggan lebih fokus pada sinyal risiko onboarding dan kelancaran pembayaran.

### Rekomendasi

Selain skor dan analisa, ProofyLink menampilkan rekomendasi yang sifatnya praktis untuk membantu tim mengambil langkah berikutnya. Contohnya bisa berupa saran tindakan seperti “lanjutkan dengan syarat tertentu”, “minta dokumen tambahan”, atau “lakukan pengecekan ulang/eskalasi ke reviewer”, sehingga hasil screening tidak berhenti di angka saja.

## Yang akan anda temukan di dokumentasi ini

- Panduan mulai untuk perusahaan (registrasi, aktivasi, dan alur pengecekan).
- Cara menggunakan dashboard web untuk menjalankan pengecekan dan melihat hasil.
- Dokumentasi API (autentikasi, endpoint, best practice integrasi).
- Catatan keamanan dan operasional (rate limit, idempotency, dan praktik integrasi yang aman).