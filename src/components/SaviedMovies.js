import React from 'react';
import Header from './Header';
import SearchForm from './SavedMovies/SearchSavedForm';
import MoviesCardList from './SavedMovies/MoviesSavedCardList';
import Footer from './Footer';

function Movies({
  loggedIn,
  isOpen,
  onClose,
  handleDeleteLikeClick,
  savedMovies,
  submitSavedForm,
  handleCheckBox,
  isCheckBoxSaved,
}) {
    return (
      <main className="page">
        <Header
          loggedIn={loggedIn}
          onClick={isOpen}
          onClose={onClose}
        />
        <SearchForm
          submitSavedForm={submitSavedForm}
          type={"savedMovie"}
          handleCheckBox={handleCheckBox}
          isCheckBoxSaved={isCheckBoxSaved}
        />
        <MoviesCardList
          typeButton="cross"
          savedMovies={savedMovies}
          handleDeleteLikeClick={handleDeleteLikeClick}
         />
        <Footer />
      </main>
    );
  }

  export default Movies;
