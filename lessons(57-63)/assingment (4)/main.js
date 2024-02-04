function checkStatus(a, b, c) {
  let holder = [];
  
  typeof a === 'string' ? holder.push(a) : typeof b === 'string' ? holder.push(b) : typeof c === 'string' ? holder.push(c) : holder.push("Unknown");
  typeof a === 'number' ? holder.push(a) : typeof b === 'number' ? holder.push(b) : holder.push(c);
  typeof a === 'boolean' ? holder.push(a) : typeof b === 'boolean' ? holder.push(b) : holder.push(c);
  holder[2] === true ? holder[2] = "Available for" : holder[2] = "not Available for";

  console.log(`Hello ${holder[0]} Your Age is ${holder[1]}, You are ${holder[2]} Hire`)
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus(false, "farah", 21)
checkStatus(true, false, 21) // Hello Unknown Your Age is 21, You are Available for Hire