let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newNumbers = numbers.map(function (item) {
  return item + 5;
});

document.write(newNumbers);

////////////////////////////////////

const fruits = ['Apple', 'Orange', 'Avocado', "Banana"];
const fruitList = fruits.map(fruit => fruit + ' is awesome');
const upperFruitList = fruitList.map(fruit => fruit.toUpperCase());

document.write("<hr>");
document.write(fruitList);
document.write("<hr>");
document.write(upperFruitList);


////////////////////////////////////

const people = [
  { name: "John", age: 13 },
  { name: "Dave", age: 14 },
  { name: "Rose", age: 15 },
  { name: "Jade", age: 16 }
]

const changedPeople = people.map(p => p.name.toUpperCase());

document.write("<hr>");
document.write(changedPeople);