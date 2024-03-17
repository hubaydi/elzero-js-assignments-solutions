fetch('../assignment-(01)/article.json')
  .then((result) => {
    result = result.json();
    return result;
  })
  .then((result) => {
    result.length = 5;
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
  })
