import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createAuthServer } from '../src/app.js';

async function withServer(run) {
  const server = createAuthServer();
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();

  try {
    await run(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

test('GET /health returns local auth status', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.mode, 'local-mock');
  });
});

test('POST /login creates a session for the demo user', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'partner@example.com', password: 'Partner123!' })
    });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.user.email, 'partner@example.com');
    assert.equal(typeof body.sessionId, 'string');
  });
});

test('POST /login rejects invalid credentials', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'partner@example.com', password: 'wrong' })
    });
    const body = await response.json();

    assert.equal(response.status, 401);
    assert.equal(body.error, 'invalid_credentials');
  });
});

test('GET /session returns authenticated for a known session', async () => {
  await withServer(async (baseUrl) => {
    const login = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'partner@example.com', password: 'Partner123!' })
    });
    const { sessionId } = await login.json();

    const response = await fetch(`${baseUrl}/session`, {
      headers: { Authorization: `Bearer ${sessionId}` }
    });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.authenticated, true);
  });
});
