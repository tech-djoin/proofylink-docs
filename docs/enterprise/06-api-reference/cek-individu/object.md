---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Data Object

Halaman ini menjelaskan struktur lengkap dari object `data` yang dikembalikan dalam response API verifikasi.

## Overview

Object `data` berisi informasi lengkap hasil verifikasi individu, termasuk detail verifikasi, informasi customer, dan hasil analisis kredibilitas.

## Response Structure

```json
{
  "data": {
    "verification": { object },
    "customer": { object },
    "analysis": { object }
  }
}
```

## Verification Object

Berisi informasi utama tentang proses verifikasi yang dilakukan [web:24][web:29].

| Field | Type | Description |
|-------|------|-------------|
| `reference_code` | String | Kode referensi unik untuk verifikasi ini. Format: EMP-YYMMDD-XXXX |
| `verification_type_name` | String | Nama jenis verifikasi yang dilakukan (contoh: "Rekrutment/Screening Karyawan") |
| `created_at` | String (ISO 8601) | Timestamp saat verifikasi dibuat |
| `updated_at` | String (ISO 8601) | Timestamp terakhir verifikasi diupdate |
| `status` | String | Status verifikasi. Nilai: `pending`, `processing`, `completed`, `failed` |
| `failed_message` | String / Null | Pesan error jika verifikasi gagal. Null jika sukses |
| `credibility_score` | Integer | Skor kredibilitas (0-100) |
| `credibility_level` | String | Level kredibilitas berdasarkan skor. Nilai: `A`, `B`, `C`, `D`, `E` |
| `final_decision` | String / Null | Keputusan akhir untuk verifikasi ini (opsional) |

### Example Response
```json
{
  "verification": {
    "reference_code": "EMP-260212-5406",
    "verification_type_name": "Rekrutment/Screening Karyawan",
    "created_at": "2026-02-12T10:23:00.000000Z",
    "updated_at": "2026-02-12T10:23:11.000000Z",
    "status": "completed",
    "failed_message": null,
    "credibility_score": 53,
    "credibility_level": "D",
    "final_decision": null
  }
}
```

## Customer Object

Berisi informasi dasar tentang individu yang diverifikasi.

Field	Type	Description
name	String	Nama lengkap customer
phone	String	Nomor telepon customer
id_number	String	Nomor identitas (KTP/NIK) customer

### Example Response
```json
{
  "customer": {
    "name": "MIRA SETIAWAN",
    "phone": "823423423423",
    "id_number": "3171234567890123"
  }
}
```

## Analysis Object

Berisi hasil analisis kredibilitas yang komprehensif. Object ini terdiri dari beberapa sub-object yang masing-masing menjelaskan aspek analisis berbeda.

```json
{
  "analysis": {
    "credit_summary": { object },
    "credibility": { object },
    "use_case_analysis": { object }
  }
}
```

### Sub-Objects

Setiap sub-object dalam `analysis` akan dijelaskan secara detail pada bagian berikut:

#### credit_summary

Ringkasan informasi kredit dan riwayat financial customer.

<details>
<summary><b>📂 Lihat contoh lengkap</b></summary>
```json
{
  "data": {
    "health": {
      "balance_trend": {
        "labels": [
          "Jul'24",
          "Agu'24",
          "Sep'24",
          "Okt'24",
          "Nov'24",
          "Des'24",
          "Jan'25",
          "Feb'25",
          "Mar'25",
          "Apr'25",
          "Mei'25",
          "Jun'25"
        ],
        "values": [
          489000000,
          468500000,
          448000000,
          427500000,
          7000000,
          6500000,
          6000000,
          5500000,
          5000000,
          4500000,
          4000000,
          3500000
        ]
      },
      "current_status": {
        "dpd": 0,
        "status": "Lancar",
        "status_code": 1,
        "overdue_amount": 0
      },
      "historical_worst": null,
      "payment_calendar": [
        {
          "dpd": 0,
          "period": "2024-07",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2024-08",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2024-09",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2024-10",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2024-11",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2024-12",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2025-01",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2025-02",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2025-03",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2025-04",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2025-05",
          "status": "Lancar",
          "status_code": 1
        },
        {
          "dpd": 0,
          "period": "2025-06",
          "status": "Lancar",
          "status_code": 1
        }
      ],
      "historical_issues": [],
      "payment_statistics": {
        "dpk": 0,
        "macet": 0,
        "lancar": 12,
        "diragukan": 0,
        "total_months": 12,
        "kurang_lancar": 0,
        "lancar_percentage": 100
      }
    },
    "general": {
      "score": {
        "max": 850,
        "min": 300,
        "grade": "Di",
        "value": 517,
        "source_description": "High Risk"
      },
      "alerts": {
        "has_current_overdue": false,
        "historical_worst_date": null,
        "current_overdue_amount": 0,
        "has_historical_default": false,
        "historical_worst_status": "Lancar",
        "historical_worst_status_code": 1
      },
      "quick_stats": {
        "total_providers": 6,
        "credit_age_months": 18,
        "facilities_active": 2,
        "credit_age_formatted": "1 tahun 6 bulan",
        "current_payment_status": "Lancar",
        "utilization_percentage": 88,
        "current_payment_status_code": 1
      },
      "facilities_count": {
        "total": 13,
        "active": 2,
        "closed": 0,
        "requested": 11
      },
      "financial_summary": {
        "total_overdue": 0,
        "total_credit_limit": 483500000,
        "total_debit_balance": 423500000
      }
    },
    "activities": {
      "by_provider": [],
      "data_changes": {
        "address_records": 2,
        "contact_records": 2,
        "employment_records": 1,
        "last_address_update": "2025-12-15",
        "last_contact_update": "2025-12-15"
      },
      "inquiry_summary": {
        "count_1_month": 0,
        "count_3_months": 0,
        "count_6_months": 0,
        "count_12_months": 0
      },
      "recent_inquiries": [],
      "application_history": {
        "total_approved": 2,
        "total_rejected": 0,
        "total_requested": 11
      }
    },
    "facilities": {
      "summary": {
        "active": 2,
        "closed": 0,
        "requested": 11,
        "total_active_limit": 483500000,
        "total_active_balance": 423500000
      },
      "by_facility_type": [
        {
          "type": "Lainnya",
          "count": 1,
          "active": 1
        },
        {
          "type": "Sindikasi",
          "count": 1,
          "active": 1
        }
      ],
      "by_provider_type": [
        {
          "type": "Conventional Commercial Bank",
          "count": 2,
          "active": 2
        }
      ],
      "active_facilities": [
        {
          "id": "T04220454",
          "dpd": 0,
          "limit": 3500000,
          "phase": "Aktif",
          "usage": "Consumption",
          "status": "Current",
          "balance": 3500000,
          "overdue": 0,
          "due_date": "2027-07-01",
          "provider": "PT Bank Rakyat Indonesia (Persero) Tbk",
          "start_date": "2024-07-01",
          "status_code": 1,
          "payment_dots": [
            {
              "period": "Jan'25",
              "status_code": 1
            },
            {
              "period": "Feb'25",
              "status_code": 1
            },
            {
              "period": "Mar'25",
              "status_code": 1
            },
            {
              "period": "Apr'25",
              "status_code": 1
            },
            {
              "period": "Mei'25",
              "status_code": 1
            },
            {
              "period": "Jun'25",
              "status_code": 1
            }
          ],
          "facility_type": "Lainnya",
          "interest_rate": 13,
          "interest_type": "Fixed",
          "provider_type": "Conventional Commercial Bank",
          "worst_ever_dpd": 0,
          "collaterals_count": 0,
          "worst_ever_status": "Current",
          "worst_ever_status_code": 1
        },
        {
          "id": "Q04220238",
          "dpd": 0,
          "limit": 480000000,
          "phase": "Aktif",
          "usage": "Working capital",
          "status": "Current",
          "balance": 420000000,
          "overdue": 0,
          "due_date": "2022-12-12",
          "provider": "PT Bank Central Asia Tbk",
          "start_date": "2024-07-11",
          "status_code": 1,
          "payment_dots": [
            {
              "period": "Jul'24",
              "status_code": 1
            },
            {
              "period": "Agu'24",
              "status_code": 1
            },
            {
              "period": "Sep'24",
              "status_code": 1
            },
            {
              "period": "Okt'24",
              "status_code": 1
            }
          ],
          "facility_type": "Kredit Sindikasi",
          "interest_rate": 10,
          "interest_type": "Floating",
          "provider_type": "Conventional Commercial Bank",
          "worst_ever_dpd": 0,
          "collaterals_count": 1,
          "worst_ever_status": "Current",
          "worst_ever_status_code": 1
        }
      ],
      "requested_facilities": {
        "count": 11,
        "items": [
          {
            "id": "I04219258",
            "date": "2024-02-18",
            "phase": "Requested",
            "amount": 20000000,
            "provider": "KOPERASI JASA MUDA ARTHA SWAHA ",
            "facility_type": "Credit Card"
          },
          {
            "id": "Q04220700",
            "date": "2024-02-18",
            "phase": "Requested",
            "amount": 20000000,
            "provider": "KOPERASI JASA MUDA ARTHA SWAHA ",
            "facility_type": "Credit Card"
          },
          {
            "id": "J04220427",
            "date": "2025-12-15",
            "phase": "Requested",
            "amount": 20000000,
            "provider": "NORA PROVIDER",
            "facility_type": "Credit Card"
          },
          {
            "id": "404220286",
            "date": "2025-10-10",
            "phase": "Requested",
            "amount": 10000000,
            "provider": "NORA PROVIDER",
            "facility_type": "Others"
          },
          {
            "id": "K04222640",
            "date": "2025-10-03",
            "phase": "Requested",
            "amount": 10000000,
            "provider": "NORA PROVIDER",
            "facility_type": "Others"
          }
        ],
        "total_amount": 103001000
      },
      "closed_facilities_recent": []
    },
    "has_history": true,
    "generated_at": "2026-01-22T05:29:15.222Z",
    "reference_date": "2026-01-22"
  },
  "status": "success",
  "message": "Credit report summarized successfully"
}
```
</details>

#### credibility

Breakdown detail penilaian kredibilitas.

<details>
<summary><b>📂 Lihat contoh lengkap</b></summary>
```json
{
  "status": "success",
  "timestamp": "2026-01-22T05:29:16.130Z",
  "credibilityScore": {
    "total": 71,
    "max": 100,
    "percentage": 71,
    "grade": {
      "letter": "C",
      "label": "Cukup Kredibel",
      "color": "#eab308"
    }
  },
  "pilars": {
    "lifeStability": {
      "score": 18,
      "maxScore": 25,
      "percentage": 72
    },
    "financialWisdom": {
      "score": 14,
      "maxScore": 25,
      "percentage": 56
    },
    "commitmentHistory": {
      "score": 18,
      "maxScore": 25,
      "percentage": 72
    },
    "behavioralPattern": {
      "score": 14,
      "maxScore": 15,
      "percentage": 93
    },
    "resilienceRecovery": {
      "score": 7,
      "maxScore": 10,
      "percentage": 70
    }
  },
  "insights": {
    "strengths": [
      {
        "pilar": "Life Stability",
        "title": "Kehidupan Stabil",
        "description": "Stabilitas tempat tinggal dan pekerjaan baik"
      },
      {
        "pilar": "Life Stability",
        "title": "Karir Stabil",
        "description": "Riwayat pekerjaan menunjukkan konsistensi dan fokus karir"
      },
      {
        "pilar": "Financial Wisdom",
        "title": "Tidak Bergantung Pinjol",
        "description": "Tidak menggunakan pinjaman online menunjukkan manajemen keuangan yang baik"
      },
      {
        "pilar": "Commitment History",
        "title": "Track Record Baik",
        "description": "Riwayat pembayaran cukup konsisten"
      },
      {
        "pilar": "Commitment History",
        "title": "Semua Akun Performing",
        "description": "100% akun dalam status baik"
      },
      {
        "pilar": "Commitment History",
        "title": "Pembayaran Konsisten",
        "description": "Pola pembayaran sangat konsisten tanpa keterlambatan"
      },
      {
        "pilar": "Behavioral Pattern",
        "title": "Pola Perilaku Konsisten",
        "description": "Perilaku keuangan stabil dan dapat diprediksi"
      },
      {
        "pilar": "Behavioral Pattern",
        "title": "Data Diri Konsisten",
        "description": "Informasi kontak dan alamat stabil"
      },
      {
        "pilar": "Behavioral Pattern",
        "title": "Profil Risiko Rendah",
        "description": "Tidak ada faktor risiko kritis terdeteksi"
      },
      {
        "pilar": "Resilience & Recovery",
        "title": "Kemampuan Recovery Baik",
        "description": "Mampu pulih dari kesulitan keuangan dengan baik"
      },
      {
        "pilar": "Resilience & Recovery",
        "title": "Tidak Ada Riwayat Masalah",
        "description": "Belum pernah mengalami masalah keterlambatan serius"
      },
      {
        "pilar": "Resilience & Recovery",
        "title": "Kondisi Saat Ini Baik",
        "description": "Semua akun aktif dalam kondisi performing"
      }
    ],
    "concerns": [
      {
        "pilar": "Financial Wisdom",
        "title": "Utilisasi Kredit Tinggi",
        "description": "Penggunaan kredit 88% dari limit - cukup tinggi",
        "severity": "high"
      }
    ]
  },
  "recommendations": [
    {
      "priority": "High",
      "area": "Financial Wisdom",
      "action": "Turunkan Utilisasi Kredit",
      "detail": "Kurangi penggunaan kredit hingga di bawah 50% dari limit untuk skor optimal",
      "potentialGain": "4-7 poin"
    },
    {
      "priority": "Medium",
      "area": "Financial Wisdom",
      "action": "Selesaikan Fasilitas Kredit",
      "detail": "Fokus melunasi beberapa fasilitas kredit untuk meningkatkan completion rate",
      "potentialGain": "2-4 poin"
    },
    {
      "priority": "Medium",
      "area": "Commitment History",
      "action": "Tingkatkan Completion Rate",
      "detail": "Selesaikan beberapa fasilitas kredit hingga lunas untuk meningkatkan track record",
      "potentialGain": "3-7 poin"
    },
    {
      "priority": "Low",
      "area": "Life Stability",
      "action": "Stabilkan Tempat Tinggal",
      "detail": "Tinggal lebih lama di alamat saat ini akan meningkatkan skor stabilitas",
      "potentialGain": "1-3 poin"
    }
  ],
  "potentialScore": {
    "current": 71,
    "potentialMin": 81,
    "potentialMax": 92
  }
}
```
</details>

#### use_case_analysis

Analisis kesesuaian customer dengan use case spesifik.

<details>
<summary><b>📂 Lihat contoh lengkap</b></summary>
```json
{
  "report_metadata": {
    "report_title": "Hasil Analisis Kandidat",
    "provider": "ProofyLink.ai",
    "report_date": "26 January 2026",
    "use_case": 1
  },
  "candidate_data": {
    "name_placeholder": "[NAMA KANDIDAT]",
    "identity_masked": "3275****0003",
    "report_date": "26 January 2026",
    "age": 28,
    "gender": "Laki-laki",
    "education": "Sarjana (S1)",
    "marital_status": "Belum Menikah"
  },
  "overall_risk_score": {
    "level": "SEDANG",
    "label": "RISIKO SEDANG - Perlu Klarifikasi",
    "description": "Kandidat menunjukkan kedisiplinan yang baik dalam memenuhi komitmen, namun terdapat beberapa pola perilaku yang perlu diklarifikasi lebih lanjut.",
    "visual": {
      "scale": [
        "Rendah",
        "Sedang",
        "Tinggi"
      ],
      "position": 2,
      "color": "#F39C12"
    }
  },
  "quick_overview": {
    "section_title": "1. Hasil Analisis (Tinjauan Cepat)",
    "strengths": {
      "subsection_title": "A. Kekuatan (Strength)",
      "items": [
        {
          "icon": "✓",
          "title": "Kedisiplinan Tinggi",
          "description": "Kandidat konsisten dalam memenuhi komitmen dan kewajiban. Tidak ditemukan catatan pengabaian tanggung jawab."
        },
        {
          "icon": "✓",
          "title": "Rekam Jejak Bersih",
          "description": "Tidak ada catatan negatif atau pelanggaran komitmen sepanjang riwayat yang tercatat."
        },
        {
          "icon": "✓",
          "title": "Stabilitas Domisili",
          "description": "Alamat tempat tinggal relatif menetap dengan perpindahan minimal, menunjukkan kestabilan pola hidup."
        },
        {
          "icon": "✓",
          "title": "Konsistensi Data Kontak",
          "description": "Nomor telepon dan email yang digunakan konsisten, tidak menunjukkan pola penghindaran atau ketidakstabilan."
        }
      ]
    },
    "risk_areas": {
      "subsection_title": "B. Area yang Memerlukan Klarifikasi / Risiko Potensial",
      "items": [
        {
          "icon": "⚠",
          "severity": "warning",
          "title": "Indikasi Beban Tanggung Jawab Tinggi",
          "description": "Pola aktivitas menunjukkan kandidat sedang mengelola beberapa tanggung jawab sekaligus. Perlu dipahami bagaimana kandidat memprioritaskan komitmen."
        },
        {
          "icon": "⚠",
          "severity": "warning",
          "title": "Profil Perlu Pemahaman Lebih Lanjut",
          "description": "Beberapa indikator menunjukkan kandidat berada dalam kondisi yang memerlukan klarifikasi untuk memahami motivasi dan prioritasnya."
        },
        {
          "icon": "⚠",
          "severity": "warning",
          "title": "Informasi Pekerjaan Perlu Diverifikasi",
          "description": "Data pekerjaan terakhir perlu dikonfirmasi kesesuaiannya dengan informasi yang disampaikan kandidat."
        }
      ]
    }
  },
  "job_suitability": {
    "section_title": "C. Tingkat Kecocokan Bidang Kerja (Berdasarkan Profil Karakter)",
    "matrix": [
      {
        "job_field": "IT / Teknologi / Data / Riset",
        "suitability": "TINGGI",
        "suitability_color": "#27AE60",
        "key_reason": "Pola kedisiplinan dan konsistensi yang baik mendukung peran yang membutuhkan ketelitian dan tanggung jawab individual."
      },
      {
        "job_field": "Administrasi / Back Office / Customer Service",
        "suitability": "TINGGI",
        "suitability_color": "#27AE60",
        "key_reason": "Rekam jejak yang bersih dan stabilitas perilaku sesuai dengan kebutuhan peran administratif."
      },
      {
        "job_field": "Marketing / Creative / Content",
        "suitability": "TINGGI",
        "suitability_color": "#27AE60",
        "key_reason": "Tidak ada indikator negatif yang menghalangi. Pola perilaku stabil dan dapat diandalkan."
      },
      {
        "job_field": "Sales / Business Development",
        "suitability": "SEDANG",
        "suitability_color": "#F39C12",
        "key_reason": "Cocok jika kandidat dapat menunjukkan kemampuan mengelola tekanan dan target. Perlu klarifikasi motivasi."
      },
      {
        "job_field": "Finance / Accounting / Audit",
        "suitability": "SEDANG",
        "suitability_color": "#F39C12",
        "key_reason": "Kedisiplinan baik, namun untuk posisi dengan akses ke sistem penting, perlu pemahaman lebih dalam tentang karakter kandidat."
      },
      {
        "job_field": "Kasir / Pengelola Inventaris / Aset",
        "suitability": "RENDAH",
        "suitability_color": "#E74C3C",
        "key_reason": "Terdapat indikator yang memerlukan evaluasi lebih mendalam sebelum ditempatkan di posisi dengan akses langsung ke aset."
      },
      {
        "job_field": "Procurement / Purchasing",
        "suitability": "RENDAH",
        "suitability_color": "#E74C3C",
        "key_reason": "Posisi dengan otoritas pengadaan memerlukan profil dengan indikator risiko yang lebih rendah."
      }
    ]
  },
  "screening_recommendations": {
    "section_title": "2. Rekomendasi Screening (Mitigasi Risiko)",
    "recommendations": [
      {
        "priority": "Tinggi",
        "priority_color": "#E74C3C",
        "recommendation": "Wawancara Mendalam tentang Prioritas dan Komitmen",
        "objective": "Pahami bagaimana kandidat mengelola berbagai tanggung jawab dan bagaimana memprioritaskan komitmen kerja.",
        "suggested_questions": [
          "Ceritakan pengalaman Anda mengelola beberapa tanggung jawab sekaligus. Bagaimana Anda memprioritaskannya?",
          "Apa yang menjadi prioritas utama Anda saat ini dalam karir?",
          "Bagaimana Anda memastikan komitmen kerja tetap terjaga meski ada tekanan dari luar?"
        ]
      },
      {
        "priority": "Tinggi",
        "priority_color": "#E74C3C",
        "recommendation": "Verifikasi Riwayat Pekerjaan",
        "objective": "Konfirmasi pengalaman kerja dan alasan perpindahan pekerjaan sebelumnya.",
        "suggested_actions": [
          "Hubungi referensi dari atasan atau HR di perusahaan sebelumnya",
          "Tanyakan alasan resign dan performa selama bekerja",
          "Verifikasi jabatan dan periode kerja yang disampaikan"
        ]
      },
      {
        "priority": "Sedang",
        "priority_color": "#F39C12",
        "recommendation": "Penilaian Integritas melalui Studi Kasus",
        "objective": "Untuk posisi dengan akses ke aset atau keputusan penting, gunakan skenario situasional.",
        "suggested_questions": [
          "Jika Anda mengetahui rekan kerja melakukan kecurangan kecil, apa yang akan Anda lakukan?",
          "Ceritakan situasi di mana Anda harus memilih antara kepentingan pribadi dan kepentingan perusahaan.",
          "Bagaimana Anda menghadapi godaan atau tekanan untuk melanggar aturan?"
        ]
      },
      {
        "priority": "Sedang",
        "priority_color": "#F39C12",
        "recommendation": "Konfirmasi Motivasi Bergabung",
        "objective": "Pastikan motivasi kandidat selaras dengan nilai dan budaya perusahaan.",
        "suggested_questions": [
          "Mengapa Anda tertarik dengan posisi ini?",
          "Apa yang Anda harapkan dari perusahaan ini dalam jangka panjang?",
          "Bagaimana posisi ini sesuai dengan rencana karir Anda?"
        ]
      }
    ]
  },
  "character_analysis": {
    "section_title": "3. Analisis Karakter Kandidat",
    "categories": [
      {
        "category": "Kedisiplinan",
        "assessment": "BAIK",
        "assessment_color": "#27AE60",
        "description": "Kandidat menunjukkan pola konsisten dalam memenuhi komitmen. Tidak ada catatan pengabaian atau keterlambatan dalam tanggung jawab.",
        "hr_insight": "Kandidat kemungkinan dapat diandalkan untuk tugas-tugas yang memerlukan ketepatan waktu dan konsistensi."
      },
      {
        "category": "Stabilitas",
        "assessment": "BAIK",
        "assessment_color": "#27AE60",
        "description": "Pola domisili dan kontak yang stabil menunjukkan kandidat memiliki kehidupan yang teratur dan tidak menghindari tanggung jawab.",
        "hr_insight": "Risiko 'hilang kontak' atau sulit dihubungi relatif rendah."
      },
      {
        "category": "Konsistensi",
        "assessment": "BAIK",
        "assessment_color": "#27AE60",
        "description": "Data menunjukkan perilaku yang konsisten tanpa fluktuasi ekstrem atau pola yang mencurigakan.",
        "hr_insight": "Kandidat cenderung dapat diprediksi perilakunya dan tidak menunjukkan tanda-tanda ketidakstabilan."
      },
      {
        "category": "Pengelolaan Beban",
        "assessment": "PERLU KLARIFIKASI",
        "assessment_color": "#F39C12",
        "description": "Terdapat indikasi kandidat sedang mengelola beberapa tanggung jawab. Meski semua dipenuhi dengan baik, penting untuk memahami kapasitas dan prioritasnya.",
        "hr_insight": "Gali lebih dalam saat wawancara mengenai bagaimana kandidat mengelola waktu dan prioritas."
      },
      {
        "category": "Transparansi",
        "assessment": "PERLU VERIFIKASI",
        "assessment_color": "#F39C12",
        "description": "Informasi pekerjaan terakhir memerlukan konfirmasi untuk memastikan keakuratan data yang disampaikan.",
        "hr_insight": "Lakukan verifikasi referensi untuk memastikan kandidat menyampaikan informasi yang akurat."
      }
    ]
  },
  "summary_verdict": {
    "section_title": "Kesimpulan",
    "verdict": "LAYAK DENGAN CATATAN",
    "verdict_color": "#F39C12",
    "summary_points": [
      {
        "type": "positive",
        "icon": "✓",
        "text": "Kandidat menunjukkan KEDISIPLINAN TINGGI dalam memenuhi komitmen"
      },
      {
        "type": "positive",
        "icon": "✓",
        "text": "STABILITAS PERILAKU baik dengan pola hidup yang teratur"
      },
      {
        "type": "positive",
        "icon": "✓",
        "text": "REKAM JEJAK BERSIH tanpa catatan negatif"
      },
      {
        "type": "neutral",
        "icon": "○",
        "text": "DIREKOMENDASIKAN untuk posisi operasional, IT, administrasi, dan marketing"
      },
      {
        "type": "warning",
        "icon": "⚠",
        "text": "PERLU KLARIFIKASI mengenai pengelolaan prioritas dan komitmen"
      },
      {
        "type": "warning",
        "icon": "⚠",
        "text": "EVALUASI LEBIH LANJUT untuk posisi dengan akses langsung ke aset atau otoritas pengadaan"
      }
    ],
    "final_note": "Keputusan akhir penerimaan harus mempertimbangkan hasil wawancara mendalam dan verifikasi referensi kerja."
  },
  "methodology_appendix": {
    "section_title": "Lampiran: Metode Analisis",
    "analysis_focus": [
      {
        "category": "Analisis Kedisiplinan",
        "description": "Menilai konsistensi kandidat dalam memenuhi komitmen dan tanggung jawab berdasarkan rekam jejak historis."
      },
      {
        "category": "Analisis Stabilitas",
        "description": "Mengevaluasi pola perpindahan domisili dan perubahan kontak untuk mengidentifikasi tingkat kestabilan hidup."
      },
      {
        "category": "Analisis Konsistensi Perilaku",
        "description": "Mengidentifikasi pola perilaku yang konsisten atau fluktuatif yang dapat mempengaruhi performa kerja."
      },
      {
        "category": "Analisis Risiko Perilaku",
        "description": "Mendeteksi pola atau indikator yang memerlukan perhatian khusus dalam konteks penempatan kerja."
      }
    ],
    "disclaimer": "Analisis ini berfokus pada pola karakter dan perilaku berdasarkan data riwayat yang tersedia. Laporan ini merupakan salah satu bahan pertimbangan dan tidak menggantikan penilaian langsung melalui proses wawancara."
  },
  "report_footer": {
    "generated_by": "ProofyLink.ai",
    "confidentiality_notice": "Laporan ini bersifat RAHASIA dan hanya untuk keperluan internal proses rekrutmen.",
    "usage_note": "Gunakan laporan ini sebagai pelengkap proses seleksi, bukan sebagai satu-satunya dasar keputusan."
  }
}
```
</details>



### Credibility Levels

Kredibilitas level ditentukan berdasarkan `credibility_score`:

| Level | Score Range | Description |
|---|---:|---|
| `A` | 81–100 | Sangat Baik - Risiko sangat rendah. |
| `B` | 61–80 | Baik - Risiko rendah. |
| `C` | 41–60 | Cukup - Risiko sedang. |
| `D` | 21–40 | Kurang - Risiko tinggi. |
| `E` | 0–20 | Sangat Kurang - Risiko sangat tinggi. |