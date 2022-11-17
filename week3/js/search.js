let dwarves = ['sleepy', 'Dopey', 'Sneezy']

function DoesDwarfExistInList(listOfDwarves, dwarfToSearchFor){
    let found = false;
    console.log(`Searching..... for ${dwarfToSearchFor}`)

    for(let i=0; i<dwarves.length; i++){
        const currentDwarf = dwarves[i];
        if(currentDwarf.toLowerCase() == dwarfToSearchFor.toLowerCase()){
            found = true;
            break; //stop processing and  come out of hte loop
        }//end if
    } //end of the loop
    return found;
}

let foundDwarf = false;

foundDwarf = DoesDwarfExistInList(dwarves, 'Sneezy');
console.log(`Sneezy was found? ${foundDwarf}`);


foundDwarf = DoesDwarfExistInList(dwarves, 'Dopey');
console.log(`Dopey was found? ${foundDwarf}`);


foundDwarf = DoesDwarfExistInList(dwarves, 'Sleepy');
console.log(`Sleepy was found? ${foundDwarf}`);












let fleet = [
    {
        mf: 'Ford',
        model: 'Fiesta',
        engine: '1.2',
        colour: 'Pink',
        type: 'Sedan'
    },
    {
        mf: 'Volkswagen',
        model: 'Golf',
        engine: '1.6',
        colour: 'Red',
        type: 'Hatchback'
    },
    {
        mf: 'Toyota',
        model: 'Camry',
        engine: '1.3',
        colour: 'Blue',
        type: 'Hatchback'
    },
    {
        mf: 'Chevloret',
        model: 'Camaro',
        engine: 'Electric',
        colour: 'Steely Blue',
        type: 'Sedan'
    },
]




 let foundManufacturer = findCarByMf(fleet, "Ford");
  let message1 = document.getElementById("demo");

  message1.innerHTML = `Car search is ${foundManufacturer}`

   foundManufacturer = findCarByMf(fleet, 'chevloret');

   message1.innerHTML = `Car search for Chevloret is ${foundManufacturer}`;





function getAllCars()

















