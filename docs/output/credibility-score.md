---
sidebar_position: 1
---

# Skor Kredibilitas

Skor kredibilitas membantu anda menilai “seberapa perlu perhatian” sebuah profil, lalu menunjukkan *bagian mana* yang paling perlu ditinjau. Output ini dirangkum dalam **skor (0–100)**, **predikat risiko**, **grade/label**, serta breakdown kategori dan highlight temuan penting.

## Skor kredibilitas (0–100)

![Skor kredibilitas dan predikat risiko](/img/output/proofylink-output-credibility-score.webp)

Skor adalah angka ringkas untuk memudahkan tim melakukan triage: mana yang aman dilanjutkan, mana yang perlu klarifikasi dulu. Di contoh output, skor ditampilkan sebagai **53/100**.

Cara pakai:
- Anggap skor sebagai **sinyal awal**, bukan keputusan final.
- Setelah lihat skor, langkah yang benar adalah membaca kategori mana yang menurunkan skor, dan temuan “Perhatian” yang muncul.

## Predikat risiko

Predikat risiko menerjemahkan skor menjadi bahasa yang lebih mudah dipahami tim operasional. Di contoh output, predikatnya **Risiko Sedang** dan status interpretasinya menyebut **Perlu Klarifikasi**.

Cara pakai:
- “Risiko Sedang” biasanya berarti profil punya banyak sisi positif, tapi ada indikator yang perlu dipahami konteksnya sebelum anda ambil keputusan akhir.
- Fokuskan klarifikasi pada indikator yang diberi label risiko tinggi atau yang berdampak besar ke kategori skor.

## Grade & label (mis. “Perlu Perhatian”)

Selain skor, ProofyLink menampilkan **grade** dan label ringkas untuk membantu konsistensi antar reviewer. Di contoh output, skor 53/100 memiliki **Grade D** dan label **Perlu Perhatian**.

Cara pakai:
- Grade/label membantu menyamakan interpretasi ketika beberapa orang menilai hasil yang sama.
- Label “Perlu Perhatian” bukan berarti “langsung ditolak”; ini sinyal untuk membaca bagian “Perhatian” dan melakukan klarifikasi yang relevan.

## Breakdown kategori (apa yang membentuk skor)

Skor total berasal dari beberapa kategori. Di contoh output, kategorinya dan kontribusinya ditampilkan sebagai berikut:

- **Stabilitas Hidup**: 16/25 (64%)
- **Kebijaksanaan Finansial**: 13/25 (52%)
- **Riwayat Komitmen**: 10/25 (40%)
- **Pola Perilaku**: 6/15 (40%)
- **Resiliensi & Pemulihan**: 8/10 (80%)

Cara membaca yang paling praktis:
- Mulai dari kategori dengan persentase **terendah** (di contoh: Riwayat Komitmen dan Pola Perilaku) untuk menemukan area yang perlu didalami lebih dulu.
- Lihat kategori yang **tinggi** (di contoh: Resiliensi & Pemulihan) untuk memahami faktor yang menyeimbangkan risiko dan konteks positifnya.

## Kekuatan (apa yang mendukung kredibilitas)

![Skor kredibilitas dan predikat risiko](/img/output/proofylink-output-credibility-score-1.webp)

“Kekuatan” adalah temuan positif yang membantu menjelaskan mengapa profil ini dinilai cukup baik di beberapa area. Di contoh output, ProofyLink menuliskan kekuatan seperti **Karir Stabil**, **Semua Akun Performing**, dan indikator pemulihan yang baik.

Cara pakai:
- Jadikan “Kekuatan” sebagai konteks saat diskusi internal agar penilaian tidak berat sebelah.
- Kekuatan juga bisa dipakai sebagai bahan pertanyaan untuk memvalidasi konsistensi informasi (misalnya memastikan data pekerjaan memang sesuai).

## Perhatian (indikator yang perlu ditanya)

“Perhatian” berisi hal-hal yang paling mungkin menjadi penyebab skor turun atau menjadi sumber risiko operasional. Di contoh output, salah satu perhatian utama adalah **Utilisasi Kredit Tinggi** (penggunaan 98% dari limit) dan diberi label **HIGH RISK**.

Cara pakai:
- Perlakukan label HIGH RISK sebagai pemicu untuk **klarifikasi berbasis fakta** (misalnya: penyebab, pola, dan apakah ini kondisi sementara atau kebiasaan).
- Pastikan klarifikasi anda tercatat dan bisa ditautkan ke keputusan akhir (agar keputusan tidak sekadar “feeling”).

## Rekomendasi optimalisasi profil (apa langkah paling masuk akal)

![Skor kredibilitas dan predikat risiko](/img/output/proofylink-output-credibility-score-2.webp)

Di bawah skor, ProofyLink dapat menampilkan rekomendasi “Langkah Optimalisasi Profil” yang diprioritaskan (High/Medium/Low) dan estimasi “potential” peningkatan poin. Pada contoh output, rekomendasinya mencakup “Turunkan Utilisasi Kredit” sebagai High Priority, serta langkah lain seperti menyelesaikan fasilitas kredit dan meningkatkan completion rate.

Cara pakai:
- Untuk screening, rekomendasi ini paling berguna sebagai **arah mitigasi**: tindakan apa yang bisa diminta/dikonfirmasi agar risikonya lebih terkendali.
- Gunakan prioritas untuk menentukan urutan pertanyaan/verifikasi, bukan sebagai syarat mutlak yang harus dipenuhi semuanya.
