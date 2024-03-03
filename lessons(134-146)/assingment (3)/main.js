let phone = "+(995)-123 (4567)";
const regEx = /\+\(\d{3}\)-[0-9]{3}\s\(\d{4}\)/g;

console.log(phone.match(regEx));