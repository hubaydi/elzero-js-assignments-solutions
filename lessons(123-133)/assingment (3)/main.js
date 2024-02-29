let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

const myInfoMap = new Map(Object.entries(myInfo));
console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has('role'));

// Needed Output

// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true