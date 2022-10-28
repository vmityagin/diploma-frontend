import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import Preloader from './Movies/Preloader';
import Footer from './Footer';

function Movies() {
    return (
      <section className="page">
<<<<<<< HEAD
        <Header
          isLoggedIn="true"
        />
=======
        <Header />
>>>>>>> 15e22bb9ad80f7bcc43058c9ccd0896c603aeb7b
        <SearchForm />
        <MoviesCardList typeButton="like" />
        <Preloader />
        <Footer />
      </section>
    );
  }

  export default Movies;
