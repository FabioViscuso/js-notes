/* CLASSES */
/* Classes can be considered as a 'template' for objects,
   which are instances of a class */
/* The main difference between classes and objects is that
   classes can't be modified, therefore are safer to use */

class Submarine {
    constructor(model, depth, health) {
        this.model = model;
        this.depth = depth;
        this.health = health;
    }

    get Depth() {
        return this.depth;
    }

    set Depth(newDepth) {
        let diveDepth = this.depth + newDepth;
        if (diveDepth < 900) {
            this.depth = diveDepth;
        } else {
            return `Limit Exceeded`;
        }
    }

    /*     emerge(newDepth) {
           let emersionDepth = this.depth - newDepth;
           if (emersionDepth >= 0) {
               this.depth = emersionDepth;
               return this.depth;
           } else {
               return `You can't go above sea level`
           }
       } */

    attack(opponent) {
        let damage = Math.floor(Math.random() * 10);
        let opponentLifeAfterAttack = opponent.health - damage;
        opponent.health = opponentLifeAfterAttack;
        return opponent.health;
    }
}

const Uboot = new Submarine("Uboot", 0, 100);
const Torpedo = new Submarine("Torpedo", 0, 100);


class Person {
    constructor (name, surname, age, gender = '') {
        this.firstName = name;
        this.surname = surname;
        this.age = age
        this.gender = gender.toLowerCase();
    }
    fullData() {
        const {firstName, surname, age, gender} = this;
        return `This person's name is ${firstName} ${surname}, a ${age} years old ${gender}.`
    }
}

class Programmer extends Person {
    constructor (firstName, surname, age, gender, job, favLang, isSenior) {
        super(firstName, surname, age);
        this.job = job;
        this.favLang = favLang;
        this.isSenior = isSenior;
    }
    get favLang() {
        return this._favLang;
    }

    set favLang(param) {
        this._favLang = param;
    }
}

const john = new Person('John', 'Doe', 35, 'Male');
console.log(john);

const jim = new Programmer('Jim', 'Belushi', 32, 'Male', 'WebDev', 'JS', false);
console.log(jim);

console.log(jim.favLang);
jim.favLang = 'Go';
console.log(jim.favLang);

console.log(john.fullData());
