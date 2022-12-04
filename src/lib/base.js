import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

const base = axios.create({
  baseURL,
});

export const basePrivate = axios.create({
  baseURL,
  withCredentials: true,
});

export default base;
