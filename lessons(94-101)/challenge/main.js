document.body.style.cssText = 'font-family: arial; background-color: #ECECEC;'
let scriptFile = document.body.lastElementChild;

//Create Header first, then add a Class and CSS style.
const header = document.createElement('header');
header.classList.add('header');
header.style.cssText = `
padding: 0 20px;
background-color: white; 
display: flex;
justify-content: space-between;
align-items: center;`

//Create logo, then add a Class, Text and CSS style.
const logo = document.createElement('h3');
logo.setAttribute('class', 'logo');
const logoText = document.createTextNode('Elzero');
logo.appendChild(logoText);
logo.style.cssText = 'color: #23A96E; font-weight: bold; margin-left: 15px';

//Create Features list.
const ul = document.createElement('ul');
ul.style.cssText = 'display: flex;'
const allFeatures = ["Home", "About", "Services", "Contact"];
for (let i = 0; i < allFeatures.length; i++) {
  const li = document.createElement('li');
  li.style.cssText = 'list-style: none; margin-right: 10px; '
  const liText = document.createTextNode(allFeatures[i]);
  li.append(liText);
  ul.append(li);
}

// Append The logo and ul to the header,
// then put the header before script file. 
header.prepend(logo);
header.append(ul)
scriptFile.before(header);

//Second, Create the Products Container.
const container = document.createElement('div');
container.setAttribute('class', 'content');
container.style.cssText = `
  margin: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));`;

// Then Create the Products.
for (let i = 0; i < 15; i++) {
  //this Loop creates 15 products the Appends everyone of them to the container div.
  const theProduct = document.createElement('div');
  theProduct.setAttribute('class', `product-${i + 1}`);
  theProduct.style.cssText = `
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-size: 18px;
  font-weight: bold`
  const productText = document.createTextNode(`${i + 1}`);
  theProduct.append(productText);
  container.appendChild(theProduct);
}
// Add  the Container Div after The Header.
header.after(container);


//Finally, Create the Footer.
const footer = document.createElement('footer');
const footerText = document.createTextNode('Copyright 2024');
// I think there is no need to add a class to these elements, but anyway it's practice.
logo.setAttribute('class', 'footer');
footer.style.cssText = `
background-color: #23A96E; 
padding: 30px; display: flex; 
justify-content: center; align-items: center; 
color: white; font-weight: bold; font-size: 18px;`

// add text Node to the footer, then add the footer after the container Element.
footer.append(footerText);
container.after(footer);

// Special thanks to my Teacher Osama Elzero. Jazaakallaahu Khayran Jazaa'a.




