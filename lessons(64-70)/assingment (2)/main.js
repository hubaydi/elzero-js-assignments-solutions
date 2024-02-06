// function itsMe() {
//   return `Iam A Normal Function`;
// }

// Arrow function
let itsMe = () => `Iam an Arrow Function`;

console.log(itsMe()); // Iam A Normal Function


// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// Arrow function
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org