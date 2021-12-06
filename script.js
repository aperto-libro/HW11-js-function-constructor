const SIZE_SMALL = {
  price: 50,
  calories: 20,
};
const SIZE_MIDDLE = {
  price: 75,
  calories: 30,
};
const SIZE_BIG = {
  price: 100,
  calories: 40,
};
const CHEESE = {
  price: 10,
  calories: 20,
};
const SALAD = {
  price: 20,
  calories: 5,
};
const POTATO = {
  price: 15,
  calories: 10,
};
const FLAVORING = {
  price: 15,
  calories: 0,
};
const MAYO = {
  price: 20,
  calories: 5,
};

function Hamburger(size) {
  this.price = size.price;
  this.calories = size.calories;

  this.addModifier = function (modifier) {
    this.price += modifier.price;
    this.calories += modifier.calories;
  };

  this.getPrice = function () {
    return this.price;
  };

  this.getCalories = function () {
    return this.calories;
  };
}

const hamburger = new Hamburger(SIZE_SMALL);
// const hamburger = new Hamburger(SIZE_MIDDLE);
// const hamburger = new Hamburger(SIZE_BIG);

hamburger.addModifier(POTATO);
hamburger.addModifier(MAYO);
// hamburger.addModifier(CHEESE);
// hamburger.addModifier(SALAD);
// hamburger.addModifier(FLAVORING);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());
