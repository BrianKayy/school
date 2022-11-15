console.log('Hello World');

function DestroyAllPlanets(Planets){
    
    // checking my array
     console.log(`there are ${Planets.length} in the array, namely: ${Planets}`);
  // destroying the planets

  while(Planets.length > 0){
    console.log(`Planet ${Planets.pop()} has been destroyed`);
  }

}
//myArray of the Planets..........................................
DestroyAllPlanets( ["Earth", "Pluto", "Mars", "Jupiter", "Neptune", "Saturn", "Venus", "Uranus"]);
