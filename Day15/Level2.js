class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    };
    speak(){
        console.log("");
    }
}

class Dog extends Animal {
    constructor (name , age, color, legs){
        super(name, age, color, legs);
    }
    speak(){
        console.log("WOOF!");
    }
}

class Cat extends Animal {
    constructor (name, age, color,legs){
        super(name, age, color, legs);
    }
    speak(){
        console.log("MEOW!");
    }
}

const dog = new Dog('Max', 2, 'Black', 'Parallel');
const cat = new Cat('Catrine',3, 'White', 'Parallel');

console.log(dog.name);
dog.speak();

console.log(cat.name);
cat.speak();
