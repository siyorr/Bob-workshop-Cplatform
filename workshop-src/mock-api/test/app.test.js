import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createMockApiServer } from '../src/app.js';

async function withServer(run) {
  const server = createMockApiServer();
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();

  try {
    await run(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

test('GET /health returns service status', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.service, 'mock-api');
  });
});

test('GET /api/profile returns a customer profile', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/profile`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.profile.email, 'alex.kim@example.com');
  });
});

test('GET /api/accounts returns account summaries', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/accounts`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(Array.isArray(body), true);
    assert.equal(body.length, 2);
  });
});
