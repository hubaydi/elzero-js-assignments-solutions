// Create Your Object Here

const member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  
  //Method
  fullDetails: function () {
    return `My Name is ${this.name}, my Age is ${this.age}, I live in ${this.country}`
  }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt