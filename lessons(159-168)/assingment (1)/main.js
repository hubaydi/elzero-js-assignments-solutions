const myBirthday = new Date('2002-05-25');
const dateNow = new Date();

const ageInMS = dateNow - myBirthday;
console.log(ageInMS + ' MilliSeconds');

const ageInSeconds = (ageInMS / 1000).toFixed();
console.log(ageInSeconds + ' Seconds');

const ageInMinutes = (ageInSeconds / 60).toFixed();
console.log(ageInMinutes + ' Minutes');

const ageInHours = (ageInMinutes / 60).toFixed();
console.log(ageInHours + ' Hours');

const ageInDays = (ageInHours / 24).toFixed();
console.log(ageInDays + ' Days');

const ageInMonths = (ageInDays / 30).toFixed();
console.log(ageInMonths + ' Months');

const ageInYears = (ageInMonths / 12).toFixed();
console.log(ageInYears + ' Years');


// Needed Output
/*
  "1247939400 Seconds"
  "20798990 Minutes"
  "346650 Hours"
  "14444 Days"
  "481 Months"
  "40 Years"
*/