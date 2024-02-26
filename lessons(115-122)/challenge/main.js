let chosen = prompt('Enter a Number', '1');

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


// Write Your Code Here
const [personOne, personTwo, personThree] = myFriends;
let title, age, available, skill2;

if (+chosen === 1) {
  ({ title, age, available, skills: [, skill2] } = personOne);

} else if (+chosen === 2) {
  ({ title, age, available, skills: [, skill2] } = personTwo);

} else if (+chosen === 3) {
  ({ title, age, available, skills: [, skill2] } = personThree);

}
console.log(title);
console.log(age);
console.log(available ? "Available" : "Not available");
console.log(skill2);

// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"