import React, { useState } from 'react';
import { Books } from './components/BookData';
import BookList from './components/BooksList';
import './App.css';

function App() {
  const [bookStock, setBookStock] = useState(Books);

  const handleAddToCart = (bookId) => {
    const updatedBookStock = bookStock.map((book) => {
      if (book.id === bookId && book.stock > 0) {
        return { ...book, stock: book.stock - 1 };
      }
      return book;
    });
    setBookStock(updatedBookStock);
  };

  return (
    <div>
      <h1>Lista de Libros de Harry Potter</h1>
      <BookList books={bookStock} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;


