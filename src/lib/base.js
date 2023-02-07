import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';
const CLOUD_NAME = 'doxsstgkc';

const base = axios.create({
  baseURL,
});

export const basePrivate = axios.create({
  baseURL,
  withCredentials: true,
});

export const mockServer = axios.create({
  baseURL: 'https://edc94c14-7a7e-4af1-b906-9eccbf9ac193.mock.pstmn.io',
});

export const axiosImage = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
});

export const dictionary = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
});

export default base;
