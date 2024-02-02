let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
};

let doggie = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
};

let tardyQueen = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
};

console.log(tardyQueen);


// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 1;
superChimpTwo["astronautID"] = 2;
doggie["astronautID"] = 4;
salamander["astronautID"] = 5;
tardyQueen["astronautID"] = 6;

// console.log(tardy);

// Create an array to hold the animal objects.


// Print out the relevant information about each animal.

console.log(animalCrew);

// Start an animal race!

// Crew Reports

let animalCrew = [superChimpOne, superChimpTwo, doggie, salamander, tardyQueen];

function crewReports(array) {
   let crewInfo = [];
   for (i = 0; i < array.length; i++) {
   crewInfo.push(`${array[i]["name"]} is a ${array[i]["species"]}. They are ${array[i]["age"]} years old and ${array[i]["mass"]} kilograms. Their ID is ${array[i]["astronautID"]}.`);
   }
return crewInfo;
}

console.log(crewReports(animalCrew));

//Fitness Test

function fitnessTest(crewArr) {
   let results = []

   for (const crewMember of crewArr) {
      let steps = 0;
      let turns = 0;
      while (steps <= 20) {
          
      }
   }
}