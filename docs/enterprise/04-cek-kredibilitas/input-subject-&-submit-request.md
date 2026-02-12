---
sidebar_position: 2
---

# Mulai Pengecekan Baru

## Persiapan Checklist
  - Subject data lengkap (nama, NIK, email, phone)
  - Use case sudah dipilih
  - Token balance cukup

## Step 1: Buat Subject / Bulk Import
  - Opsi A: Manual input (satu-satu)
    - Form: Nama, NIK, Email, Phone, Use Case
    - Submit → subject created
  - Opsi B: Bulk import (CSV)
    - Template CSV download
    - Upload CSV file (max 10.000 rows per file)
    - Validation & preview
    - Confirm import → subjects created in batch
  - Jika NIK sudah exist → skip atau update

## Step 2: Submit Check Request
  - Dashboard → "New Check" atau pilih dari list subject
  - Form:
    - Subject selection (single atau select from list)
    - Use case (dropdown - hanya use case yang approved)
    - Priority (Normal / High)
    - Internal reference (misal: recruitment ID, loan application ID)
    - Notes (opsional - internal notes)
  - Confirm → request submitted
  - Status: Pending subject consent
  - Token terdebit dari saldo

## Estimated Cost
  - Show token cost sebelum submit
  - Confirmation dialog
  - If token insufficient → topup flow