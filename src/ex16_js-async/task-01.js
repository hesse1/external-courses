const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendReques(method, url, body = null) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = function () {
      if (xhr.status >= 400) {
        reject('Что-то пошло не так, попробуйте еще раз')
      } else {
        resolve(xhr.response)
      }
    }
    xhr.onerror = function () {
      reject('сервер не отвечает')
    }
    if (method === 'GET') {
      xhr.send()
    } else {
      xhr.setRequestHeader('Content-type', 'application/json')
      xhr.send(JSON.stringify(body))
    }
  })
}
const body = {
  name: 'name',
  age: 21
}
sendReques('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err));

sendReques('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err));