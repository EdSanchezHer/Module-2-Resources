// ASSIGNING CONTEXT USING BIND
// let aboundFunc = func.bind(context, arg1, arg2, etc..)

let cat = {
  name: "pancake",
  speak: function () {
    console.log(`hi my name is ${this.name}`);
  },
};

let boundSpeakFunc = cat.speak.bind(cat);
boundSpeakFunc(); // hi my name is pancake

let speakFunc = cat.speak;
speakFunc(); // hi my name is undefined

cat.speak();

// BINDING METHODS TO MULTIPLE OBJECTS

let animal = {
  speak: function () {
    console.log(`hi my name is ${this.name}`);
  },
};

let dog = {
  name: "belka",
};

let cat = {
  name: "pancake",
};

let dogSpeakFunc = animal.speak.bind(dog);
let catSpeakFunc = animal.speak.bind(cat);

// dogSpeakFunc(); // hi my name is belka
// catSpeakFunc(); // hi my name is pancake

// BINDING WITH ARGUMENTS

function multiply(a, b) {
  return a * b;
}

let double = multiply.bind(null, 2);
let triple = multiply.bind(null, 3);

// multiply(2,5)
// console.log(double()); // 10

// multiply(3,4)
// console.log(triple(4)); // 12

// NO BINDING WITH ARROW FUNCTIONS

// let bodhi = {
// 	name: 'bodhi'
// }

// let noReturnName = () => {
// 	console.log(this.name);
// }
// // noReturnName() // undefined

// let notBound = noReturnName.bind(bodhi);
// // notBound(); // undefined

// let returnName = function() {
// 	console.log(this.name);
// }

// let bound = returnName.bind(bodhi);
// bound() // bodhi
