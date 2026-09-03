import http from 'node:http';

const profile = {
  id: 'CUST-1001',
  name: 'Alex Kim',
  email: 'alex.kim@example.com',
  tier: 'Gold Partner'
};

const accounts = [
  { id: 'ACCT-001', name: 'Corporate Checking', balance: 24500, currency: 'USD' },
  { id: 'ACCT-002', name: 'Travel Budget', balance: 8200, currency: 'USD' }
];

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(body));
}

export function createMockApiServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (req.method === 'GET' && url.pathname === '/health') {
      sendJson(res, 200, { status: 'ok', service: 'mock-api' });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/profile') {
      sendJson(res, 200, { profile });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/accounts') {
      sendJson(res, 200, accounts);
      return;
    }

    sendJson(res, 404, { error: 'not_found', path: url.pathname });
  });
}
