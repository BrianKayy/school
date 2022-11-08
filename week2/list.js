console.log("Hello World");

let fruit1 = "apple";
let fruit2 = "pear";
let fruit3 = "banana";

let fruit = [];

fruit[0] = "apple";
fruit[1] = "pear";
fruit[2] = "banana";

console.log(`There are ${fruit.length} pieces of fruit in the basket`);
console.log(`the first piece of fruit is ${fruit[0]}`);
console.log(`the second piece of fruit is ${fruit[1]}`);
console.log(`the third piece of fruit is ${fruit[2]}`);


let firstName = ['Bruce', 'Peter', 'Clarke'];
console.log(`There are ${firstName.length} first names`);
console.log(`the first Firstname is ${firstName[0]}`);
console.log(`the second Firstname is ${firstName[1]}`);
console.log(`the third Firstname is ${firstName[2]}`);

firstName.push("David")
console.log(`the last firstName is ${firstName[firstName.length-1]}`);

for(let counter = 0; counter < firstName.length; counter++){
    console.log(`The firstName at position ${counter} is ${firstName[counter]}`);

}



    let lastPersonRemoved = firstName.pop();

    console.log(`the lastPersonRemoved is ${lastPersonRemoved}`)

     lastPersonRemoved = firstName.pop();

    console.log(`the lastPersonRemoved is ${lastPersonRemoved}`)
    
     lastPersonRemoved = firstName.pop();

    console.log(`the lastPersonRemoved is ${lastPersonRemoved}`)
    



        
let Dwarves = ["sleepy", "Dopey", "Snezy", "Grumpy", "Happy", "Bashful", "Doc"];
console.log(`there are ${Dwarves.length} dwarves in the set`);
console.log(`the  first dwarf is ${Dwarves[0]}`);
console.log(`the  second dwarf is ${Dwarves[1]}`);
console.log(`the  third dwarf is ${Dwarves[2]}`);
console.log(`the  fourth dwarf is ${Dwarves[3]}`);
console.log(`the  fifth dwarf is ${Dwarves[4]}`);
console.log(`the  sixth dwarf is ${Dwarves[5]}`);
console.log(`the  seventh dwarf is ${Dwarves[6]}`);

   Dwarves.push("funny");

console.log(`${Dwarves}`);

    for(let dwarf=0; dwarf< Dwarves.length; dwarf++ )
    console.log(`the dwarves are ${dwarf}`);





















