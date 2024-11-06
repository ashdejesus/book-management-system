// src/EditBookForm.jsx
import React, { useState, useEffect } from 'react';
import { updateBook } from '../api';

const EditBookForm = ({ book, onUpdate }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    // Populate the form with the current book's data when the component mounts
    useEffect(() => {
        if (book) {
            setTitle(book.title);
            setAuthor(book.author);
        }
    }, [book]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedBook = { title, author };

        try {
            const response = await updateBook(book.id, updatedBook);
            console.log('Book updated:', response.data);
            if (onUpdate) {
                onUpdate(response.data); // Call the onUpdate prop to refresh the book list
            }
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">Update Book</button>
        </form>
    );
};

export default EditBookForm;