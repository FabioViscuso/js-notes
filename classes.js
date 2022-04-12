/* CLASSES */
/* Classes can be considered as a 'template' for objects,
   which are instances of a class */
/* The main difference between classes and objects is that
   classes can't be modified, therefore are safer to use */
class Plane {
    constructor(engine, model, serial) {
       this.engine = engine;
       this.model = model;
       this.serial = serial;
    }
   
    report() {
        let direction = Math.floor(Math.random() * 2)
        return direction;
    }
    fly() {
        return `${this.model} is flying!`;
    }
}
   
const Airbus = new Plane('Rolls-Royce', 'A320', 2431);
const Boeing = new Plane('Pratt-Whitney', 'B747', 4193)
   
console.log(Airbus.fly());
   
const playGame = () => {
    if(Airbus.fly() === Boeing.fly()) {
        return 'Collision imminent!';
    } else {
        return 'All safe';
    }
}
   
   console.log(playGame());
   
   
   class Submarine {
       constructor (model, depth, health) {
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
   
   const Uboot = new Submarine('Uboot', 0, 100);
   const Torpedo = new Submarine('Torpedo', 0, 100);