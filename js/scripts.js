const ENDPOINT_URL = "www.google.com"

submitEmail = (button, loader, field, confirmed) => {
  button.style.display = 'none';
  loader.style.display = 'block';

  setTimeout(function () {
    fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      mode: 'cors',
      body: JSON.stringify({ email: field.value })
    })
      .then(res => {
        loader.style.display = 'none'
        confirmed.style.display = 'block'
      })
      .catch(error => {
        loader.style.display = 'none'
        button.style.display = 'inline-block'
      })
  }, 1000);
}