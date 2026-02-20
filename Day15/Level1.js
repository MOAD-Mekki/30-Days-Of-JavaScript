class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    };
}

const dog = new Animal('Max', 2, 'Black', 'Parallel');
const cat = new Animal('Catrine',3, 'White', 'Parallel');

console.log(dog);
console.log(cat);