const myPromise = new Promise((resolve, reject) => {
  const xhttp = new XMLHttpRequest();
  
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      const myData = JSON.parse(this.responseText);
      resolve(myData);
    }
  }
  xhttp.open('GET', './article.json');
  xhttp.send()
});

myPromise
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((result) => {
    const container = document.createElement('div');
    for (obj of result) {
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');

      h3.textContent = obj.title;
      p.textContent = obj.description;

      div.append(h3, p)
      container.append(div);
    }
    document.body.prepend(container);
  });
