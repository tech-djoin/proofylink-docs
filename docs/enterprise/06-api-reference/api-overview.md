---
sidebar_position: 1
---

# Persiapan

Selamat datang di dokumentasi Proofylink External API. API ini menyediakan endpoints untuk verifikasi dan manajemen token.

## Authentication

Semua request membutuhkan API key yang dikirim melalui header:

`Authorization: Bearer YOUR_API_KEY`

## Endpoints Overview

API ini terdiri dari 2 kategori utama:

### Cek Data Individu

Endpoints untuk mengelola proses verifikasi:
- **Pengecekan Baru (Email Consent)** - Melakukan pengecekan dengan persetujuan subject via email
- **Pengecekan Baru (Upload Consent)** - Melakukan pengecekan dengan persetujuan subject via upload dokumen consent
- **Daftar Pengecekan** - Mendapatkan daftar pengecekan yang pernah dilakukan
- **Detail Hasil Pengecekan** - Mendapatkan detail hasil pengecekan


### Token

Endpoints untuk manajemen token:
- **Balance** - Cek saldo token

## Generate API Token dari Proofylink Business Portal


## Rate Limiting

API ini memiliki rate limit untuk melindungi service. Jika terkena rate limit, response akan mengembalikan status code `429 Too Many Requests`.

## Support

Jika ada pertanyaan atau masalah, silakan hubungi tim support kami.