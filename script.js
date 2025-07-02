// /**
//  *
//  * @param {*} name - string
//  * @param {*} age - number
//  */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`This is ${this.name}. They are ${this.age} years old.`);
  };
}

const alice = new Person("Alice", "30");
alice.greet();

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
      console.log(`This is ${this.name}. They are ${this.age} years old.`);
    };
    this.haveBirthday = function () {
      this.age++;
      console.log(`Happy birthday! You are now ${this.age} years old.`);
    };
  }
}

const allie = new People("Allie", 30);

allie.greet();
allie.haveBirthday();
