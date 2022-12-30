import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const customAxios = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  withCredentials: true,
});

export default customAxios;