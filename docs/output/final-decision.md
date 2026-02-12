---
sidebar_position: 3
---

# Keputusan Akhir

Keputusan akhir adalah langkah penutup dari proses screening: anda menetapkan hasil (disetujui atau ditolak) **berdasarkan temuan yang sudah dianalisis**, lalu menuliskan alasan yang jelas agar keputusan mudah ditinjau ulang dan konsisten antar tim. Di output ProofyLink, keputusan ini ditetapkan setelah analisa kredibilitas selesai dan akan mengubah status “Keputusan Akhir” dari “menunggu tinjauan” menjadi keputusan yang tersimpan.

## Apa yang dimaksud “Keputusan Akhir”?

Keputusan akhir adalah keputusan operasional versi tim anda terhadap satu subject/kandidat, setelah membaca:
- Skor & predikat risiko.
- Temuan “Perhatian” (mis. indikator berisiko tinggi).
- Analisa berdasarkan tujuan (use case) dan rekomendasi mitigasi.

Di contoh output, status keputusan masih kosong (“-”) dan ditandai “Menunggu tinjauan” sampai reviewer menyimpan keputusan.

## Pilihan keputusan

Saat siap memutuskan, ProofyLink menyediakan dua opsi:

- **Approve (Disetujui)**: kandidat lolos verifikasi dan memenuhi kriteria yang dibutuhkan.
- **Reject (Ditolak)**: ada temuan *red flag* atau dokumen tidak valid yang bersifat kritikal.

Cara memilih yang tepat:
- Approve tidak berarti “tanpa risiko”; Approve berarti risiko yang ada **bisa diterima** atau **sudah dimitigasi** sesuai kebutuhan use case.
- Reject sebaiknya dipakai ketika ada indikator kritikal yang membuat proses tidak aman untuk dilanjutkan, atau ada ketidaksesuaian yang tidak dapat dijelaskan/ditutup dengan mitigasi.

## Alasan keputusan (wajib)

Setiap keputusan wajib disertai **alasan**. Di UI, kolom alasan diberi contoh format dan ada ketentuan minimal **20 karakter** sebelum bisa disimpan.

Prinsip menulis alasan yang baik:
- Tulis alasan berbasis temuan: sebutkan 1–3 poin paling menentukan (mis. “Perlu klarifikasi X sudah dilakukan”, atau “Ada red flag Y yang tidak bisa diverifikasi”).
- Hubungkan dengan use case: jelaskan kenapa temuan itu relevan untuk tujuan screening anda, bukan sekadar mengulang skor.
- Buat alasan yang bisa dipahami orang lain: bayangkan alasan ini dibaca ulang oleh anggota tim lain beberapa minggu kemudian.

## Kapan keputusan sebaiknya dibuat?

Keputusan akhir idealnya dibuat setelah:
- Semua poin “Perlu klarifikasi” yang relevan sudah ditangani (misalnya lewat wawancara tambahan atau verifikasi pekerjaan), terutama jika predikat menyatakan “Perlu Klarifikasi”.
- Rekomendasi mitigasi yang berprioritas tinggi sudah dilakukan bila memang diperlukan untuk use case tersebut.

Kalau anda belum yakin, lebih baik menunda keputusan sampai ada data tambahan daripada menulis alasan yang “mengambang”.

## Dampak keputusan terhadap proses

Setelah keputusan disimpan, ProofyLink akan:
- Menyimpan pilihan keputusan (Approve/Reject).
- Menyimpan alasan keputusan sebagai catatan resmi screening.
- Mengubah status “Keputusan Akhir” yang sebelumnya “menunggu tinjauan” menjadi keputusan yang sudah ditetapkan.
