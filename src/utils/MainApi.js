class MainApi {
  constructor({baseUrl, headers}) {
    this.headers = headers;
    this.url = 'https://api.diplomamv.nomoredomains.icu/';
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Возникла ошибка при отправке запроса на сервер: ${res.status}`);
  }

  loadCardMovies() {
    return fetch(`${this.url}movies `, {
      method: 'GET',
      headers: this.headers
    }).then((res) => {
      return this._getResponseData(res);
    })
  }

  getInfromationUser() {
    return fetch(`${this.url}users/me `, {
      method: 'GET',
      headers: this.headers
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  savedMovieInUserList(array) {
    return fetch(`${this.url}movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country: array.country,
        director: array.director,
        duration: array.duration,
        year: array.year,
        description: array.description,
        image: `https://api.nomoreparties.co${array.image.url}`,
        trailerLink: array.trailerLink,
        nameRU: array.nameRU,
        nameEN: array.nameEN,
        thumbnail: `https://api.nomoreparties.co${array.image.formats.thumbnail.url}`,
        movieId: `${array.id}`,
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }

  deleteMovieFromUserList(id) {
    return fetch(`${this.url}movies/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }
}



const api = new MainApi({
  headers: {
    'Content-Type': 'application/json',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY5M2Q1NWYyNTYxYzNjYzVmOGFhYzgiLCJpYXQiOjE2Njc4NDEzNzcsImV4cCI6MTY2ODQ0NjE3N30.uNhMgHdxsAK4G4VsJcsK9qEOfkpySqh41AQz2U3-l5s'
  }
});

export default api;
