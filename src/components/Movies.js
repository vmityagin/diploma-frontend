import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import Preloader from './Movies/Preloader';
import Footer from './Footer';

function Movies({ isLoggedIn, isOpen, onClose }) {
    return (
      <div className="page">
        <Header
          isLoggedIn={true}
          onClick={isOpen}
          onClose={onClose}
        />
        <main >
          <SearchForm />
          <MoviesCardList typeButton="like" />
          <Preloader />
        </main>
        <Footer />
      </div>
    );
  }

  export default Movies;
