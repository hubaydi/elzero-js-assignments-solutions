const xhttp = new XMLHttpRequest();
xhttp.open("GET", "../assingment (1)/article.json");
xhttp.send();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const mainData = JSON.parse(this.responseText);
    
    for (obj of mainData) {
      obj.category = 'All';
      // console.log(obj);
    }
    console.log(mainData);
    
    const updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};