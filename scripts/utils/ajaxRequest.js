async function ajaxGet(url) {
  try {
    const data = await fetch(url);
    if (data.ok) {
      return await data.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export default ajaxGet;
