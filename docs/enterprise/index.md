---
sidebar_position: 1
---

# Gambaran Enterprise

ProofyLink Enterprise adalah versi ProofyLink yang dirancang untuk perusahaan yang perlu melakukan screening individu secara cepat, konsisten, dan mudah ditelusuri—baik lewat dashboard web maupun integrasi API untuk otomatisasi.  
Di versi ini, anda bisa mengatur tujuan screening (use case), menjalankan pengecekan, melihat output, lalu mendokumentasikan keputusan akhir beserta jejaknya.

## 🎯 Untuk siapa?

ProofyLink Enterprise cocok untuk organisasi yang:
- Punya proses operasional yang melibatkan *approval* terhadap individu (kandidat, penyewa, calon pelanggan).
- Membutuhkan standar screening yang konsisten antar tim/cabang.
- Ingin hasil screening yang bisa ditelusuri kembali untuk kebutuhan audit internal.

Use case yang tersedia saat ini:
- **Rekrutmen pegawai / screening pegawai existing**.
- **Cek penyewa kendaraan**.
- **Cek calon customer (bisnis umum)**.

## ✅ Apa yang bisa dilakukan?

Dengan ProofyLink Enterprise, perusahaan bisa menjalankan workflow end-to-end berikut:

| Aktivitas | Ringkasannya | Ke mana lanjut? |
|---|---|---|
| Daftar & aktivasi enterprise | Membuat akun perusahaan dan menyiapkan akses awal. | `Daftar & Aktivasi Enterprise` |
| Atur token & billing | Menyiapkan token integrasi dan pengelolaan kuota/saldo untuk pengecekan. | `Token & Billing Management` |
| Tentukan use case & alur approval | Memilih tujuan screening dan menyesuaikan alur persetujuan di internal tim. | `Use Case & Approval` |
| Jalankan pengecekan individu (subject) | Mengirim permintaan pengecekan untuk individu yang akan discreening. | `Checking Credibility (Subject)` |
| Lihat hasil & analisa | Membaca skor, analisa, data pendukung, dan rekomendasi. | `View Result & Analysis` |
| Tetapkan keputusan akhir + audit trail | Mencatat keputusan dan menyimpan jejak keputusan untuk pelacakan. | `Final Decision & Audit Trail` |

Catatan: Untuk enterprise yang butuh otomatisasi, workflow di atas bisa dijalankan melalui **API** sesuai kebutuhan integrasi.

## 📤 Output yang anda dapatkan

Setelah screening diproses, ProofyLink menampilkan output yang dapat dipakai tim untuk langkah berikutnya (review, verifikasi tambahan, atau keputusan akhir).

Output utama:
- **Skor & analisa kredibilitas**: ringkasan cepat untuk memahami profil risiko individu tanpa perlu membaca semuanya dari awal.
- **Analisa berdasarkan use case + rekomendasi**: hasil dibingkai sesuai tujuan screening yang dipilih (rekrutmen, penyewa kendaraan, atau calon customer) agar lebih relevan untuk keputusan operasional.
- **Data pendukung (riwayat kredit)**: data pendukung yang membantu reviewer memahami konteks dan alasan di balik skor/analisa [file:3].
- **Keputusan akhir**: ruang untuk menetapkan keputusan akhir sesuai proses internal, sekaligus menjaga konsistensi dan keterlacakan.

## 🔐 Keamanan & compliance

ProofyLink Enterprise didesain untuk kebutuhan bisnis yang sensitif, dengan perhatian pada keamanan data dan keterlacakan aktivitas.

Yang disiapkan di platform:
- **Praktik keamanan aplikasi** seperti validasi input, rate limiting, dan enkripsi data saat transit maupun tersimpan [file:3][file:5].
- **Monitoring & logging** untuk membantu operasional dan investigasi saat dibutuhkan [file:3][file:5].
- **Integrasi API yang aman**: API bersifat stateless dan berbasis token; desain seperti ini memudahkan scaling dan mengurangi ketergantungan pada session saat integrasi.

Untuk detail kewajiban privasi data dan aturan penggunaan di perusahaan, lihat:
- `Data Privacy Obligation`

## ☎️ Dukungan enterprise

Kami menyediakan dukungan untuk membantu perusahaan menjalankan ProofyLink dengan lancar, terutama saat onboarding dan integrasi.

Umumnya mencakup:
- Bantuan setup awal (akun, konfigurasi use case, dan alur approval).
- Bantuan integrasi API dan best practices implementasi.
- Bantuan investigasi kendala operasional (misalnya pengecekan gagal, isu akses, atau pertanyaan terkait audit trail).

Lihat juga:
- `Enterprise FAQ`
- `Integration Best Practices`
- `Quick Reference (Cheatsheet)`