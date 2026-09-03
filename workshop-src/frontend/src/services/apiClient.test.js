import assert from 'node:assert/strict';
import test from 'node:test';
import { API_BASE_URL, ENV_API_URL_KEY, buildApiUrl, getApiBaseUrl } from './apiClient.js';

test('exports the configured API endpoint', () => {
  assert.equal(API_BASE_URL, 'http://localhost:8080/api');
  assert.equal(getApiBaseUrl(), API_BASE_URL);
  assert.equal(ENV_API_URL_KEY, 'REACT_APP_API_URL');
});

test('builds resource URLs from the configured base endpoint', () => {
  assert.equal(buildApiUrl('/customers'), 'http://localhost:8080/api/customers');
  assert.equal(buildApiUrl('accounts/summary'), 'http://localhost:8080/api/accounts/summary');
});
