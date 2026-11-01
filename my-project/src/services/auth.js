const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'
const TOKEN_KEY = 'accessToken'

export async function authRequest(path, { method = 'POST', body, token } = {}) {
  const headers = {}

  if (body !== undefined) {
    headers['Content-Type'] = 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}/auth${path}`, {
    method,
    headers,
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  })

  let payload
  try {
    payload = await response.json()
  } catch {
    throw new Error(`The API returned an invalid response (${response.status}).`)
  }

  if (!response.ok) {
    const validationMessage = payload.errors
      ? Object.values(payload.errors).join(' ')
      : ''
    throw new Error(
      validationMessage || payload.error || payload.message || 'The request failed.',
    )
  }

  return payload
}

export function saveAccessToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function clearAccessToken() {
  localStorage.removeItem(TOKEN_KEY)
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY)
}
