async function ajaxGet(url) {
  fetch(url, myInit).then((response) => console.log(response));
}

export default ajaxGet;
