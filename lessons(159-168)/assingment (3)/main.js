const dateNow = new Date();

dateNow.setDate(0);
console.log(dateNow);

const months = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sebtember', 'Oct', 'Nov', 'Dec']

console.log(`Previous Month Is ${months[dateNow.getMonth()]} And it's Last Day Is ${dateNow.getDate()}`)

// Needed Output

/*
"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30" */