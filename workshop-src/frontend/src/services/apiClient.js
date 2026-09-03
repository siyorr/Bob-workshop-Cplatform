export const ENV_API_URL_KEY = 'REACT_APP_API_URL';

export const API_BASE_URL = 'http://localhost:8080/api';

export function getApiBaseUrl() {
  return API_BASE_URL;
}

export function buildApiUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${API_BASE_URL}${normalizedPath}`;
}

export async function requestPortalResource(path, options = {}) {
  const response = await fetch(buildApiUrl(path), {
    headers: {
      Accept: 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Portal request failed with status ${response.status}`);
  }

  return response.json();
}
