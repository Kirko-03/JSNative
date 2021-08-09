function Animal(name) {
  this.name = "Animal";
  if (name) {
    this.name = name;
  }
  this.__proto__ = Animal.prototype
  return {
      
    walk: () => {
      console.log(`${this.name} walking`);
    return this.walk
    },
    eat: () => {
      console.log(`${this.name} eat`);
      return this.eat
    },
    sleep: () => {
      console.log(`${this.name} sleep`);
    return this.sleep
    },
    
  };
}

let rabbit = new Animal("Rabbit");
rabbit.__proto__ = Animal.prototype;
console.log(rabbit);
rabbit.sleep();
// rabbit.eat();
// rabbit.walk(); 
function Monkey(name) {
  this.name = "Monkey";
  if (name) {
    this.name = name;
  }
  return{
     roar:() => {
      console.log(`${this.name} roar`);
      return this.roar
    },
    
    climp:() => {
      console.log(`${this.name} climp`);
    return this.climp
    }
}
}
Monkey.__proto__ = Animal.prototype
let Dimka = new Monkey('Dimka')
Dimka.__proto__ = Monkey.prototype
console.log(Dimka);
// Dimka.sleep()