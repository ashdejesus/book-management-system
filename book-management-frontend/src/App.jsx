// src/App.jsx
import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
    const [bookToEdit, setBookToEdit] = useState(null);

    const handleEdit = (book) => {
        setBookToEdit(book);
    };

    const handleRefresh = () => {
        setBookToEdit(null);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Book Management System</h1>
            <BookForm bookToEdit={bookToEdit} onRefresh={handleRefresh} />
            <BookList onEdit={handleEdit} />
        </div>
    );
}

export default App;