let fruits = ["Apple","Pineapple","kiwi","Orange","guava","Strawberry"];

//to print collection of fruits
console.log(fruits);

//to print Orange on console
console.log(fruits[3]);

fruits.forEach(fruit => console.log(fruit));


// add more fruit in an existing array
fruits.push("watermwlon","cherry","Papaya","Blueberry");
console.log("New Fruits List : "+fruits);

//to print total no of fruits
console.log("Total fruits ="+fruits.length);

//list out the fruits whose name start with C
let C_fruits = fruits.find(f => f.startsWith("C"));
console.log("fruits starting with C:", C_fruits);

//list out the fruit which contain 'pp'
let pp_fruits = fruits.find( f => f.includes("pp"));

console.log("fruits include pp : "+pp_fruits );

//list out the fruits which include "cherry"
let erry_fruits=fruits.filter(f => f.includes("erry"));
console.log("fruits include pp :"+erry_fruits);

//list out the fruits which ends with "a"
let a_fruits =fruits.filter(f =>f.endsWith('a'));
console.log("fruits ends with a :"+a_fruits);

//Print only 3 fruits
let first3fruits = fruits.slice(0,3); 
console.log(first3fruits);