class User {
    #e;
    constructor (id, username, eSalary){
        this.i = id;
        this.u = username;
        this.#e = eSalary;
    }
    getSalary(){
        return parseInt(this.#e);
    }
}

const user = new User(100, 'moh', '5000 dz');
console.log(user.getSalary());

class Admin extends User{
    constructor(id, username, eSalary, priority){
        super(id, username, eSalary);
        this.p = priority;
    }
}

const admin = new Admin(101, 'ahmed', '6000 dz', 1);
console.log(admin.getSalary());
// console.log(admin.#e); the privet properties can be inhanteced from the super class 

/* 
   modifieing the sub-Class = inhentance
   modifieng the super-Class = prototype
*/

console.log(User.prototype);
User.prototype.sayHello = function () {   // adding a new method to the super class by using prototype
    return `Hello ${this.u}`;
}
console.log(user.sayHello());

// Concerning the Level3 exercice, we actually did the same idea before, the only difference is insted of using an Object -> we use a Class.