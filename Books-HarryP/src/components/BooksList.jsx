
import React from 'react';

function BookList({ books }) {
  return (
    <div className='book-list'>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <img src={book.image}  />
          <p>Autor: {book.author}</p>
          <p>Precio: ${book.price}</p>
          <p>Stock: {book.stock} unidades</p>
          <div className="add-to-cart">
            <button className="add-button">Agregar al Carrito</button>
            <span className="stock-counter">Stock: {book.stock} unidades</span>
          </div>
        </div>
        
      ))}
    </div>
  );
}

export default BookList;
