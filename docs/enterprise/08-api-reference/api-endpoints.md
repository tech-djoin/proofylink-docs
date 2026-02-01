---
sidebar_position: 3
---

# API Endpoints

## **A. Subject Management**
- ```POST /subjects``` - Create subject
  - Parameters, payload, response, error codes
  - Example request/response
  
- ```GET /subjects``` - List subjects
  - Pagination, filtering
  
- ```GET /subjects/{`id`}``` - Get subject detail
  
- ```PUT /subjects/{`id`}``` - Update subject
  
- ```DELETE /subjects/{`id`}``` - Delete subject

## **B. Check Requests**
- ```POST /checks``` - Submit check request
  - Required fields (subject_id, use_case)
  - Optional fields (priority, reference, notes)
  - Response: check_id, reference_code, consent_status, token_deducted
  
- `GET /checks` - List all checks
  - Filter by status, use case, date range
  - Pagination
  
- `GET /checks/{`id`}` - Get check detail
  - Current status, subject consent status, result (if completed)
  
- `POST /checks/{`id`}/resend-consent` - Resend consent email
  
- `POST /checks/{`id`}/cancel` - Cancel pending check
  - (Before subject consent or if consent rejected)

## **C. Check Results**
- ```GET /checks/{`id`}/result``` - Get check result
  - Return full result data (JSON)
  - Only available if check completed & subject consented
  
- ```GET /checks/{`id`}/result/pdf``` - Get result as PDF
  - Return PDF binary
  
- ```GET /checks/{`id`}/result/json``` - Get result as JSON
  - (Same as /checks/{`id`}/result)

## **D. Decision**
- ```POST /checks/{`id`}/decision``` - Submit decision
  - decision (APPROVED/REJECTED/NEED_MORE_INFO/PENDING_REVIEW)
  - reason (text)
  - reference_number (optional)
  - authorized_by (email)
  - Response: decision_id, timestamp, audit_log_id

## **E. Audit & Compliance**
- ```GET /audit-log``` - Get audit trail
  - Filter: date range, user, action_type, check_id
  - Return: array of audit events
  
- ```GET /audit-log/export``` - Export audit log
  - Format: CSV
  - Download file

## **F. Use Cases**
- ```GET /use-cases``` - List approved use cases
  - Return: use_case_id, name, status, approval_date
  
- ```GET /use-cases/{`id`}``` - Get use case detail
  - Including STC link, data retention policy

## **G. Webhooks** (Optional)
- ```POST /webhooks``` - Register webhook
  - Event types (check.completed, check.consent_approved, check.consent_rejected, check.failed)
  - Webhook URL
  
- ```POST /webhooks/{`id`}/test``` - Send test webhook
  
- ```DELETE /webhooks/{`id`}``` - Unregister webhook
