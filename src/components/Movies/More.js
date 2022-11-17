import React from 'react';

function More({ isVisible, handleButtonYet }) {

  return (
    <>
      {
        isVisible &&
        <section className="more">
        <button onClick={handleButtonYet} className="more__button">
          <p className="more__name">Ещё</p>
        </button>
      </section>
      }
    </>
  );
}

  export default More;
