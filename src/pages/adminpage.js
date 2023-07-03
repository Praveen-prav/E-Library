import React, { useState } from 'react';
import booksData from '../data/bookData';
import NavBar from '../components/navBar';
import '../styles/bookDisplay.css';

const AdminPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleAddBook = () => {
    // Implement your logic for adding a book
    console.log('Add Book button clicked');
  };

  const handleDeleteBook = (bookId) => {
    // Implement your logic for deleting a book
    console.log(`Delete Book button clicked for book with ID: ${bookId}`);
  };

  return (
    <>
      <NavBar />
      <div className='books'>
        <div className='search'>
          <input type='text' placeholder='Search book by its name' onChange={handleSearchChange} />
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value=''>All Languages</option>
            <option value='English'>English</option>
            <option value='Hindi'>Hindi</option>
            <option value='Telugu'>Telugu</option>
          </select>
          <select value={selectedGenre} onChange={handleGenreChange}>
            <option value=''>All Genre</option>
            <option value='Fiction'>Fiction</option>
            <option value='Non Fiction'>Non Fiction</option>
          </select>
          <button className='addBook' onClick={handleAddBook}>Add Book</button>
        </div>

        <div className='cards'>
          {booksData.map((book, index) => {
            const isMatch =
              book.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              book.author.toLowerCase().includes(searchValue.toLowerCase());
            const isLanguageMatch =
              selectedLanguage === '' || book.language.toLowerCase() === selectedLanguage.toLowerCase();
            const isGenreMatch =
              selectedGenre === '' || book.genre.toLowerCase() === selectedGenre.toLowerCase();

            if (isMatch && isLanguageMatch && isGenreMatch) {
              return (
                <div key={index} className='bookCard'>
                  <img src={book.cover_image_path} alt={book.name} />
                  <h2>{book.name}</h2>
                  <h2>Author: {book.author}</h2>
                  {/* <p>Description: {book.description}</p> */}
                  <button onClick={() => handleDeleteBook(book.id)}>Remove Book</button>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
