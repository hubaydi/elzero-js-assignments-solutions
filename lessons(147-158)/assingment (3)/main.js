// Edit The Class
class User {
  #c
  constructor(username, card) {
    this.u = username;
    this.#c = card;
    this.transform = () => {
      let creditCard = this.#c.toString().match(/\d{4}/g).join('-');
      return creditCard;
    }
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number is: ${this.transform()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined