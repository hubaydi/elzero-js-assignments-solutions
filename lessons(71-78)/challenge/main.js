/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

const solution = myString.split("").map((char) => {
  return char === "," ? "" : char;
}).filter((char) => {
  return isNaN(char);
}).reduce((acc, cChar) => {
  return cChar === "_" ? acc + ' ' : acc + cChar;
}).slice(+true, -isNaN(myString))

// I was thinking that this Challenge is very very easy and piece of cake, compared to the previous challenges in the course,
// But it proved to be the hardest challenge in the course so far, it took me more than one and half hour so far.
// But I finally Got it's solution.

// wish u good lack brother/sister.

console.log(solution); // Elzero Web School