function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    for (let i = 0; i < zName.length; i++) {
      if (zName[i] === " ") {
        zName[i + 1].toUpperCase();
        return zName.slice(0, i + 2) + ".";
      }
    }
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    let theAge = parseInt(zAge);

    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32

    return `Your Age Is ${theAge}`
  }
  function countryTwoLetters(zCountry) {
    let countryCode = (zCountry[0] + zCountry[1]);
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return countryCode.toUpperCase();
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You live in ${countryTwoLetters(zCountry)}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY