# Customer Portal Services

This repository contains three small Node.js services for a customer portal sample application.

## Services

```text
frontend/      React customer portal UI
auth-service/  HTTP authentication service
mock-api/      HTTP customer data API
```

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer

## Install

```powershell
npm install
```

## Test

```powershell
npm run validate
```

Run one package test suite:

```powershell
npm test --workspace frontend
npm test --workspace auth-service
npm test --workspace mock-api
```

## Start

Start each service from the repository root in separate terminals:

```powershell
npm run start:mock-api
npm run start:auth
npm run start:frontend
```

The demo authentication account is:

```text
email: partner@example.com
password: Partner123!
```
