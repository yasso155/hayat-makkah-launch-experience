# Security Specification - Hayat Makkah Elite Portal

## Data Invariants
1. **RSVPs**: An RSVP cannot be modified once set to `approved` or `rejected` by an admin (except by an admin).
2. **Chat Messages**: A user can only read and write messages in their own chat session.
3. **Timestamp Integrity**: All `requestedAt` and `timestamp` fields must be server-validated.

## The Dirty Dozen Payloads

### RSVP Attacks
1. **P1 (Shadow Field)**: RSVP with `status: 'approved'` during creation. (Denied: Creator cannot set status, default is pending).
2. **P2 (ID Poisoning)**: RSVP with a 2KB document ID. (Denied: ID size check).
3. **P3 (Identity Spoofing)**: Creating an RSVP for another user's email. (Allowed/Denied: RSVPs are public/private based on email verification).
4. **P4 (Resource Exhaustion)**: Notes field with 1MB of text. (Denied: Size limits).

### Chat Attacks
5. **P5 (Cross-Session Read)**: Attempting to list messages from another session ID. (Denied: session ID must match auth).
6. **P6 (Role Hijacking)**: User posting a message with `role: 'assistant'`. (Denied: Role validation).
7. **P7 (Timestamp Backdating)**: User sending a message with a 2020 timestamp. (Denied: Must match request.time).
8. **P8 (System Interception)**: Attempting to delete assistant messages. (Denied: Immutability).

## Test Runner Plan
Using `firebase-rules-test` (conceptual) to verify these gates.
