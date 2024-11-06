// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = ({ onEdit }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:8000/api/books');
        setBooks(response.data);
    };

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:8000/api/books/${id}`);
        fetchBooks(); // Refresh the book list
    };

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} by {book.author} 
                        <button onClick={() => onEdit(book)}>Edit</button>
                        <button onClick={() => deleteBook(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;