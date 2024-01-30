let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
let specialFriends = myFriends;
specialFriends.pop();
console.log(specialFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];