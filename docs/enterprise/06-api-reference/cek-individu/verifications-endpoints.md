---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# API Endpoints

Gunakan endpoint berikut ini untuk mengelola proses verifikasi/screening individu.

## Cek Data Individu (Consent Digital)
Membuat permintaan verifikasi baru dengan metode persetujuan via email.

**Endpoint:**
<span className="badge-http post">POST</span> `{{base_url}}/api/v1/external/verifications/email-consent`

**Headers:**
| Key | Value | Deskripsi |
| :--- | :--- | :--- |
| Authorization | Bearer YOUR_ACCESS_TOKEN | Token integrasi Proofylink |

**Body:**
| Nama | Tipe Data | Contoh | Deskripsi |
| :--- | :--- | :--- |  :--- |
| verification_type_id | integer | 1: Rekrutment/Screening Karyawan <br/> 2: Screening Sewa Mobil/Motor <br/> 3: Verifikasi Calon Pelanggan/Mitra <br/> 4: Screening Tenant (Kos/Kontrakan) | Tipe Verifikasi / Screening |
| id_number | string | 1234567890123456 | NIK (16 digit) |
| full_name | string | John Doe | Nama Lengkap |
| email | string | john.doe@gmail.com | Email |
| phone_number | string | 6289123456789 | Nomor telepon dengan prefix 62 |
| ktp_image | file | 1234567890123456 | Foto KTP dengan ukuran maksimal 4 MB |

**Response:**
<Tabs>
  <TabItem value="201" label={<span className="tab-200">201 - Created</span>}>
  ```json
  {
      "status": "success",
      "message": "Verification created successfully.",
      "data": {
        "reference_code": "EMP-260211-7874",
        "status": "ocr_verification",
        "consent_method": "email",
        "created_at": "2026-02-11T10:27:41.000000Z"
      }
  }
  ```
  </TabItem>
  <TabItem value="400" label={<span className="tab-400">400 - Request Error</span>}>
  ```json
  {
    "status": "fail",
    "message": "Insufficient token balance"
  }
  ```
  </TabItem>
  <TabItem value="404" label={<span className="tab-400">404 - Not Found</span>}>
  ```json
  {
    "status": "fail",
    "message": "Data not found"
  }
  ```
  </TabItem>
  <TabItem value="422" label={<span className="tab-400">422 - Validation Error</span>}>
  ```json
  {
    "status": "fail",
    "message": "id number harus berisi 16 karakter.",
    "errors": {
      "id_number": [
          "id number harus berisi 16 karakter."
      ],
      "email": [
          "Format email tidak valid."
      ]
    }
  }
  ```
  </TabItem>
  <TabItem value="500" label={<span className="tab-500">500 - Internal Error</span>}>
  ```json
  {
    "status": "error",
    "message": "An error occurred while creating verification."
  }
  ```
  </TabItem>
</Tabs>

---

## Cek Data Individu (Consent Manual Upload)
Membuat verifikasi dengan mengunggah dokumen persetujuan secara manual.

**Endpoint:**
<span className="badge-http post">POST</span> `{{base_url}}/api/v1/external/verifications/upload-consent`

**Headers:**
| Key | Value | Deskripsi |
| :--- | :--- | :--- |
| Authorization | Bearer YOUR_ACCESS_TOKEN | Token integrasi Proofylink |

**Body:**
| Nama | Tipe Data | Contoh | Deskripsi |
| :--- | :--- | :--- |  :--- |
| verification_type_id | integer | 1: Rekrutment/Screening Karyawan <br/> 2: Test | Tipe Verifikasi / Screening |
| id_number | string | 1234567890123456 | NIK (16 digit) |
| full_name | string | John Doe | Nama Lengkap |
| email | string | john.doe@gmail.com | Email |
| phone_number | string | 6289123456789 | Nomor telepon dengan prefix 62 |
| ktp_image | file |  | Foto KTP dengan ukuran maksimal 4 MB |
| form_consent | file |  | Form Consent dengan ukuran maksimal 10 MB |

**Response:**
<Tabs>
  <TabItem value="201" label={<span className="tab-200">201 - Created</span>}>
  ```json
  {
    "status": "success",
    "message": "Verification created successfully.",
    "data": {
      "reference_code": "EMP-260211-7874",
      "status": "ocr_verification",
      "consent_method": "signed_document",
      "created_at": "2026-02-11T10:27:41.000000Z"
    }
  }
  ```
  </TabItem>
  <TabItem value="400" label={<span className="tab-400">400 - Request Error</span>}>
  ```json
  {
    "status": "fail",
    "message": "Insufficient token balance"
  }
  ```
  </TabItem>
  <TabItem value="404" label={<span className="tab-400">404 - Not Found</span>}>
  ```json
  {
    "status": "fail",
    "message": "Data not found"
  }
  ```
  </TabItem>
  <TabItem value="422" label={<span className="tab-400">422 - Validation Error</span>}>
  ```json
  {
    "status": "fail",
    "message": "id number harus berisi 16 karakter.",
    "errors": {
      "id_number": [
          "id number harus berisi 16 karakter."
      ],
      "email": [
          "Format email tidak valid."
      ]
    }
  }
  ```
  </TabItem>
  <TabItem value="500" label={<span className="tab-500">500 - Internal Error</span>}>
  ```json
  {
    "status": "error",
    "message": "An error occurred while creating verification."
  }
  ```
  </TabItem>
</Tabs>

---

## Riwayat Cek

**Endpoint:**
<span className="badge-http get">GET</span> `{{base_url}}/api/v1/external/verifications`

**Headers:**
| Key | Value | Deskripsi |
| :--- | :--- | :--- |
| Authorization | Bearer YOUR_ACCESS_TOKEN | Token integrasi Proofylink |

**Query Params:**
| Nama | Tipe | Contoh | Deskripsi |
| :--- | :--- | :--- | :--- |
| q | string | andi | Keyword pencarian |
| page | number | 1 | Nomor halaman  |
| per_page | number | 10 | Jumlah data perhalaman |

**Response:**
<Tabs>
  <TabItem value="200" label={<span className="tab-200">200 - Success</span>}>
  ```json
  {
    "status": "success",
    "message": "Verifications retrieved successfully.",
    "data": [
      {
        "reference_code": "EMP-260212-5406",
        "verification_type_name": "Rekrutment/Screening Karyawan",
        "status": "completed",
        "customer_name": "MIRA SETIAWAN",
        "customer_id_number": "3171********0123",
        "final_decision": null,
        "created_at": "2026-02-12T10:23:00.000000Z",
        "updated_at": "2026-02-12T10:23:11.000000Z",
        "credibility_score": 53,
        "credibility_level": "D"
      },
      {
        ...
      },
      {
        ...
      }
    ],
    "links": {
      "first": "https://example.test/api/v1/external/verifications?page=1",
      "last": "https://example.test/api/v1/external/verifications?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "path": "https://example.test/api/v1/external/verifications",
      "per_page": 50,
      "to": 1,
      "total": 1,
      "q": ""
    }
  }
  ```
  </TabItem>
  <TabItem value="404" label={<span className="tab-400">400 - Not Found</span>}>
  ```json
  {
    "status": "fail",
    "message": "Data not found.",
  }
  ```
  </TabItem>
  <TabItem value="500" label={<span className="tab-500">500 - Internal Error</span>}>
  ```json
  {
    "status": "error",
    "message": "An error occurred while retrieving verification."
  }
  ```
  </TabItem>
</Tabs>

---

## Detail Hasil dan Analisa
Melihat detail verifikasi berdasarkan kode referensi.

**Endpoint:**
<span className="badge-http get">GET</span> `{{base_url}}/api/v1/external/verifications/:reference_code`

**Headers:**
| Key | Value | Deskripsi |
| :--- | :--- | :--- |
| Authorization | Bearer YOUR_ACCESS_TOKEN | Token integrasi Proofylink |

**Path Params:**
| Nama | Tipe | Contoh | Deskripsi |
| :--- | :--- | :--- | :--- |
| reference_code | string | VER-260101-1234 | Kode referensi |

**Response:**
<Tabs>
  <TabItem value="200" label={<span className="tab-200">200 - Success</span>}>
  ```json
  {
    "status": "success",
    "message": "Verification retrieved successfully.",
    "data": {
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
      },
      "customer": {
        "name": "MIRA SETIAWAN",
        "phone": "823423423423",
        "id_number": "3171234567890123"
      },
      "analysis": {
        "credit_summary": { object },
        "credibility": { object },
        "use_case_analysis": { object },
      }
    }
  }
  ```
  </TabItem>
  <TabItem value="201" label={<span className="tab-200">200 - Not Success</span>}>
  ```json
  {
    "status": "success",
    "message": "Verification retrieved successfully.",
    "data": {
      "verification": {
        "reference_code": "EMP-260212-6843",
        "verification_type_name": "Rekrutment/Screening Karyawan",
        "created_at": "2026-02-12T10:14:51.000000Z",
        "updated_at": "2026-02-12T10:15:01.000000Z",
        "status": "failed",
        "failed_message": OCR data mismatch,
        "credibility_score": null,
        "credibility_level": null,
        "final_decision": null
      },
      "customer": {
        "name": "MIRA SETIAWAN",
        "phone": "823423423423",
        "id_number": "3171234567890123"
      },
      "analysis": {
        "credit_summary": null,
        "credibility": null,
        "use_case_analysis": null
      }
    }
  }
  ```
  </TabItem>
  <TabItem value="404" label={<span className="tab-400">404 - Not Found</span>}>
  ```json
  {
    "status": "fail",
    "message": "Data not found.",
  }
  ```
  </TabItem>
  <TabItem value="500" label={<span className="tab-500">500 - Internal Error</span>}>
  ```json
  {
    "status": "error",
    "message": "An error occurred while retrieving verification."
  }
  ```
  </TabItem>
</Tabs>