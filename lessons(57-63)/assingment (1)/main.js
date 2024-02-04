function sayHello(theName, theSex) {

  if (theSex === undefined) {
    console.log(`Hello ${theName}`)
  } else {
    switch (theSex) {
      case "Male":
        console.log(`Hello Mr ${theName}`);
        break;
      case "Female":
        console.log(`Hello Miss ${theName}`);
        break;
    }
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"