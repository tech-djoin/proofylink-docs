---
sidebar_position: 4
---

# Error Handling
- **Error Response Format:**
  ```json
  {
    "error": {
      "code": "INVALID_SUBJECT",
      "message": "Subject NIK not found",
      "details": "NIK format invalid or not in database"
    }
  }
  ```
- **Common error codes:** 400, 401, 403, 404, 429, 500, etc
- **Retry strategy**