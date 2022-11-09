class MainApi {
  constructor(token, {headers}) {
    this.token = token;
    this.headers = headers;
    this.url = 'https://api.diplomamv.nomoredomains.icu/';
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Возникла ошибка при отправке запроса на сервер: ${res.status}`);
  }

  loadUserCardMovies() {
    return fetch(`${this.url}movies `, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.token}`
      }
    }).then((res) => {
      return this._getResponseData(res);
    })
  }

  getInfromationUser(token) {
    return fetch(`${this.url}users/me `, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.token}`
      }
    })
      .then(res => res.json())
      .then((data) => data);
  }

  savedMovieInUserList(array) {
    return fetch(`${this.url}movies`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.token}`
      },
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
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.token}`
      }
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  }
}



const api = new MainApi(localStorage.getItem('token'),{
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    authorization: '0cf8946b-06ea-4e51-9b25-00c23b1ffd1e',
  }
});

export default api;
