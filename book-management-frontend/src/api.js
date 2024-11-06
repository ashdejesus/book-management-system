// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Adjust the URL based on your Laravel server

export const getBooks = () => {
    return axios.get(`${API_URL}/books`);
};

export const addBook = (book) => {
    return axios.post(`${API_URL}/books`, book);
};

export const updateBook = (id, book) => {
    return axios.put(`${API_URL}/books/${id}`, book);
};

export const deleteBook = (id) => {
    return axios.delete(`${API_URL}/books/${id}`);
};