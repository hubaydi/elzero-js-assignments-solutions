const method1 = new Date('2002-05-25'); method1.setHours(0);
console.log(method1);

const method2 = new Date(); method2.setFullYear(2002, 4, 25); method2.setHours(0, 0, 0);
console.log(method2);

const method3 = new Date(2002, 4, 25, 0, 0, 0);
console.log(method3);


// Needed Output

/*
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
*/