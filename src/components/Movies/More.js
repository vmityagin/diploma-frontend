import React from 'react';

function More({ isVisible, handleButtonYet }) {

  return (
    <>
      {
        isVisible &&
        <section className="preloader">
        <button onClick={handleButtonYet} className="preloader__button">
          <p className="preloader__name">Ещё</p>
        </button>
      </section>
      }
    </>
  );
}

  export default More;
