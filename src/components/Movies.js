import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import Preloader from './Movies/Preloader';
import Footer from './Footer';

function Movies() {
    return (
      <section className="page">
        <Header />
        <SearchForm />
        <MoviesCardList typeButton="like" />
        <Preloader />
        <Footer />
      </section>
    );
  }

  export default Movies;
