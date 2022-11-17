class Api {
  constructor({baseUrl, headers}) {
    this.headers = headers;
    this.url = 'https://api.nomoreparties.co/beatfilm-movies';
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Возникла ошибка при отправке запроса на сервер: ${res.status}`);
  }

  loadCardMovies() {
    return fetch(this.url, {
      method: 'GET',
      headers: this.headers
    }).then((res) => {
      return this._getResponseData(res);
    })
  }
}

const api = new Api({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default api;
