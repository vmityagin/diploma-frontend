const inputsSearch = {
    id:1,
    name: "userText",
    type: "text",
    placeholder: "Фильм",
    label: "movieName",
    erroremptymessage: "Нужно ввести ключевое слово",
};

let timeOutFunctionId;

function checkWidthScreen() {
  if (window.innerWidth > 426) {
    return 7;
  } else {
    return 5;
  }
}

window.addEventListener("resize", () => {
  clearTimeout(timeOutFunctionId);
  timeOutFunctionId = setTimeout(500);
});

/* function newArrayMoviesList(array, arrayRender) {
  let incrementStep = checkWidthScreen();
  let numberDiff = array.length - arrayRender.length;

  if (numberDiff > incrementStep) {
    return arrayRender.length + incrementStep;
  } else {
    return arrayRender.length + numberDiff;
  }
} */

function sortShortMovies(array) {
  const shortMovies = array.filter((element) => {
    return element.duration <= 40;
  })
  return shortMovies;
}

function renderMoviesPage(allMoviesList, pageMoviesList) {
  let incrementStep = checkWidthScreen();
  let numberDiff = allMoviesList.length - pageMoviesList.length;
  const lengthPageArray = pageMoviesList.length;
  if (numberDiff > incrementStep) {
    return allMoviesList.slice(lengthPageArray, (lengthPageArray + incrementStep));
  } else {
    return allMoviesList.slice(lengthPageArray, (lengthPageArray + numberDiff));
  }
}

export { inputsSearch, sortShortMovies, renderMoviesPage };
