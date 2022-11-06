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
    authorization: 'b34abb99-bb9c-49f0-b4ee-93cb66614104'
  }
});

export default api;
