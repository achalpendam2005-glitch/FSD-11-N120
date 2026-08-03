let Brands = ["Apple","HP","Dell","Lenovo","Asus","Victus"];

//to print collection of Brands
console.log(Brands);

//to print Orange on console
console.log(Brands[3]);

Brands.forEach(b => console.log(b));



// add more Brands in an existing array
Brands.push("Samsung","Acer","LG","Microsoft");
console.log("New Brands List : "+Brands);

//to print total no of Brands
console.log("Total Brands ="+Brands.length);

//list out the Brands whose name start with M
let M_Brands = Brands.find(Brands => Brands.startsWith("M"));
console.log("Brands starting with M:", M_Brands);