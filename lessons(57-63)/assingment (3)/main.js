function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log('The age you entered is out of the Range')
  } else {
    console.log(`You are ${theAge} Years old`);
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 52} Weeks`);
    console.log(`${theAge * 365} Days`);
    console.log(`${theAge *  8760} Hours`);
    console.log(`${theAge *  525600} Minutes`);
    console.log(`${theAge *  3.156e+7} Seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
console.log('---')
ageInTime(22); 