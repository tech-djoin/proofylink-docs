---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manajemen Token

Gunakan endpoint ini untuk mengelola proses verifikasi data kandidat.

## Saldo Token

**Endpoint:**
<span className="badge-http get">GET</span> `{{base_url}}/api/v1/external/token/balance`

**Headers:**
| Key | Value | Deskripsi |
| :--- | :--- | :--- |
| Authorization | Bearer YOUR_ACCESS_TOKEN | Token integrasi Proofylink |

**Response:**
<Tabs>
  <TabItem value="200" label={<span className="tab-200">200</span>}>
  ```json
  {
      "status": "success",
      "message": "Token retrieved successfully.",
      "data": {
          "token": 10
      }
  }
  ```
  </TabItem>
  <TabItem value="404" label={<span className="tab-400">400</span>}>
  ```json
  {
    "status": "fail",
    "message": "Tenant not found."
  }
  ```
  </TabItem>
  <TabItem value="500" label={<span className="tab-500">500</span>}>
  ```json
  {
    "status": "fail",
    "message": "An error occurred while retrieving token."
  }
  ```
  </TabItem>
</Tabs>
