const myToDo = [];

// myToDo.push("Dog");
// myToDo.push("Cow");
// myToDo.push("Buff");

// myToDo.forEach((todo, index) => {
//     console.log(`This Task no is: ${index} is ${todo}`);

// })

myToDo.unshift("Dog");
myToDo.unshift("Cow");
myToDo.unshift("Buff");

myToDo.forEach((todo, index) => {
    console.log(`This Task no is: ${index + 1} is ${todo}`);

})