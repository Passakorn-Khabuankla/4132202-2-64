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

const conCatArr = Cars.concat(rname);
console.log(conCatArr.toString());
//spread operator
const catArr = [...Cars, ...rname];
console.log(catArr);

//iteration
const keys = Cars.keys();
let text = "";
for (x of keys)  {
    text += x;
}
console.log(text);

Cars.forEach(cat);
function cat (value, index, array) {
    text += value;
}
console.log(text);

Cars.map(addVal)
function addVal(value) {
    return value + "<br>";
}

const numbers = [10,20,30];
const over10 = numbers.filter(over10fn);
function over10fn(value) {
    return value > 10;
}
console.log(over10);

let sum = numbers.reduce(addFn);
function addFn(total, value) {
    return total + value;
}
console.log(sum);

let boolOver10 = numbers.every(over10fn);
console.log(boolOver10);
boolOver10 = numbers.some(over10fn);
console.log(boolOver10);

let first = numbers.find(over10fn);
console.log(first);
let firstKey = numbers.findIndex(over10fn);
console.log(firstKey);

const alphabet = Array.from("ABCDF");
console.log(alphabet);