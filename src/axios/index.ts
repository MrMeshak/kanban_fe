import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_KANBAN_BE_BASE_URL,
  timeout: 8000,
});
