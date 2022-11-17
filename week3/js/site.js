//console.log(`the site is running`);

//Objects
const car2 = {'mf': 'Nissan', 'model':'Navara', 'engine': 1.2, 'color':'Gray','type':'pickup'};

console.log(`the car is called ${car2.mf} and the model is ${car2.model}`);

let fleet = [
    {'mf': 'Nissan', 'model':'Navara', 'engine': 1.2, 'color':'Gray','type':'pickup'},
    {'mf': 'Nissan', 'model':'Navara', 'engine': 1.2, 'color':'black','type':'pickup'},
    {'mf': 'Nissan', 'model':'Navara', 'engine': 1.2, 'color':'blue','type':'pickup'}

]

const sizeOfFleet = fleet.length;
for(let i =0; i<sizeOfFleet; i++){
  const currentCar = fleet[i];
    console.log(`the current car is called ${fleet[i].mf} and the color is ${fleet[i].color}`);
}

//for loop

//FOR--OF--LOOP----------------------

for(const currentCar of fleet){
    const message = `the crrent car is called ${currentCar.mf} and the engine is ${currentCar.engine}`;

    console.log(message);

for(let i=0; i<sizeOfFleet; i++){
    let mf = fleet[i].mf;
    let colour = fleet[i].color;
    let model = fleet[i].model;
    console.log(`the current car ${i} is called ${mf} and the colour is ${model}`);

}

for(let i=0; i<sizeOfFleet; i++){
    ({mf, model, engine} = fleet[i]);
    console.log(`the (obj) current car ${i} is called ${mf} and the color is ${model}`)

}

for(const currentCar of fleet){
    ({mf, model, engine} = currentCar);
    const message = `the current car is called ${mf} and the engine is ${engine}`
    console.log(message);
}
































}


