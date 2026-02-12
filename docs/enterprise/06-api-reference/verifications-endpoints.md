---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Verifications

Gunakan endpoint ini untuk mengelola proses verifikasi data kandidat.

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
  <TabItem value="200" label={<span className="tab-200">200</span>}>
  ```json
  {
    "status": "success",
    "message": "Verifications retrieved successfully.",
    "data": [
      {
        "reference_code": "VER-260112-6389",
        "status": "processing",
        "final_decision": null,
        "created_at": "2026-01-12T03:37:09.000000Z",
        "updated_at": "2026-01-12T03:37:21.000000Z",
        "score": null,
        "credibility_score": null,
        "credibility_level": null,
        "verification_type_name": "Rekrutment/Screening Karyawan",
        "customer_name": "Customer 1",
        "customer_id_number": "3201000000000001"
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
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "page": null,
          "active": false
        },
        {
          "url": "https://example.test/api/v1/external/verifications?page=1",
          "label": "1",
          "page": 1,
          "active": true
        },
        {
          "url": null,
          "label": "Next &raquo;",
          "page": null,
          "active": false
        }
      ],
      "path": "https://example.test/api/v1/external/verifications",
      "per_page": 50,
      "to": 1,
      "total": 1,
      "q": ""
    }
  }
  ```
  </TabItem>
  <TabItem value="404" label={<span className="tab-400">400</span>}>
  ```json
  {
    "status": "fail",
    "message": "Data not found.",
  }
  ```
  </TabItem>
  <TabItem value="500" label={<span className="tab-500">500</span>}>
  ```json
  {
    "status": "fail",
    "message": "An error occurred while retrieving verification."
  }
  ```
  </TabItem>
</Tabs>

---

## Get Verification Detail
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
  <TabItem value="200" label={<span className="tab-200">200</span>}>
  ```json
  {
    "status": "success",
    "message": "Verification retrieved successfully.",
    "data": {
      "verification": {
        "reference_code": "VER-260112-6389",
        "status": "processing",
        "final_decision": null,
        "failed_message": null,
        "score": null,
        "reference_date": null,
        "credibility_score": null,
        "credibility_level": null,
        "file_url": "https://storage.googleapis.com/proofylink-dev/reports/kredit/Laporan_CLIK_VER-260127-2072_1769496977.pdf?GoogleAccessId=gcs-proofylink-dev%40dev-sakti.iam.gserviceaccount.com&Expires=1770795190&Signature=VBfyFkOgY4nYJ3a78dFdZlU7BhM8DTo3uEW%2BGTbJAs1lpFPFe%2BUqtMLXBnebl%2Bku65HmdhYjE9ac2Q%2Bo351LBIH4JOYuwMVEnJUTkb4DtECcg4gcrDnwLzYHAQCKwzEi6becLPVgNNAR%2Bf5OYrUp%2Bh0hzCbZyvu70%2BkJ19RX8%2Fxv%2Frxgzt9h6PUtydRH5tuxcQTD6uUFos0fVekPrRMwW4VmZgooAr7hHrvP5BMarPv%2BTC8GNAomK97KTLb%2BWfUDr%2F6Ay3iMYYYy%2ByXxcP0Dn8LuZun5SjIHBNhcFU9TdSm7wmXDILGCi7L9gOdHsNw1H9THhyTDWhbj55R8AcSUgA%3D%3D",
        "file_status": "completed",
        "verification_type_name": null,
        "created_at": "2026-01-12T03:37:09.000000Z",
        "updated_at": "2026-01-12T03:37:21.000000Z"
      },
      "customer": {
        "name": "Customer 1",
        "phone": "081200000001",
        "id_number": "3201000000000001",
        "additional_data": {
          "city": "Jakarta",
          "address": "Jl. Customer No. 1",
          "birth_date": "1990-01-01"
        },
        "ktp_url": "https://storage.googleapis.com/proofylink-dev/kyc/ktp/ktp_694b637222533.jpeg?GoogleAccessId=gcs-proofylink-dev%40dev-sakti.iam.gserviceaccount.com&Expires=1770795190&Signature=nUpVZKlK%2BIBcMY7ILTyJzg7nY6F6%2B73Y0lgUsZBU86OLWer809mN4qLl53mndSl82CHWxNqq7kVr8xdEJw88bbf4vtBaFwD6YcdREQtpxOAUj3tYYunIxUEU7ypG8EufHSK0cYtXVDOcmnesvg2Y1MESEOBGQDcJunaNuFJNDmTKRoa0qewm1kKUD7RIHNGDHfPU2NioZbH%2BNWRtAJA7zRkxJcnZBJL%2B63txipq23pki3xzAmCGcFSCy3hMht0Af8yQl%2FlccUWOc5cmgFk5UdPDEi93p8y0bwGQvzOBSV8bqBK9IVBJ0NBtpnFskhd5uL%2BDVmsCYaJcRmMtxtttHUw%3D%3D",
        "selfie_with_ktp_url": "https://storage.googleapis.com/proofylink-dev/kyc/selfie/selfie_694b638fba14b.jpeg?GoogleAccessId=gcs-proofylink-dev%40dev-sakti.iam.gserviceaccount.com&Expires=1770795190&Signature=mMeUuwOmNGUBmSUxoJ1xcSCYJ1N%2FYwb8Q7AU5TTOpAdKYZXbKwehU8SMLo88ma0Pk8xL07VlsuluICVpSW9KBTCZrcNZ0SmSrPJ35QAzwegwE9Utr0vKWCptmuAbxMfbfsRetbYX8FJZcf0S7HZcPG1YGW%2Fb1qAuq%2FdknAxfo%2FRgoOMOe%2FlJWRlxFQT78Kh6UEPeS%2BtyAbmHVaM24KoJfAz7FBdweZNgjYZRpZwuo2j3nsJN2Ewxh5gfwFOlC%2BiKjJKW%2FmRvQyYNNHRMqbyPtN7SAxbwgAjEzn1ujYMoC4LmuSjL7IV6OnhlZ8YjYVJl19%2Bxa2Y3em29b97Wm4l3Iw%3D%3D",
        "status": "verified",
        "created_at": "2026-01-06T02:14:13.000000Z",
        "updated_at": "2026-01-28T07:40:07.000000Z"
      }
    }
  }
  ```
  </TabItem>
  <TabItem value="404" label={<span className="tab-400">400</span>}>
  ```json
  {
    "status": "fail",
    "message": "Data not found.",
  }
  ```
  </TabItem>
  <TabItem value="500" label={<span className="tab-500">500</span>}>
  ```json
  {
    "status": "fail",
    "message": "An error occurred while retrieving verification."
  }
  ```
  </TabItem>
</Tabs>

---

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
| verification_type_id | integer | 1: Rekrutment/Screening Karyawan <br/> 2: Test | Tipe Verifikasi / Screening |
| id_number | string | 1234567890123456 | NIK (16 digit) |
| full_name | string | John Doe | Nama Lengkap |
| email | string | john.doe@gmail.com | Email |
| phone_number | string | 6289123456789 | Nomor telepon dengan prefix 62 |
| ktp_image | file | 1234567890123456 | Foto KTP dengan ukuran maksimal 4 MB |

**Response:**
<Tabs>
  <TabItem value="200" label={<span className="tab-200">200</span>}>
  ```json
  {
      "status": "success",
      "message": "Verification created successfully.",
      "data": {
          "reference_code": "EMP-260211-7874",
          "status": "pending_consent",
          "consent_method": "email",
          "created_at": "2026-02-11T10:27:41.000000Z"
      }
  }
  ```
  </TabItem>
  <TabItem value="500" label={<span className="tab-500">500</span>}>
  ```json
  {
    "status": "fail",
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
  <TabItem value="200" label={<span className="tab-200">200</span>}>
  ```json
  {
      "status": "success",
      "message": "Verification created successfully.",
      "data": {
          "reference_code": "CAR-260211-7874",
          "status": "pending_consent",
          "consent_method": "signed_document",
          "created_at": "2026-02-11T10:27:41.000000Z"
      }
  }
  ```
  </TabItem>
  <TabItem value="500" label={<span className="tab-500">500</span>}>
  ```json
  {
    "status": "fail",
    "message": "An error occurred while creating verification."
  }
  ```
  </TabItem>
</Tabs>