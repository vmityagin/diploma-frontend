import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import Preloader from './Movies/Preloader';
import Footer from './Footer';

function Movies({ isLoggedIn, isOpen, onClose }) {
    return (
      <>
        <section className="page">
          <Header
            isLoggedIn="true"
            onClick={isOpen}
            onClose={onClose}
          />
          <SearchForm />
          <MoviesCardList typeButton="like" />
          <Preloader />
          <Footer />
        </section>
      </>
    );
  }

  export default Movies;
