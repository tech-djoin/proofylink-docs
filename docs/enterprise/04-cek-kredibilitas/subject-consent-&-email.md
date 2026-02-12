---
sidebar_position: 3
---

# Persetujuan Subject (Individu)

## Email yang Dikirim ke Subject
  - Subject: "ProofyLink Credit Check Request"
  - Content:
    - Who: Nama tenant (company)
    - Why: Use case (recruitment screening, tenant screening, etc.)
    - What: Data yang akan di-akses (riwayat kredit)
    - How long: Data retention policy
    - Consent button: "I Approve" / "I Reject"
    - Privacy notice & link ke BI/OJK website

## Subject Consent Options
  - Subject klik "I Approve" → check dapat dilanjutkan
  - Subject klik "I Reject" → check cancelled, token refund
  - Subject no action (expired after 7 days) → check cancelled, token refund
  - Email reminder day 3 & day 6 jika belum approve

## Tracking
  - Dashboard show subject consent status (pending/approved/rejected)
  - Email notification ke tenant saat subject approve/reject
  - Auto-cancel check jika consent expired