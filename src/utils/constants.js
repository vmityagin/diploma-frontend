const inputsSearch = {
    id:1,
    name: "userText",
    type: "text",
    placeholder: "Фильм",
    label: "movieName",
    erroremptymessage: "Нужно ввести ключевое слово",
};

const inputsEdit = [
  {
    id:1,
    name: "userName",
    type: "text",
    placeholder: "Имя",
    label: "Имя",
  },
  {
    id:2,
    name: "userEmail",
    type: "email",
    placeholder: "Email",
    label: "E-mail",
  },
];

const inputsRegister = [
  {
    id:1,
    name: "userName",
    type: "text",
    placeholder: "Ваше имя",
    errorMessage: "Это обязательное поле, введите имя от 2 до 30 символов.",
    label: "Имя",
  },
  {
    id:2,
    name: "userEmail",
    type: "email",
    placeholder: "Ваш email",
    errorMessage: "Это обязательное поле, введите корректный email-адрес",
    label: "E-mail",
  },
  {
    id:3,
    name: "userPassword",
    type: "password",
    placeholder: "Ваш пароль",
    label: "Пароль",
    errorMessage: "Это обязательное поле, установите пароль от 6 до 30 символов",
  },
];

const inputsLogin = [
  {
    id:1,
    name: "userEmail",
    type: "email",
    placeholder: "Ваш email",
    label: "E-mail",
    required: true,
    errorMessage: "Это обязательное поле, используйте корректный email-адрес",
  },
  {
    id:2,
    name: "userPassword",
    type: "password",
    placeholder: "Ваш пароль",
    required: true,
    label: "Пароль",
    errorMessage: "Это обязательное поле, введите пароль от 6 до 30 символов",
  },
];

const regularEmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
    return allMoviesList.slice(lengthPageArray);
  }
}


export { checkWidthScreen, inputsEdit, inputsSearch, sortShortMovies, renderMoviesPage, inputsRegister, inputsLogin, regularEmailRegExp };
