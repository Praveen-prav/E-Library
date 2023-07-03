import React, { useState } from 'react';
import booksData from '../data/bookData';
import NavBar from './navBar';
import '../styles/bookDisplay.css';

const Books = (props) => {
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
              <a href={book.pdf_path} key={index} target='_blank' rel='noopener noreferrer' className='bookLink'>
                <div className='bookCard'>
                  <img src={book.cover_image_path} alt={book.name} />
                  <h2>{book.name}</h2>
                  <h2>Author: {book.author}</h2>
                  {/* <p>Description: {book.description}</p> */}
                </div>
              </a>
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

export default Books;
