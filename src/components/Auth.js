export const BASE_URL = 'https://api.diplomamv.nomoredomains.icu/';

const checkResponse = (response) =>
  response.ok
    ? response.json()
    : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));

export const register = (data) => {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.userName,
      email: data.userEmail,
      password: data.userPassword,
    })
  })
    .then((res) => {
      return checkResponse(res);
    })
}

export const authorize = (data) => {
    return fetch(`${BASE_URL}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: data.userPassword,
        email: data.userEmail,
      })
    })
    .then((response) => {
      return response.json();
    })
}
