// src/AddBookForm.jsx
import React, { useState } from 'react';
import { addBook } from '../api';

const AddBookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = { title, author };

        try {
            const response = await addBook(newBook);
            console.log('Book added:', response.data);
            // Optionally, reset the form or update the state to reflect the new book
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };


};

export default AddBookForm;