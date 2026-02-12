---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Daftar Status

Status digunakan untuk memantau progres permintaan pengecekan yang diproses secara asynchronous. Setelah membuat request, kamu akan menerima `reference_code` dan bisa mengecek status permintaan menggunakan endpoint status berbasis `referencecode`.

## Tabel status

| Status | Arti | Muncul pada | Yang perlu dilakukan client |
|---|---|---|---|
| `pending_consent` | Permintaan dibuat dan sistem memulai proses permintaan consent ke subject. | Digital consent | Lanjutkan polling status menggunakan `reference_code`. |
| `waiting_confirmation` | Link consent sudah dikirim dan sistem menunggu subject melakukan accept. | Digital consent | Lanjutkan polling; pastikan email subject valid dan subject sudah melakukan accept. |
| `processing` | Permintaan sudah valid untuk diproses dan pipeline mulai berjalan. | Digital & Manual | Lanjutkan polling sampai masuk tahap berikutnya. |
| `on_data_collection` | Sistem sedang mengumpulkan data untuk pengecekan. | Digital & Manual | Lanjutkan polling (biasanya belum ada hasil yang bisa ditampilkan). |
| `on_credit_analysis` | Sistem sedang melakukan analisa kredit. | Digital & Manual | Lanjutkan polling sampai `completed` atau `failed`. |
| `completed` | Proses selesai dan hasil pengecekan sudah tersedia. | Digital & Manual | Ambil hasil sesuai endpoint hasil yang tersedia (berdasarkan `reference_code`/ID terkait). |
| `failed` | Permintaan ditolak atau proses gagal. | Digital & Manual | Tampilkan error yang sesuai (jika ada); gunakan `reference_code` untuk investigasi/eskalasi. |

## Ringkasan alur status

- Digital consent: `pending_consent` → `waiting_confirmation` → `processing` → `on_data_collection` → `on_credit_analysis` → `completed`/`failed`.
- Manual consent: `processing` → `on_data_collection` → `on_credit_analysis` → `completed`/`failed`.