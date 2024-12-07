class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} is making sound.`);
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} is barks.`);
    }
}

class Cat extends Animal{
    speak(){
        console.log(`${this.name} is meows.`);
    }
}

class Cow extends Animal{
    speak(){
        console.log(`${this.name} is moos.`);
    }
}

const dog1 = new Dog("Buddy");
dog1.speak();
const dog2 = new Dog("Rex");
dog2.speak();

const cat1 = new Cat("Whiskers");
cat1.speak();
const cat2 = new Cat("Leo");
cat2.speak();

const cow1 = new Cow("Lilly");
cow1.speak();
const cow2 = new Cow("Bess");
cow2.speak();


