let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
let isFound = haystack.includes("JS");

if (isFound) {
  console.log("Found");
}

isFound = haystack.indexOf(needle);

if (isFound !== -1) {
  console.log("Found");
}

isFound = haystack.lastIndexOf(needle);

if (isFound !== -1) {
  console.log("Found");
}
