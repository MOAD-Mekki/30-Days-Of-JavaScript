const dog = {
    name: "Buddy",
    legs: 4,
    color: "Brown",
    age: 3,
    bark: function() {
        return "Woof Woof";
    }
}
console.log(dog);  
console.log("The dog's name is:", dog.name);
console.log("The dog has", dog.legs, "legs.");
console.log("The dog's color is:", dog.color);
console.log("The dog is", dog.age, "years old.");
console.log("The dog barks:", dog.bark());

dog.breed = "Golden Retriever";
dog.getDogInfo = function() {
    return `${this.name} is a ${this.age}-year-old ${this.color} ${this.breed} with ${this.legs} legs.`;
};
