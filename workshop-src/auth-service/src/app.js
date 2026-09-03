import http from 'node:http';
import crypto from 'node:crypto';

const demoUser = {
  id: 'user-1001',
  email: 'partner@example.com',
  password: 'Partner123!',
  name: 'Partner Engineer'
};

const sessions = new Map();

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(body));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let rawBody = '';
    req.on('data', (chunk) => {
      rawBody += chunk;
    });
    req.on('end', () => {
      if (!rawBody) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(rawBody));
      } catch (error) {
        reject(error);
      }
    });
  });
}

export function createAuthServer() {
  return http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (req.method === 'OPTIONS') {
      sendJson(res, 204, {});
      return;
    }

    if (req.method === 'GET' && url.pathname === '/health') {
      sendJson(res, 200, { status: 'ok', service: 'auth-service', mode: 'local-mock' });
      return;
    }

    if (req.method === 'POST' && url.pathname === '/login') {
      try {
        const body = await readJson(req);
        const valid = body.email === demoUser.email && body.password === demoUser.password;

        if (!valid) {
          sendJson(res, 401, { error: 'invalid_credentials', message: 'Invalid email or password' });
          return;
        }

        const sessionId = crypto.randomUUID();
        sessions.set(sessionId, { userId: demoUser.id, createdAt: new Date().toISOString() });

        sendJson(res, 200, {
          sessionId,
          user: { id: demoUser.id, email: demoUser.email, name: demoUser.name }
        });
      } catch (error) {
        sendJson(res, 400, { error: 'invalid_json' });
      }
      return;
    }

    if (req.method === 'GET' && url.pathname === '/session') {
      const sessionId = req.headers.authorization?.replace('Bearer ', '');
      const session = sessionId ? sessions.get(sessionId) : null;

      if (!session) {
        sendJson(res, 401, { authenticated: false });
        return;
      }

      sendJson(res, 200, { authenticated: true, session });
      return;
    }

    sendJson(res, 404, { error: 'not_found', path: url.pathname });
  });
}
