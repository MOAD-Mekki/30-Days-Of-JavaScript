import users from "./Users.js";

let maxSkills = users.Alex.skills.length;
let personWithMaxSkilss = '';
for (const user in users) {
     if (users[user].skills.length > maxSkills){
        maxSkills = users[user].skills.length;
        personWithMaxSkilss = user;
     }
}
console.log('The user who has many skills is ' + personWithMaxSkilss);

let countLoggedIn = 0;
for (const user in users){
    if (users[user].isLoggedIn === true){
        countLoggedIn++;
    }
}
console.log(`The number of users Logged in: ${countLoggedIn}`);

let usersGraterPoints = 0;
for (const user in users){
    let userPoints = users[user].points;
    if (userPoints >= 50){
        usersGraterPoints++;
    }
}
console.log(`Users that have grater thenor equal to 50 ponits are: ${usersGraterPoints}`);

let MernStackDev = [];
for (const user in users){
    let skills = users[user].skills;
    if (
        skills.includes('MongoDB') &&
        skills.includes('Express') &&
        skills.includes('React') &&
        skills.includes('Node')
      ){
        MernStackDev.push(user);
    }
}
console.log(`Users that are MERN Stack Developers : ${MernStackDev}`);

let copyUsers = Object.assign({},users);
copyUsers.Mekki = {
  email: "mekki@mekki.com",
  skills: ["HTML", "CSS", "JavaScript"],
  age: 18,
  isLoggedIn: true,
  points: 40
};
//console.log(copyUsers);

let keys = Object.keys(users);
console.log(keys);

let values = Object.values(users);
console.log(values);

const countries = {
  Algeria: {
    capital: "Algiers",
    population: 43000000,
    languages: ["Arabic", "Tamazight"]
  },
  France: {
    capital: "Paris",
    population: 67000000,
    languages: ["French"]
  }
};
for (const country in countries){
    console.log("Country: " , country);
    console.log("Capital: " , countries[country].capital);
    console.log("Population: " , countries[country].population);
    console.log("Languages: " , countries[country].languages);
    console.log("-----------------------------------");
}