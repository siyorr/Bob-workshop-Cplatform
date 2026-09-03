# Auth Service

HTTP 인증 서비스입니다.

## Purpose

This package provides local authentication endpoints for the customer portal sample application.

## Commands

Run from the repository root:

```powershell
npm install
npm test --workspace auth-service
npm run start:auth
```

## Endpoints

```text
GET /health
POST /login
GET /session
```

The demo login account is:

```text
email: partner@example.com
password: Partner123!
```
