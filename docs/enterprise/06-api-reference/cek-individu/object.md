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
  "timestamp": "2026-03-10T10:00:38.671Z",
  "credibilityScore": {
    "total": 55,
    "max": 100,
    "percentage": 55,
    "grade": {
      "letter": "D",
      "label": "Perlu Perhatian",
      "color": "#f97316"
    }
  },
  "pilars": {
    "lifeStability": {
      "score": 18,
      "maxScore": 25,
      "percentage": 72,
      "breakdown": {
        "addressStability": {
          "score": 2,
          "max": 8,
          "details": {
            "addressChanges": 4,
            "addressChangeScore": 2,
            "addressStabilityMonths": 4,
            "addressDurationScore": 0
          }
        },
        "employmentStability": {
          "score": 10,
          "max": 10,
          "details": {
            "jobChanges": 1,
            "analysisYears": 5,
            "jobChangesPerYear": 0.2,
            "jobChangeScore": 5,
            "sectorChanges": 1,
            "sectorScore": 5
          }
        },
        "contactStability": {
          "score": 4,
          "max": 4,
          "details": {
            "phoneNumbers": 1,
            "phoneScore": 2,
            "emailAddresses": 1,
            "emailScore": 2
          }
        },
        "demographicFactors": {
          "score": 2,
          "max": 3,
          "details": {
            "age": 33,
            "ageScore": 2,
            "education": "Bachelor Degree",
            "educationScore": 0
          }
        }
      }
    },
    "financialWisdom": {
      "score": 13,
      "maxScore": 25,
      "percentage": 52,
      "breakdown": {
        "creditUtilization": {
          "score": 0,
          "max": 7,
          "details": {
            "utilizationRatio": 98,
            "interpretation": "Critical"
          }
        },
        "pinjolBehavior": {
          "score": 6,
          "max": 8,
          "details": {
            "isPinjolUser": true,
            "pinjolContractRatio": 2,
            "activePinjol": 1,
            "pinjolRiskLevel": "Medium",
            "penalty": 0
          }
        },
        "creditDiversity": {
          "score": 4,
          "max": 5,
          "details": {
            "hasTraditionalCredit": false,
            "hasBankFacility": true,
            "providerTypeCount": 2,
            "contractTypes": [
              "P01",
              "P99"
            ]
          }
        },
        "obligationManagement": {
          "score": 3,
          "max": 5,
          "details": {
            "totalBalance": 607500000,
            "totalOverdue": 0,
            "overdueRatio": 0,
            "overdueScore": 3,
            "closedCredits": 0,
            "totalContracts": 58,
            "closedRatio": 0,
            "closedScore": 0
          }
        }
      }
    },
    "commitmentHistory": {
      "score": 10,
      "maxScore": 25,
      "percentage": 40,
      "breakdown": {
        "performingRatio": {
          "score": 10,
          "max": 10,
          "details": {
            "performingAccounts": 3,
            "totalAccounts": 3,
            "ratio": 100,
            "interpretation": "Excellent"
          }
        },
        "paymentPattern": {
          "score": 0,
          "max": 8,
          "details": {
            "consistentPerformer": 1,
            "consistencyRatio": 33,
            "patterns": {
              "consistent_performer": 1,
              "occasional_late": 0,
              "frequent_late": 1,
              "chronic_delinquent": 0,
              "escalating_risk": 0,
              "recovering": 1
            }
          }
        },
        "completionRate": {
          "score": 0,
          "max": 7,
          "details": {
            "lunasCount": 0,
            "totalCredits": 58,
            "completionRatio": 0
          }
        },
        "delinquencyPenalty": {
          "score": 0,
          "details": {
            "chronicDelinquent": 0,
            "chronicPenalty": 0,
            "everDelinquent": 1,
            "everDelinquentPenalty": 0,
            "totalPenalty": 0
          }
        }
      }
    },
    "behavioralPattern": {
      "score": 6,
      "maxScore": 15,
      "percentage": 40,
      "breakdown": {
        "dataConsistency": {
          "score": 4,
          "max": 5,
          "details": {
            "contactChanges": 2,
            "contactChangeScore": 3,
            "addressRecords": 4,
            "addressRecordScore": 1
          }
        },
        "behaviorTrends": {
          "score": 0,
          "max": 6,
          "details": {
            "totalTransitions": 3,
            "improvingTransitions": 1,
            "improvingRatio": 33,
            "trendScore": 1,
            "delinquencyFrequency": 33,
            "freqScore": -1
          }
        },
        "riskFactorBalance": {
          "score": 2,
          "max": 4,
          "details": {
            "positiveFactors": [
              "1 account(s) showing recovery pattern"
            ],
            "positiveCount": 1,
            "positiveScore": 1,
            "criticalFactors": [
              "Maximum days overdue: 105 days"
            ],
            "criticalCount": 1,
            "criticalScore": 1
          }
        }
      }
    },
    "resilienceRecovery": {
      "score": 8,
      "maxScore": 10,
      "percentage": 80,
      "breakdown": {
        "recoveryCapability": {
          "score": 5,
          "max": 5,
          "details": {
            "recoveredAccounts": 1,
            "everDelinquent": 1,
            "recoveryRatio": 100,
            "hadProblems": true
          }
        },
        "recoverySpeed": {
          "score": 1,
          "max": 3,
          "details": {
            "avgRecoveryMonths": 4,
            "interpretation": "Moderate"
          }
        },
        "currentTrajectory": {
          "score": 2,
          "max": 2,
          "details": {
            "activeCredits": 3,
            "delinquentNow": 0,
            "currentPerformingRatio": 100
          }
        }
      }
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
        "pilar": "Commitment History",
        "title": "Semua Akun Performing",
        "description": "100% akun dalam status baik"
      },
      {
        "pilar": "Resilience & Recovery",
        "title": "Kemampuan Recovery Baik",
        "description": "Mampu pulih dari kesulitan keuangan dengan baik"
      },
      {
        "pilar": "Resilience & Recovery",
        "title": "Recovery Excellent",
        "description": "Berhasil memulihkan sebagian besar akun bermasalah"
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
        "description": "Penggunaan kredit 98% dari limit - cukup tinggi",
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
    "current": 55,
    "potentialMin": 65,
    "potentialMax": 76
  }
}
```
</details>

#### use_case_analysis

Analisis kesesuaian customer dengan use case spesifik.

<details>
<summary><b>📂 Lihat contoh lengkap untuk use case 1: Rekrutment/Screening Karyawan</b></summary>
```json
{
  "report_metadata": {
    "report_title": "Hasil Analisis Kandidat",
    "provider": "ProofyLink.ai",
    "report_date": "27 Januari 2026",
    "use_case": 1
  },
  "candidate_data": {
    "name_placeholder": "[NAMA KANDIDAT]",
    "identity_masked": "3275****0003",
    "report_date": "27 Januari 2026",
    "age": 28,
    "gender": "Laki-laki",
    "education": "Sarjana (S1)",
    "marital_status": "Belum Menikah",
    "occupation": "Marketing",
    "financial_summary": {
      "installment_estimation": {
        "total_estimated_monthly_obligation": 334472,
        "active_installment_count": 1,
        "credit_card_count": 1,
        "credit_card_high_utilization": false
      },
      "credit_exposure": {
        "total_credit_limit": 619500000,
        "total_debit_balance": 607500000,
        "total_overdue": 0,
        "active_credits": 3,
        "closed_credits": 0,
        "requested_credits": 11,
        "utilization_ratio": 98,
        "pinjol_analysis": {
          "is_pinjol_user": true,
          "pinjol_confidence_level": "High",
          "total_pinjol_contracts": 1,
          "active_pinjol": 1,
          "closed_pinjol": 0
        }
      },
      "contact_address_analysis": {
        "address_changes": 3,
        "contact_changes": 2,
        "unique_phone_numbers": 1,
        "address_stability_months": 2,
        "stability_score": {
          "address": "Medium",
          "phone": "High"
        }
      }
    }
  },
  "overall_risk_score": {
    "level": "SEDANG",
    "label": "RISIKO SEDANG - Perlu Klarifikasi",
    "description": "Kandidat menunjukkan kedisiplinan yang baik dalam memenuhi komitmen, namun terdapat beberapa pola perilaku yang perlu diklarifikasi lebih lanjut.",
    "visual": {
      "scale": ["Rendah", "Sedang", "Tinggi"],
      "position": 2
    }
  },
  "quick_overview": {
    "section_title": "1. Hasil Analisis (Tinjauan Cepat)",
    "strengths": {
      "subsection_title": "A. Kekuatan (Strength)",
      "items": [
        {
          "title": "Kedisiplinan Tinggi",
          "description": "Kandidat konsisten dalam memenuhi komitmen dan kewajiban. Tidak ditemukan catatan pengabaian tanggung jawab."
        },
        {
          "title": "Rekam Jejak Bersih",
          "description": "Tidak ada catatan negatif atau pelanggaran komitmen sepanjang riwayat yang tercatat."
        },
        {
          "title": "Stabilitas Domisili",
          "description": "Alamat tempat tinggal relatif menetap dengan perpindahan minimal, menunjukkan kestabilan pola hidup."
        },
        {
          "title": "Konsistensi Data Kontak",
          "description": "Nomor telepon dan email yang digunakan konsisten, tidak menunjukkan pola penghindaran atau ketidakstabilan."
        }
      ]
    },
    "risk_areas": {
      "subsection_title": "B. Area yang Memerlukan Klarifikasi / Risiko Potensial",
      "items": [
        {
          "severity": "warning",
          "title": "Indikasi Beban Tanggung Jawab Tinggi",
          "description": "Pola aktivitas menunjukkan kandidat sedang mengelola beberapa tanggung jawab sekaligus. Perlu dipahami bagaimana kandidat memprioritaskan komitmen."
        },
        {
          "severity": "warning",
          "title": "Profil Perlu Pemahaman Lebih Lanjut",
          "description": "Beberapa indikator menunjukkan kandidat berada dalam kondisi yang memerlukan klarifikasi untuk memahami motivasi dan prioritasnya."
        },
        {
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
        "key_reason": "Pola kedisiplinan dan konsistensi yang baik mendukung peran yang membutuhkan ketelitian dan tanggung jawab individual."
      },
      {
        "job_field": "Administrasi / Back Office / Customer Service",
        "suitability": "TINGGI",
        "key_reason": "Rekam jejak yang bersih dan stabilitas perilaku sesuai dengan kebutuhan peran administratif."
      },
      {
        "job_field": "Marketing / Creative / Content",
        "suitability": "TINGGI",
        "key_reason": "Tidak ada indikator negatif yang menghalangi. Pola perilaku stabil dan dapat diandalkan."
      },
      {
        "job_field": "Sales / Business Development",
        "suitability": "SEDANG",
        "key_reason": "Cocok jika kandidat dapat menunjukkan kemampuan mengelola tekanan dan target. Perlu klarifikasi motivasi."
      },
      {
        "job_field": "Finance / Accounting / Audit",
        "suitability": "SEDANG",
        "key_reason": "Kedisiplinan baik, namun untuk posisi dengan akses ke sistem penting, perlu pemahaman lebih dalam tentang karakter kandidat."
      },
      {
        "job_field": "Kasir / Pengelola Inventaris / Aset",
        "suitability": "RENDAH",
        "key_reason": "Terdapat indikator yang memerlukan evaluasi lebih mendalam sebelum ditempatkan di posisi dengan akses langsung ke aset."
      },
      {
        "job_field": "Procurement / Purchasing",
        "suitability": "RENDAH",
        "key_reason": "Posisi dengan otoritas pengadaan memerlukan profil dengan indikator risiko yang lebih rendah."
      }
    ]
  },
  "screening_recommendations": {
    "section_title": "2. Rekomendasi Screening (Mitigasi Risiko)",
    "recommendations": [
      {
        "priority": "Tinggi",
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
        "description": "Kandidat menunjukkan pola konsisten dalam memenuhi komitmen. Tidak ada catatan pengabaian atau keterlambatan dalam tanggung jawab.",
        "hr_insight": "Kandidat kemungkinan dapat diandalkan untuk tugas-tugas yang memerlukan ketepatan waktu dan konsistensi."
      },
      {
        "category": "Stabilitas",
        "assessment": "BAIK",
        "description": "Pola domisili dan kontak yang stabil menunjukkan kandidat memiliki kehidupan yang teratur dan tidak menghindari tanggung jawab.",
        "hr_insight": "Risiko 'hilang kontak' atau sulit dihubungi relatif rendah."
      },
      {
        "category": "Konsistensi",
        "assessment": "BAIK",
        "description": "Data menunjukkan perilaku yang konsisten tanpa fluktuasi ekstrem atau pola yang mencurigakan.",
        "hr_insight": "Kandidat cenderung dapat diprediksi perilakunya dan tidak menunjukkan tanda-tanda ketidakstabilan."
      },
      {
        "category": "Pengelolaan Beban",
        "assessment": "PERLU KLARIFIKASI",
        "description": "Terdapat indikasi kandidat sedang mengelola beberapa tanggung jawab. Meski semua dipenuhi dengan baik, penting untuk memahami kapasitas dan prioritasnya.",
        "hr_insight": "Gali lebih dalam saat wawancara mengenai bagaimana kandidat mengelola waktu dan prioritas."
      },
      {
        "category": "Transparansi",
        "assessment": "PERLU VERIFIKASI",
        "description": "Informasi pekerjaan terakhir memerlukan konfirmasi untuk memastikan keakuratan data yang disampaikan.",
        "hr_insight": "Lakukan verifikasi referensi untuk memastikan kandidat menyampaikan informasi yang akurat."
      }
    ]
  },
  "summary_verdict": {
    "section_title": "Kesimpulan",
    "verdict": "LAYAK DENGAN CATATAN",
    "summary_points": [
      {
        "type": "positive",
        "text": "Kandidat menunjukkan KEDISIPLINAN TINGGI dalam memenuhi komitmen"
      },
      {
        "type": "positive",
        "text": "STABILITAS PERILAKU baik dengan pola hidup yang teratur"
      },
      {
        "type": "positive",
        "text": "REKAM JEJAK BERSIH tanpa catatan negatif"
      },
      {
        "type": "neutral",
        "text": "DIREKOMENDASIKAN untuk posisi operasional, IT, administrasi, dan marketing"
      },
      {
        "type": "warning",
        "text": "PERLU KLARIFIKASI mengenai pengelolaan prioritas dan komitmen"
      },
      {
        "type": "warning",
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
  }
}
```
</details>

<details>
<summary><b>📂 Lihat contoh lengkap untuk use case 2: Screening Sewa Mobil/Motor</b></summary>
```json
{
  "report_metadata": {
    "report_title": "Hasil Analisis Kandidat",
    "provider": "ProofyLink.ai",
    "report_date": "26 Januari 2026",
    "use_case": 2
  },
  "candidate_data": {
    "name_placeholder": "[NAMA KANDIDAT]",
    "identity_masked": "3275****0003",
    "age": 28,
    "gender": "Laki-laki",
    "education": "Sarjana (S1)",
    "marital_status": "Belum Menikah",
    "occupation": "Marketing",
    "financial_summary": {
      "installment_estimation": {
        "total_estimated_monthly_obligation": 334472,
        "active_installment_count": 1,
        "credit_card_count": 1,
        "credit_card_high_utilization": false
      },
      "credit_exposure": {
        "total_credit_limit": 619500000,
        "total_debit_balance": 607500000,
        "total_overdue": 0,
        "active_credits": 3,
        "closed_credits": 0,
        "requested_credits": 11,
        "utilization_ratio": 98,
        "pinjol_analysis": {
          "is_pinjol_user": true,
          "pinjol_confidence_level": "High",
          "total_pinjol_contracts": 1,
          "active_pinjol": 1,
          "closed_pinjol": 0
        }
      },
      "contact_address_analysis": {
        "address_changes": 3,
        "contact_changes": 2,
        "unique_phone_numbers": 1,
        "address_stability_months": 2,
        "stability_score": {
          "address": "Medium",
          "phone": "High"
        }
      }
    }
  },
  "overall_risk_score": {
    "level": "SEDANG",
    "label": "RISIKO SEDANG - PERLU JAMINAN TAMBAHAN",
    "description": "Penyewa memiliki kedisiplinan bayar yang sangat tinggi, namun beban keuangan saat ini berada di titik maksimal, sehingga ada risiko gangguan pembayaran jika sewa dilakukan dalam jangka panjang.",
    "visual": {
      "scale": ["Rendah", "Sedang", "Tinggi"],
      "position": 2
    }
  },
  "character_profile": {
    "section_title": "1. Profil Karakter Penyewa",
    "profile_type": "Penyewa Disiplin dengan Beban Tinggi",
    "description": "Seseorang yang sangat menghargai komitmen (selalu bayar tepat waktu), namun saat ini sedang memiliki banyak cicilan aktif yang menguras pendapatan.",
    "scores": {
      "integrity_score": {
        "label": "Skor Integritas",
        "value": 92,
        "max_value": 100
      },
      "financial_resilience": {
        "label": "Ketahanan Finansial",
        "value": 38,
        "max_value": 100
      }
    }
  },
  "quick_overview": {
    "section_title": "2. Hasil Analisis (Tinjauan Cepat)",
    "strengths": {
      "subsection_title": "A. Kekuatan (Strength)",
      "items": [
        {
          "number": 1,
          "title": "Kedisiplinan Tinggi",
          "description": "Semua fasilitas kredit berstatus Lancar (Kol-1). Sangat disiplin memenuhi kewajiban. Tidak ada catatan telat bayar dalam riwayat."
        },
        {
          "number": 2,
          "title": "Stabilitas Domisili",
          "description": "Alamat tempat tinggal relatif menetap dengan perpindahan minimal, menunjukkan kestabilan pola hidup dan mudah dilacak jika diperlukan."
        },
        {
          "number": 3,
          "title": "Rekam Jejak Bersih",
          "description": "Sangat Baik (Selalu Tepat Waktu). Tidak ada catatan pelanggaran atau keterlambatan pembayaran sepanjang riwayat yang tercatat."
        },
        {
          "number": 4,
          "title": "Konsistensi Data Kontak",
          "description": "Nomor telepon dan email yang digunakan konsisten, tidak menunjukkan pola penghindaran atau ketidakstabilan."
        }
      ]
    },
    "risk_areas": {
      "subsection_title": "B. Kelemahan (Weaknesses)",
      "items": [
        {
          "number": 1,
          "title": "Kehausan Kredit",
          "description": "Ada 11 permohonan kredit baru yang sedang diproses.",
          "warning": "Arti bagi Anda: Penyewa sedang mencari dana segar secara masif. Waspadai risiko unit dijadikan jaminan utang pihak lain."
        },
        {
          "number": 2,
          "title": "Beban Utang Maksimal",
          "description": "Pemakaian limit kartu kredit/pinjaman mencapai 88%.",
          "warning": "Arti bagi Anda: Penyewa hampir tidak memiliki sisa uang cadangan untuk biaya darurat atau ganti rugi kerusakan fisik kendaraan."
        },
        {
          "number": 3,
          "title": "Ketidaksesuaian Lokasi Kerja",
          "description": "Bekerja di sektor perkebunan tapi tinggal di kota."
        }
      ]
    },
    "primary_risks": {
      "subsection_title": "C. Risiko Utama",
      "items": [
        {
          "number": 1,
          "severity": "TINGGI",
          "title": "Risiko Keamanan Aset - TINGGI",
          "description": "Meskipun alamat stabil, terdapat 11 pengajuan pinjaman baru dalam waktu singkat (Agresivitas Pinjaman Tinggi).",
          "warning": "Peringatan: Pola ini sering menjadi indikasi kebutuhan uang mendesak, yang berisiko pada penyalahgunaan unit (misal: unit digadaikan)."
        }
      ]
    }
  },
  "predictions_recommendations": {
    "section_title": "3. Prediksi & Rekomendasi",
    "analysis_prediction": {
      "subsection_title": "Analisis Prediksi",
      "items": [
        {
          "category": "Peluang Bayar Lancar",
          "prediction": "Sangat Tinggi (untuk durasi jangka pendek)"
        },
        {
          "category": "Peluang Unit Kembali",
          "prediction": "90% (Mudah dilacak karena data domisili sangat jelas)"
        },
        {
          "category": "Risiko Kerusakan",
          "prediction": "Menengah (Potensi penggunaan jarak jauh/luar kota)"
        }
      ]
    },
    "rental_recommendations": {
      "subsection_title": "Rekomendasi Kelayakan Sewa",
      "items": [
        {
          "number": 1,
          "vehicle_type": "Motor",
          "suitability": "SANGAT LAYAK",
          "description": "Tanpa syarat tambahan."
        },
        {
          "number": 2,
          "vehicle_type": "Mobil Ekonomi (Agya/Brio)",
          "suitability": "LAYAK",
          "description": "Wajib jaminan identitas ganda."
        },
        {
          "number": 3,
          "vehicle_type": "Mobil Keluarga (Avanza/Xpander)",
          "suitability": "LAYAK DENGAN CATATAN",
          "description": "Wajib deposit 2x lipat dan pasang alat pelacak."
        },
        {
          "number": 4,
          "vehicle_type": "Mobil Mewah",
          "suitability": "TIDAK DISARANKAN",
          "description": "Risiko finansial penyewa terlalu tinggi untuk aset bernilai besar."
        }
      ]
    }
  },
  "asset_security_measures": {
    "section_title": "Langkah Pengamanan Aset",
    "items": [
      {
        "number": 1,
        "measure": "Verifikasi Rumah Aktif",
        "priority": "Wajib",
        "description": "Memastikan lokasi penyewa benar-benar sesuai untuk memudahkan penjemputan unit jika terjadi masalah."
      },
      {
        "number": 2,
        "measure": "Pembatasan Wilayah Digital (Geofencing)",
        "priority": "Tinggi",
        "description": "Memasang alarm digital jika mobil keluar dari batas kota yang ditentukan."
      },
      {
        "number": 3,
        "measure": "Sistem Pemutus Mesin Jarak Jauh",
        "priority": "Tinggi",
        "description": "Kendaraan harus bisa dimatikan lewat aplikasi jika terdeteksi dibawa kabur atau menunggak sewa."
      },
      {
        "number": 4,
        "measure": "Jaminan Identitas Ganda",
        "priority": "Wajib",
        "description": "Meminta KTP, NPWP, dan ID penjamin yang memiliki alamat tetap."
      }
    ]
  },
  "final_conclusion": {
    "section_title": "4. Kesimpulan Akhir",
    "recommendation": "SEWAKAN DENGAN PENGAWASAN KETAT",
    "summary": "Penyewa adalah orang jujur dan disiplin, namun kondisi keuangannya sedang 'sesak'. Aman untuk disewakan unit standar dengan syarat GPS aktif dan deposit yang memadai."
  }
}
```
</details>

<details>
<summary><b>📂 Lihat contoh lengkap untuk use case 3: Verifikasi Calon Pelanggan/Mitra</b></summary>
```json
{
  "report_metadata": {
    "report_title": "Hasil Analisis Karakter Calon Pelanggan",
    "provider": "ProofyLink.ai",
    "report_date": "23 Februari 2026",
    "use_case": 3
  },
  "candidate_data": {
    "name_placeholder": "[NAMA CALON PELANGGAN]",
    "identity_masked": "3275****0003",
    "report_date": "23 Februari 2026",
    "age": 33,
    "gender": "Laki-laki",
    "education": "Sarjana (S1)",
    "marital_status": "Belum Menikah",
    "occupation": "Marketing",
    "financial_summary": {
      "installment_estimation": {
        "total_estimated_monthly_obligation": 334472,
        "active_installment_count": 1,
        "credit_card_count": 1,
        "credit_card_high_utilization": false
      },
      "credit_exposure": {
        "total_credit_limit": 619500000,
        "total_debit_balance": 607500000,
        "total_overdue": 0,
        "active_credits": 3,
        "closed_credits": 0,
        "requested_credits": 11,
        "utilization_ratio": 98,
        "pinjol_analysis": {
          "is_pinjol_user": true,
          "pinjol_confidence_level": "High",
          "total_pinjol_contracts": 1,
          "active_pinjol": 1,
          "closed_pinjol": 0
        }
      },
      "contact_address_analysis": {
        "address_changes": 3,
        "contact_changes": 2,
        "unique_phone_numbers": 1,
        "address_stability_months": 2,
        "stability_score": {
          "address": "Medium",
          "phone": "High"
        }
      }
    }
  },
  "overall_risk_score": {
    "level": "TINGGI",
    "label": "RISIKO TINGGI – Profil Tekanan Tinggi",
    "description": "Calon pelanggan menunjukkan pola perilaku yang mengindikasikan tekanan hidup yang signifikan saat ini. Riwayat menunjukkan kecenderungan mengabaikan komitmen di waktu tertentu dan pencarian solusi instan yang masif.",
    "visual": {
      "scale": ["Rendah", "Sedang", "Tinggi"],
      "position": 3
    }
  },
  "customer_profile": {
    "section_title": "1. Profil Karakter Calon Pelanggan",
    "profile_type": "Pelanggan dengan Tekanan Komitmen Ekstrem",
    "description": "Seseorang yang saat ini terlihat sedang berusaha menyelesaikan berbagai masalah secara bersamaan. Pola perilakunya menunjukkan agresivitas tinggi dalam mencari solusi instan, yang seringkali berujung pada pengabaian komitmen jangka panjang.",
    "scores": {
      "commitment_discipline": {
        "label": "Disiplin Komitmen",
        "value": 20,
        "max_value": 100
      },
      "life_stability": {
        "label": "Stabilitas Hidup",
        "value": 45,
        "max_value": 100
      },
      "behavioral_consistency": {
        "label": "Konsistensi Perilaku",
        "value": 15,
        "max_value": 100
      }
    }
  },
  "quick_overview": {
    "section_title": "2. Hasil Analisis (Tinjauan Cepat)",
    "strengths": {
      "subsection_title": "A. Sisi Positif (Kekuatan)",
      "items": [
        {
          "title": "Tidak Lari dari Tanggung Jawab Saat Ini",
          "description": "Meskipun memiliki beban berat, profil menunjukkan upaya untuk memperbaiki keadaan. Saat ini tidak ada komitmen aktif yang diabaikan sepenuhnya."
        },
        {
          "title": "Keterbukaan Komunikasi",
          "description": "Konsisten menggunakan jalur komunikasi yang sama (nomor telepon & email). Menunjukkan tidak ada upaya bersembunyi atau memutuskan kontak secara sengaja."
        }
      ]
    },
    "risk_areas": {
      "subsection_title": "B. Area Kritis (Perlu Kewaspadaan)",
      "items": [
        {
          "severity": "critical",
          "title": "Sinyal Kepanikan Situasional",
          "description": "Terdeteksi puluhan aktivitas baru yang menunjukkan pencarian komitmen secara instan dan masif. Ini adalah sinyal merah kepanikan atau kebutuhan mendesak yang belum terselesaikan.",
          "warning": "Arti bagi Anda: Pelanggan sangat mungkin menyalahgunakan fasilitas atau produk Anda sebagai jalan keluar sementara."
        },
        {
          "severity": "critical",
          "title": "Kapasitas Komitmen Telah Melampaui Batas",
          "description": "Pola aktivitas menunjukkan bahwa beban tanggung jawab yang dipikul saat ini sudah mencapai titik puncak kemampuannya (hampir 100% dari kapasitas).",
          "warning": "Arti bagi Anda: Menambahkan komitmen baru (misal: langganan atau tagihan bulanan) ke pelanggan ini kemungkinan besar berujung pada kegagalan."
        },
        {
          "severity": "warning",
          "title": "Riwayat Pengabaian Komitmen Jangka Panjang",
          "description": "Terdapat pola berulang di masa lalu di mana pelanggan mengabaikan tanggung jawabnya hingga lebih dari 3 bulan sebelum akhirnya diselesaikan.",
          "warning": "Arti bagi Anda: Bersiaplah untuk proses penagihan yang alot dan melelahkan jika Anda memberikan layanan berbasis janji bayar."
        },
        {
          "severity": "warning",
          "title": "Perilaku Musiman yang Fluktuatif",
          "description": "Data historis menunjukkan pelanggan ini sangat rentan gagal memenuhi janji pada periode tertentu (khususnya akhir tahun)."
        }
      ]
    },
    "primary_risks": {
      "subsection_title": "C. Ringkasan Risiko Bisnis",
      "items": [
        {
          "severity": "TINGGI",
          "title": "Risiko Wanprestasi Janji Berkelanjutan",
          "description": "Kemungkinan sangat tinggi pelanggan tidak akan menetapi janji pembayaran atau komitmen rutin yang dibuat hari ini."
        },
        {
          "severity": "SEDANG",
          "title": "Risiko Eksploitasi Promosi / Layanan",
          "description": "Kondisi tertekan dapat mendorong pelanggan untuk mengeksploitasi celah layanan, promo, atau trial tanpa niat menjadi pelanggan jangka panjang."
        }
      ]
    }
  },
  "customer_suitability": {
    "section_title": "3. Tingkat Kecocokan Karakter untuk Model Bisnis",
    "matrix": [
      {
        "service_model": "Transaksi Tunai / Pembayaran Penuh di Depan",
        "suitability": "LAYAK",
        "key_reason": "Risiko ditanggung sepenuhnya oleh pelanggan. Aman untuk bisnis Anda karena tidak ada elemen janji bayar."
      },
      {
        "service_model": "COD (Cash on Delivery)",
        "suitability": "LAYAK DENGAN CATATAN",
        "key_reason": "Terdapat risiko pengembalian barang secara sepihak jika kondisi situasional pelanggan mendadak berubah saat barang tiba."
      },
      {
        "service_model": "Langganan Bulanan (Subscription)",
        "suitability": "TIDAK DISARANKAN",
        "key_reason": "Pola komitmen yang buruk tidak mendukung model bisnis yang mengandalkan pembayaran rutin otomatis."
      },
      {
        "service_model": "Bayar Nanti / Cicilan (Paylater/Kredit)",
        "suitability": "TOLAK",
        "key_reason": "Kapasitas komitmen sudah habis dan ada indikasi kepanikan. Sangat berbahaya memberikan fasilitas janji bayar."
      }
    ]
  },
  "engagement_recommendations": {
    "section_title": "4. Strategi Interaksi & Mitigasi Risiko",
    "recommendations": [
      {
        "priority": "Kritis",
        "recommendation": "Tutup Semua Jalur Layanan Berbasis Janji",
        "objective": "Lindungi bisnis dari pelanggan yang sudah kehilangan kapasitas untuk menepati komitmen baru.",
        "suggested_actions": [
          "Nonaktifkan opsi pembayaran tempo, cicilan, atau tagihan pascabayar.",
          "Wajibkan pembayaran penuh di muka untuk semua jenis transaksi."
        ]
      },
      {
        "priority": "Tinggi",
        "recommendation": "Waspadai Perilaku Spekulatif",
        "objective": "Mencegah pelanggan memanfaatkan celah layanan untuk keuntungan instan.",
        "suggested_actions": [
          "Perketat aturan pengembalian dana (refund policy) untuk pelanggan ini.",
          "Pantau ketat jika pelanggan mencoba memesan layanan premium dengan mekanisme trial gratis."
        ]
      },
      {
        "priority": "Sedang",
        "recommendation": "Verifikasi Ulang Niat Transaksi (Intent Verification)",
        "objective": "Memastikan pesanan yang masuk bukan karena dorongan impulsif atau kepanikan.",
        "suggested_actions": [
          "Untuk model bisnis COD, hubungi pelanggan secara langsung sebelum pengiriman dilakukan.",
          "Gunakan metode konfirmasi ganda pada checkout."
        ]
      }
    ]
  },
  "character_analysis": {
    "section_title": "5. Analisis Perilaku & Karakter",
    "categories": [
      {
        "category": "Kedisiplinan",
        "assessment": "BURUK",
        "description": "Memiliki kebiasaan menunda penyelesaian tanggung jawab hingga batas toleransi yang sangat lama.",
        "business_insight": "Jangan berharap pelanggan ini akan merespons tagihan atau peringatan pertama dengan cepat."
      },
      {
        "category": "Pengendalian Diri",
        "assessment": "BURUK",
        "description": "Menunjukkan perilaku spekulatif atau agresif yang tidak wajar (pencarian puluhan solusi instan dalam waktu singkat).",
        "business_insight": "Pelanggan ini sedang tidak rasional. Keputusan transaksinya sangat mungkin didorong oleh keputusasaan."
      },
      {
        "category": "Kapasitas Komitmen",
        "assessment": "HABIS",
        "description": "Beban komitmen yang sudah ada mengambil 98% dari kemampuannya. Tidak ada sisa tenaga/ruang untuk komitmen tambahan.",
        "business_insight": "Pemberian fasilitas baru pasti akan mengorbankan salah satu komitmen lamanya, atau fasilitas dari Anda yang akan dikorbankan."
      },
      {
        "category": "Stabilitas Hidup",
        "assessment": "MENURUN",
        "description": "Data menunjukkan beberapa kali perpindahan alamat dalam waktu singkat, mengindikasikan fase hidup yang tidak menentu.",
        "business_insight": "Tingkat keterlacakan (traceability) pelanggan ini di masa depan cukup berisiko."
      }
    ]
  },
  "summary_verdict": {
    "section_title": "Kesimpulan",
    "verdict": "HINDARI LAYANAN BERBASIS JANJI",
    "severity": "TINGGI",
    "summary_points": [
      {
        "type": "negative",
        "text": "TOLAK untuk semua layanan cicilan, bayar nanti, dan berlangganan rutin."
      },
      {
        "type": "warning",
        "text": "KAPASITAS HABIS – Pelanggan sudah tidak memiliki ruang untuk menambah tanggung jawab baru."
      },
      {
        "type": "warning",
        "text": "SINYAL KEPANIKAN – Terlihat pola agresif mencari solusi instan yang berpotensi mengeksploitasi layanan Anda."
      },
      {
        "type": "warning",
        "text": "POLA PENGABAIAN – Riwayat menunjukkan kebiasaan menunda penyelesaian tanggung jawab lebih dari 3 bulan."
      },
      {
        "type": "positive",
        "text": "TERIMA HANYA JIKA pelanggan membayar lunas di depan tanpa syarat."
      }
    ],
    "final_note": "Pelanggan ini sedang berada dalam fase tekanan komitmen yang sangat tinggi. Pendekatan bisnis harus sangat defensif dan menghindari segala bentuk eksposur risiko (tanpa janji bayar)."
  }
}
```
</details>

<details>
<summary><b>📂 Lihat contoh lengkap untuk use case 4: Screening Tenant (Kos/Kontrakan)</b></summary>
```json
{
  "report_metadata": {
    "report_title": "Hasil Analisis Karakter Calon Penyewa",
    "provider": "ProofyLink.ai",
    "report_date": "24 Februari 2026",
    "use_case": 4
  },
  "candidate_data": {
    "name_placeholder": "[NAMA CALON PENYEWA]",
    "identity_masked": "3275****0003",
    "report_date": "24 Februari 2026",
    "age": 33,
    "gender": "Laki-laki",
    "education": "Sarjana (S1)",
    "marital_status": "Belum Menikah",
    "occupation": "Marketing",
    "financial_summary": {
      "installment_estimation": {
        "total_estimated_monthly_obligation": 334472,
        "active_installment_count": 1,
        "credit_card_count": 1,
        "credit_card_high_utilization": false
      },
      "credit_exposure": {
        "total_credit_limit": 619500000,
        "total_debit_balance": 607500000,
        "total_overdue": 0,
        "active_credits": 3,
        "closed_credits": 0,
        "requested_credits": 11,
        "utilization_ratio": 98,
        "pinjol_analysis": {
          "is_pinjol_user": true,
          "pinjol_confidence_level": "High",
          "total_pinjol_contracts": 1,
          "active_pinjol": 1,
          "closed_pinjol": 0
        }
      },
      "contact_address_analysis": {
        "address_changes": 3,
        "contact_changes": 2,
        "unique_phone_numbers": 1,
        "address_stability_months": 2,
        "stability_score": {
          "address": "Medium",
          "phone": "High"
        }
      }
    }
  },
  "overall_risk_score": {
    "level": "TINGGI",
    "label": "RISIKO TINGGI – Profil Komitmen Rentan & Domisili Berubah-ubah",
    "description": "Calon penyewa menunjukkan beban tanggungan yang telah mencapai batas maksimal dan riwayat perpindahan tempat tinggal yang tinggi. Risiko keterlambatan bayar sewa dan kemungkinan meninggalkan properti secara sepihak tergolong sangat besar.",
    "visual": {
      "scale": ["Rendah", "Sedang", "Tinggi"],
      "position": 3
    }
  },
  "tenant_profile": {
    "section_title": "1. Profil Karakter Calon Penyewa",
    "profile_type": "Penyewa dengan Kapasitas Terbatas & Mobilitas Tinggi",
    "description": "Seseorang yang saat ini terlihat memiliki tanggung jawab yang melampaui kapasitas idealnya. Pola perilakunya menunjukkan gaya hidup yang tidak menetap dan kecenderungan menunda pemenuhan komitmen jangka panjang saat berada di bawah tekanan.",
    "scores": {
      "rent_discipline_score": {
        "label": "Disiplin Pemenuhan Komitmen",
        "value": 20,
        "max_value": 100
      },
      "residential_stability_score": {
        "label": "Stabilitas Hunian",
        "value": 15,
        "max_value": 100
      },
      "commitment_capacity_score": {
        "label": "Kapasitas Komitmen Tersisa",
        "value": 8,
        "max_value": 100
      }
    }
  },
  "quick_overview": {
    "section_title": "2. Hasil Analisis (Tinjauan Cepat)",
    "strengths": {
      "subsection_title": "A. Sisi Positif (Kekuatan)",
      "items": [
        {
          "title": "Keterbukaan Data Kontak",
          "description": "Menggunakan jalur komunikasi yang konsisten (hanya 1 nomor HP & 1 email utama tercatat). Tidak menunjukkan pola menyembunyikan identitas atau sering mengganti nomor kontak untuk menghindari penagihan."
        },
        {
          "title": "Identitas Tervalidasi Sistem Formal",
          "description": "Tercatat memiliki riwayat dan fasilitas aktif di lembaga perbankan utama tier-1. Ini memastikan bahwa identitas dasar (KTP) penyewa telah melewati proses verifikasi (KYC) perbankan resmi dan bukan identitas fiktif."
        }
      ]
    },
    "risk_areas": {
      "subsection_title": "B. Area Kritis (Perlu Kewaspadaan Landlord)",
      "items": [
        {
          "severity": "critical",
          "title": "Stabilitas Domisili Sangat Rendah",
          "description": "Terdeteksi riwayat perpindahan alamat tempat tinggal hingga 4 kali dalam periode observasi. Domisili terakhir baru tercatat aktif selama 3 bulan.",
          "warning": "Arti bagi Anda: Calon penyewa ini memiliki riwayat menetap yang singkat. Risiko 'pindah mendadak' di tengah masa sewa sangat tinggi."
        },
        {
          "severity": "critical",
          "title": "Kapasitas Menanggung Beban Telah Habis",
          "description": "Pola aktivitas menunjukkan calon penyewa sedang menanggung komitmen aktif (98% utilisasi) yang menyita hampir seluruh kapasitas rasionalnya.",
          "warning": "Arti bagi Anda: Uang sewa properti Anda kemungkinan besar akan tertunda jika penyewa menghadapi pengeluaran darurat sekecil apapun."
        },
        {
          "severity": "warning",
          "title": "Riwayat Penundaan Kewajiban Ekstrem",
          "description": "Terdapat rekam jejak membiarkan tanggungan terbengkalai secara berkepanjangan hingga lebih dari 3 bulan (100+ hari) sebelum akhirnya diselesaikan.",
          "warning": "Arti bagi Anda: Anda harus siap menghadapi kemungkinan tertundanya pembayaran berbulan-bulan jika penyewa ini mulai menunggak."
        },
        {
          "severity": "warning",
          "title": "Sinyal Pencarian Solusi Likuiditas Instan",
          "description": "Terdeteksi puluhan aktivitas (49 pengajuan) mencari bantuan fasilitas finansial baru secara masif dan agresif dalam waktu singkat.",
          "warning": "Arti bagi Anda: Penyewa mungkin sedang mencari tempat tinggal karena terdesak situasi finansial, bukan berdasarkan perencanaan yang matang."
        },
        {
          "severity": "warning",
          "title": "Risiko Keterlambatan Musiman",
          "description": "Data historis mencatat tren kegagalan menepati janji yang sangat tinggi (mencapai 100%) pada kuartal akhir tahun (November - Desember).",
          "warning": "Arti bagi Anda: Kewaspadaan ekstra diperlukan menjelang akhir tahun jika Anda menyewakan properti kepadanya."
        }
      ]
    },
    "primary_risks": {
      "subsection_title": "C. Ringkasan Risiko Properti",
      "items": [
        {
          "severity": "SANGAT TINGGI",
          "title": "Risiko Menunggak Uang Sewa Jangka Panjang",
          "description": "Kapasitas finansial yang habis dipadukan dengan riwayat penundaan panjang membuat probabilitas gagal bayar sewa sangat nyata."
        },
        {
          "severity": "TINGGI",
          "title": "Risiko Properti Ditinggalkan Sepihak (Hit and Run)",
          "description": "Gaya hidup berpindah-pindah memperbesar kemungkinan penyewa meninggalkan properti diam-diam jika merasa tertekan oleh tunggakan."
        }
      ]
    }
  },
  "property_suitability": {
    "section_title": "3. Tingkat Kecocokan untuk Jenis Properti",
    "matrix": [
      {
        "property_type": "Kost Harian / Mingguan",
        "suitability": "LAYAK",
        "key_reason": "Pembayaran lunas di depan dengan siklus pendek memitigasi seluruh risiko komitmen jangka panjang. Sesuai dengan gaya hidupnya yang nomaden."
      },
      {
        "property_type": "Kost Bulanan Standar",
        "suitability": "TIDAK DISARANKAN",
        "key_reason": "Sangat berisiko untuk komitmen bulanan yang berkelanjutan tanpa jaminan deposit yang besar."
      },
      {
        "property_type": "Kontrakan / Sewa Rumah Tahunan",
        "suitability": "TOLAK",
        "key_reason": "Riwayat mobilitas yang sering (4x pindah alamat) sangat bertolak belakang dengan sifat sewa rumah tahunan."
      },
      {
        "property_type": "Apartemen Mewah / Properti High-Value",
        "suitability": "TOLAK MUTLAK",
        "key_reason": "Beban kapasitas penyewa saat ini sama sekali tidak mendukung kewajiban pemeliharaan dan sewa properti bernilai tinggi."
      }
    ]
  },
  "contract_security_measures": {
    "section_title": "4. Strategi Kontrak & Pengamanan Landlord",
    "recommendations": [
      {
        "priority": "Kritis",
        "recommendation": "Wajibkan Pembayaran Lunas di Depan",
        "objective": "Menghilangkan risiko penyewa menunggak di tengah periode berjalan.",
        "suggested_actions": [
          "Tolak tegas segala bentuk negosiasi 'bayar separuh dulu' atau 'sisanya minggu depan'.",
          "Berikan kunci hanya setelah uang sewa diterima penuh (100%)."
        ]
      },
      {
        "priority": "Kritis",
        "recommendation": "Pungut Uang Jaminan (Security Deposit) Ekstra",
        "objective": "Sebagai pelindung (buffer) jika penyewa tiba-tiba pergi diam-diam meninggalkan tagihan atau kerusakan.",
        "suggested_actions": [
          "Terapkan deposit minimal setara 1 hingga 2 bulan nilai sewa.",
          "Jangan gunakan deposit sebagai pengganti uang sewa bulan terakhir."
        ]
      },
      {
        "priority": "Tinggi",
        "recommendation": "Sertakan Klausul Tegas Pemutusan Kontrak",
        "objective": "Memberi landasan hukum bagi pemilik properti untuk mengambil tindakan jika penyewa mulai menunggak.",
        "suggested_actions": [
          "Cantumkan aturan tertulis: 'Keterlambatan bayar lebih dari 7 hari memberi hak pemilik untuk mengganti gembok atau memutus utilitas (listrik/air)'.",
          "Minta tanda tangan persetujuan penyewa di atas materai."
        ]
      },
      {
        "priority": "Sedang",
        "recommendation": "Catat Kontak Darurat yang Tervalidasi",
        "objective": "Langkah mitigasi mengingat profil mobilitas tinggi dari calon penyewa.",
        "suggested_actions": [
          "Wajibkan penyertaan kontak keluarga inti (Orang tua/Saudara kandung).",
          "Lakukan *test call* (verifikasi singkat) ke nomor darurat sebelum penandatanganan kontrak."
        ]
      }
    ]
  },
  "character_analysis": {
    "section_title": "5. Analisis Karakter Berbasis Data",
    "categories": [
      {
        "category": "Kapasitas Komitmen",
        "assessment": "SANGAT MINIM",
        "description": "Beban kewajiban di tempat lain sudah menyita hampir 100% kapasitas rasionalnya.",
        "landlord_insight": "Jika Anda menyewakan properti ini kepadanya, uang sewa Anda kemungkinan besar bukan prioritas utamanya saat tanggal jatuh tempo tiba."
      },
      {
        "category": "Kestabilan Tempat Tinggal",
        "assessment": "NOMADEN",
        "description": "Sangat sering berpindah alamat (tercatat 4 kali perubahan). Tidak menunjukkan rekam jejak menetap yang solid.",
        "landlord_insight": "Penyewa ini berpotensi pindah mendadak jika menemukan tempat yang lebih murah atau saat merasa tertekan oleh tagihan."
      },
      {
        "category": "Ketahanan Menepati Janji",
        "assessment": "SANGAT RENDAH",
        "description": "Riwayat historis memperlihatkan ketidakmampuan menahan tekanan komitmen, sering berujung pada penundaan lebih dari 3 bulan.",
        "landlord_insight": "Jika penyewa ini berjanji 'minggu depan pasti saya bayar', probabilitas janji itu ditepati tepat waktu sangat kecil."
      }
    ]
  },
  "summary_verdict": {
    "section_title": "Kesimpulan Landlord",
    "verdict": "SANGAT BERISIKO – HINDARI KONTRAK JANGKA PANJANG",
    "severity": "TINGGI",
    "summary_points": [
      {
        "type": "negative",
        "text": "TOLAK PENYEWAAN untuk skema bulanan tanpa deposit besar atau skema tahunan."
      },
      {
        "type": "warning",
        "text": "RISIKO PINDAH MENDADAK TINGGI – Profil domisili berpindah-pindah dipadu dengan tekanan beban yang maksimal."
      },
      {
        "type": "warning",
        "text": "POTENSI PENAGIHAN ALOT – Riwayat menunjukkan pengabaian tanggung jawab bisa berlangsung sangat lama."
      },
      {
        "type": "positive",
        "text": "IDENTITAS VALID – KTP terdaftar di perbankan utama, meminimalisir risiko penyewa fiktif."
      },
      {
        "type": "neutral",
        "text": "TERIMA HANYA JIKA skema Harian/Mingguan dengan syarat BAYAR PENUH DI DEPAN."
      }
    ],
    "final_note": "Menyewakan properti kepada kandidat ini membutuhkan kewaspadaan ekstra dan tenaga untuk menagih. Jika Anda mencari penyewa pasif yang tenang dan tertib, disarankan untuk mencari kandidat lain."
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