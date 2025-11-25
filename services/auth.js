import api from '../lib/api';

export async function register({ email, password }) {
  return api.post('/api/auth/register', { email, password });
}

export async function login({ email, password }) {
  const res = await api.post('/api/auth/login', { email, password });
  const token = res.data?.data?.token || res.data?.data?.taken;
  localStorage.setItem('spentlab_token', token);
  return res.data;
}

export async function getMe() {
  const res = await api.get('/api/users/me');
  return res.data?.data;
}

export async function uploadAvatar(file) {
  const formData = new FormData();
  formData.append('avatar', file);
  const res = await api.post('/api/users/upload-avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data?.data;
}

export function logout() {
  localStorage.removeItem('spentlab_token');
}
