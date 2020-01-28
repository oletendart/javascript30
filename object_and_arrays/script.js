"use strict";

// start with strings, numbers and booleans

// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = "Wes";
// let name2 = name;
// console.log(name, name2);
// name = "wesley";
// console.log(name, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
// team[3] = "Lux";

// however what happens when we update that array ?

// now here is the problem!

// oh no - we have edited the original array too!

// Why ? It's because that is an array reference, not an array copy. They Both point to th same array !

// So, how do we fix this ? We take a copy instead !
const team2 = players.slice();
const team3 = [].concat(players);
