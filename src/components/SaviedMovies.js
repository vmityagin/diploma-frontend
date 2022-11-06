import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import More from './Movies/More';
import Footer from './Footer';

function Movies({ isLoggedIn, isOpen, onClose, moviesRenderList }) {
    return (
      <main className="page">
        <Header
          isLoggedIn="true"
          onClick={isOpen}
          onClose={onClose}
        />
        <SearchForm />
        <MoviesCardList
          typeButton="cross"
          movies={moviesRenderList}
         />
        <More />
        <Footer />
      </main>
    );
  }

  export default Movies;
