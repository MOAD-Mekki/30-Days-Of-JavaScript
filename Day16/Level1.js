const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];

const txtSkills = JSON.stringify(skills);
console.log(txtSkills);

let age = 40;
const txtAge = JSON.stringify(age);
console.log(txtAge);
console.log(typeof txtAge); // string.

let isMarried = true

const txtMarrage = JSON.stringify(isMarried);
console.log(txtMarrage);
console.log(typeof txtMarrage);

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const txtData = JSON.stringify(student);
console.log(txtData);
