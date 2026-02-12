---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Cara Kerja

Halaman ini menjelaskan alur pembuatan permintaan pengecekan (screening) individu melalui ProofyLink API. Setiap pengecekan **wajib** memiliki persetujuan (consent) dari subject, dan proses pengecekan berjalan **asynchronous** (API mengembalikan `reference_code` untuk pengecekan status).

## Prasyarat data request

Saat membuat verifikasi, siapkan data berikut:
- NIK
- Nama lengkap
- Email
- Nomor HP
- File scan KTP (upload)

ProofyLink akan melakukan validasi awal: **KTP yang diunggah harus sesuai dengan NIK yang direquest**. Jika tidak sesuai, permintaan akan ditolak.

## Metode consent

ProofyLink menyediakan 2 metode consent untuk penggunaan API:

### Consent Digital

ProofyLink mengirim link persetujuan ke email subject, lalu proses menunggu sampai subject membuka link dan menyetujui.

![Skor kredibilitas dan predikat risiko](/img/flow/flow-api-verification-for-digital-consent.webp)

### Consent Manual (Upload)

Perusahaan melampirkan file consent bertanda tangan subject pada request API, sehingga proses bisa langsung dilanjutkan.

![Skor kredibilitas dan predikat risiko](/img/flow/flow-api-verification-for-manual-consent.webp)


