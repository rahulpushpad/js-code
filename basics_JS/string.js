const userDetail = {
  userName: "blunt",
  firstName: "Rahul",
  lastName: "Pushpad",
  emailId: "rh@yhoo.com",
  age: 28,
};

console.log(
  `Welcome ${userDetail.userName} to our forum, your name is ${userDetail.firstName} ${userDetail.lastName} and Email: ${userDetail.emailId} and age is ${userDetail.age}`
);

let userChanges = userDetail;
userChanges.age = 42;
userChanges.firstName="vijay"

console.log(userChanges);

// Strings methods practice

const gameName="frycry"

console.log(gameName.toUpperCase());
console.log(gameName[0]);
console.log(gameName.__proto__);

//convert in array

const userData="rahul pushpad indore mp 8120382370"
console.log(userData.split(' '));



