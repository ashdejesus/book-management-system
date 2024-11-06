// src/components/BookForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookForm = ({ bookToEdit, onRefresh }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (bookToEdit) {
            setTitle(bookToEdit.title);
            setAuthor(bookToEdit.author);
            setPublishedYear(bookToEdit.published_year);
            setGenre(bookToEdit.genre);
            setDescription(bookToEdit.description);
        } else {
            setTitle('');
            setAuthor('');
            setPublishedYear('');
            setGenre('');
            setDescription('');
        }
    }, [bookToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookData = { title, author, published_year: publishedYear, genre, description };

        if (bookToEdit) {
            await axios.put(`http://localhost:8000/api/books/${bookToEdit.id}`, bookData);
        } else {
            await axios.post('http://localhost:8000/api/books', bookData);
        }

        onRefresh();
        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setAuthor('');
        setPublishedYear('');
        setGenre('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{bookToEdit ? 'Edit Book' : 'Add Book'}</h2>
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
            <input
                type="number"
                placeholder="Published Year"
                value={publishedYear}
                onChange={(e) => setPublishedYear(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            ></textarea>
            <button type="submit">{bookToEdit ? 'Update Book' : 'Add Book'}</button>
        </form>
    );
};

export default BookForm;