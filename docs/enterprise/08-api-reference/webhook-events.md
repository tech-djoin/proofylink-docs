---
sidebar_position: 5
---

# Webhook Events
- **Event Format:**
  ```json
  {
    "event_id": "evt_xxx",
    "event_type": "check.completed",
    "timestamp": "2026-01-26T14:30:00Z",
    "data": { ... }
  }
  ```
- **Event types:** check.completed, check.consent_approved, check.failed, etc
- **Retry logic:** exponential backoff
- **Signature verification:** HMAC-SHA256