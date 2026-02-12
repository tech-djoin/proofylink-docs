---
sidebar_position: 3
---

# Log Aktivitas

Log Aktivitas adalah audit trail yang mencatat kejadian penting di ProofyLink untuk memastikan transparansi, akuntabilitas, dan keamanan operasional. Fitur ini membantu perusahaan melakukan audit internal, investigasi insiden, dan memenuhi kebutuhan kontrol akses karena aktivitas seperti autentikasi, akses data, dan aksi administratif perlu dapat ditelusuri.


## Kenapa fitur ini penting?

Audit trail menjadi sumber “single source of truth” untuk menjawab pertanyaan: **siapa melakukan apa, kapan, dan dari mana**. Dengan log yang konsisten, tim bisa:
- Melakukan investigasi cepat jika terjadi aktivitas tidak wajar atau kesalahan operasional.
- Memperkuat kontrol internal (approval, separation of duties, dan penelusuran penyebab masalah).
- Mendukung kebutuhan kepatuhan dan keamanan (mis. pencatatan event autentikasi, akses data, perubahan persetujuan, dan aksi administratif).

## Informasi yang dicatat

Log aktivitas biasanya memuat metadata inti berikut:
- **Kategori aktivitas** (contoh: verifikasi, token, voucher).
- **Deskripsi aktivitas** (ringkasan aksi yang dilakukan).
- **Subject/objek terkait** (misalnya referensi ke entitas yang terdampak seperti verification ID).
- **Informasi user** yang melakukan aksi (nama, email, dan tipe user).
- **Waktu kejadian** (timestamp).
- **Alamat IP** untuk penelusuran keamanan.
- **Properties teknis** (metadata tambahan berbentuk key-value/JSON) yang dapat mencakup hal seperti kode referensi, status proses, metode consent, tenant_id, token_name, dan indikator penggunaan access token.

## Cara menelusuri dan memverifikasi aktivitas

- Gunakan pencarian/filter untuk menemukan kejadian pada rentang waktu tertentu atau kategori tertentu.
- Buka **Detail** untuk melihat subject, user, waktu, IP, dan properties teknis agar investigasi bisa lebih presisi.
- Jika dibutuhkan untuk audit, catat nomor/ID referensi pada properties (mis. kode_referensi) sebagai penghubung ke proses operasional lain.

## Praktik akses (disarankan)

- Batasi akses Log Aktivitas hanya untuk role yang membutuhkan (mis. admin perusahaan/ops lead) karena log dapat berisi informasi sensitif operasional.