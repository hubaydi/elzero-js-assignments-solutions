/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar",];

let i = +false; // +false = 0;

for (; i < myAdmins.length; ) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  i++;
}
document.write(`<div>We Have ${i} Admins</div>`);
document.write(`<hr>`)

outerLoop: for (let i = +false; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }

  document.write(`<div> The Admin for Team ${i + +true} is: ${myAdmins[i]}`); // +true = 1;
  document.write(`<h3>Team Members:</h3>`);

  let counter = +true;
  nestedLoop: for (let j = +false; j < myEmployees.length; j++) {
    if (myAdmins[i].substring(+false, +true) === myEmployees[j].substring(+false, +true)) {
      document.write(`<p>${counter}: ${myEmployees[j]}</p>`)
      counter++;
    }
  }
  document.write("</div>");
  document.write("<hr>");
}
