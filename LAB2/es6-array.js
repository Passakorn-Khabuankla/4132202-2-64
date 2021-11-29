const Cars = ["Toyota","Honda","Mazda"]
const fruits = [];
fruits[0] = "Apple";
fruits[3] = "Mango";
const rname = new Array("Win", "John", "James");
console.log(fruits);

const carPop = Cars.pop();
console.log(carPop);
console.log(Cars);

Cars.push("Kubota");
console.log(Cars);

const carShift = Cars.shift();
console.log(carShift);
console.log(Cars);

Cars.unshift("Mazda");
console.log(Cars);

Cars.unshift("Mazda");
console.log(Cars);

const slideArr = Cars.slice(0,2);
console.log(slideArr);