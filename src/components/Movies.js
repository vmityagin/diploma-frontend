import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import More from './Movies/More';
import Footer from './Footer';

function Movies({
  loggedIn,
  isOpen,
  onClose,
  handleCheckBox,
  isCheckBox,
  moviesRender,
  handleSubmitSearchForm,
  handleButtonYet,
  isVisible,
  isPhrase,
  isLike,
  handleLikeClick,
  handleDeleteLikeClick,
  savedMovies,
  preloaderIsActive,
  textPreloader,
}) {
    return (
      <div className="page">
        <Header
          loggedIn={loggedIn}
          onClick={isOpen}
          onClose={onClose}
        />
        <main >
          <SearchForm
            handleCheckBox={handleCheckBox}
            isCheckBox={isCheckBox}
            handleSubmitSearchForm={handleSubmitSearchForm}
            isPhrase={isPhrase}
          />
          {
            (moviesRender.length === 0) && (isPhrase !== '')
            ?
            <MoviesCardList
            moviesRender={moviesRender}
            isLike={isLike}
            handleLikeClick={handleLikeClick}
            handleDeleteLikeClick={handleDeleteLikeClick}
            savedMovies={savedMovies}
            preloaderIsActive={true}
            textPreloader={'Ничего не найдено'}
            isLoad={false}
            />
            :
            <MoviesCardList
              moviesRender={moviesRender}
              isLike={isLike}
              handleLikeClick={handleLikeClick}
              handleDeleteLikeClick={handleDeleteLikeClick}
              savedMovies={savedMovies}
              preloaderIsActive={preloaderIsActive}
              textPreloader={textPreloader}
              isLoad={true}
              />
          }
          <More
            isVisible={isVisible}
            handleButtonYet={handleButtonYet}
          />
        </main>
        <Footer />
      </div>
    );
  }

  export default Movies;
