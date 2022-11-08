console.log("hello world")

let step = 1;

console.log(`I am going up ${step}`); step = step + 1;
console.log(`I am going up ${step}`); step = step + 1;
console.log(`I am going up ${step}`);step = step + 1;
console.log(`I am going up ${step}`); step++;
console.log(`I am going up ${step}`);step++;
console.log(`I am going up ${step}`);step++;
console.log(`I am going up ${step}`);step++;
console.log(`I am going up ${step}`);step++;
console.log(`I am going up ${step}`);step++;


// Initializing statement
let currentStep = 1;

// Terminating condition

let topStep = 315;

// Condition test


//series  of statements to execute 
   //incrementor
   while (currentStep < topStep){
    console.log(`I am going up step ${currentStep}`);
    currentStep++;
   }


   console.log(`I am at the top`);

   
// Initializing statement
// Terminating condition 
   //incrementor
//series  of statements to execute 

let topStep2 = 315;

for(let currentStep = 1; currentStep < topStep2; currentStep++){
    console.log(`for loop: ! am going up step ${currentStep}`);
}

  // exercise

  function GoUpSteps(totalSteps){
        
     let midpoint = parseInt(totalSteps/ 2);

    for(let currentStep = 1; currentStep < totalSteps; currentStep++){
        
    }
    if(currentStep == midpoint){
        console.log(`At the midpoint ${currentStep}`);
    }
    let stepType = "";
    if (currentStep % 2 == 1){
        stepType='odd'
    }
    else{
        stepType = 'Even'
    }
    console.log(`Function for loop: I am going up step ${currentStep} and it is ${stepType}`);
  }




  GoUpSteps(5);
  GoUpSteps(15);
  GoUpSteps(25);
  GoUpSteps(35);













