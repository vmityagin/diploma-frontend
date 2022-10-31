import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import Preloader from './Movies/Preloader';
import Footer from './Footer';

function Movies({ isLoggedIn, isOpen, onClose }) {
    return (
      <main className="page">
        <Header
          isLoggedIn={true}
          onClick={isOpen}
          onClose={onClose}
        />
        <SearchForm isCheckBox={true} />
        <MoviesCardList typeButton="like" />
        <Preloader />
        <Footer />
      </main>
    );
  }

  export default Movies;
