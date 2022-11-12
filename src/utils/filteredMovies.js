export function filteredToPhrase(searchValue, array) {
  const filtredMovies = array.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
  })
  return filtredMovies;
}

export function filterShortList(array) {
  const shortMovies = array.filter((element) => {
    return element.duration <= 40;
  })
  return shortMovies;
};

export function remove(index, arr, setArr) {
  setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
}


export function filterList(searchPhrase, array) {
  console.log(array);
  const filtredMovies = array.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchPhrase.toLowerCase());
  })
  return filtredMovies;
}
