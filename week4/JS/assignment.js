// map()

let officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];


let officer = officers.length;


for(let i = 0; i< officer; i++){
  let id = officers[i].id;
  let name = officers[i].name;
  console.log(` the number of officers is ${[i]}`);
  console.log(`the IDs for the officers are ${officers[i].id}`)
  console.log(`we have officer ${name} with ID no ${id}`)

}

console.log("====================================");



var officerIds = officers.map(function (officer){
  console.log(`${officer.id}`);
});


// reduce()

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];


let pilotsNames = pilots.map(function (pilots){
  console.log(`We have pilot ${pilots.name} with ID ${pilots.id}`);
});



var totalYears = pilots.reduce(function (accumulator, pilot) {
  return accumulator + pilot.years;
}, 0);


console.log(`${totalYears}`);


var mostExpPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

console.log(`${mostExpPilot}`);


// filter()

var Pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];



var rebels = Pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});

console.log(`${rebels}`);
var empire = Pilots.filter(function (pilot) {
  return pilot.faction === "Empire";
});


console.log(`${empire}`);











function myFunction(){

  var message = document.querySelector('.demo');
  message.innerHTML = "the function is onClick";

}


// practicing reduce, map, filter
              
      //my understanding of these 3
//map gets all the specific data you need in an array without looping
//reduce sums up the data with out looping or adding them 1 by 1
//filter gets data from an array excluding the unWanted ones






var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//map()

function myFunctions(){
 
let theName = personnel.map(function(person){
  return person.name;
});

var messages = document.querySelector('.demoTwo');
 messages.innerHTML = `${theName}`

}

// reduce()
//finding the sum of their score

function myFunc(){
  let theScore = personnel.reduce(function(accumulator, score){
      return accumulator + score.pilotingScore;
  },0);

  let myMessage = document.querySelector('.demoThree');
  myMessage.innerHTML = `${theScore}`;
}

//filter()
// filtering using ForceUser

function myFun(){
  
  let force = personnel.filter(function(forces){
    return forces.isForceUser === true;
  });
   
  const force2 = personnel.filter(function(forces){
    return forces.isForceUser === false;
  });
  
let message1 = document.querySelector('.demoFour');
let message2 = document.querySelector('.demoFive');

message1.innerHTML = `${force}`;
message2.innerHTML = `${force2}`;


}



// Combining map() reduce() and  filter()...............


var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});
// Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)

var jediScores = jediPersonnel.map(function (jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
});
// Result: [154, 110, 156]


var totalJediScore = jediScores.reduce(function (acc, score) {
  return acc + score;
}, 0);
// Result: 420
   

function myFunSix(){

  var totalJediScore = personnel
  .filter(function (person) {
    return person.isForceUser;
  })
  .map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);

  
let messageSix = document.querySelector('.demoSix');

messageSix.innerHTML = `${totalJediScore}`;
}










































































