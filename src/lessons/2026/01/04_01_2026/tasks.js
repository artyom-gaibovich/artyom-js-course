const animal = {
    eat(){
        console.log("eating")
    }
}
animal.eat();

const dog = Object.create(animal);
dog.eat();
dog.bark = function (){console.log("bark")}

dog.bark();

const superDog = Object.create(dog);
superDog.fly = function() {console.log("fly")}
superDog.fly()