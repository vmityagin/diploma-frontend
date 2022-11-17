export function filterList(searchPhrase, array) {
  console.log(array);
  const filtredMovies = array.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchPhrase.toLowerCase());
  })
  return filtredMovies;
}
