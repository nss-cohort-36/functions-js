//Author: Kristen

//Displaying names in the console without a function
let firstName = "Jamal";
let lastName = "Haynes";

console.log(`${firstName} ${lastName}`);

firstName = "Debra";
lastName = "Gordon";

console.log(`${firstName} ${lastName}`);

firstName = "Ada";
lastName = "Grace";

console.log(`${firstName} ${lastName}`);

//USING FUNCTIONS
//This function displays names in the console
function displayName(first, last) {
    console.log(`${first} ${last}`);
}
displayName("Jamal", "Haynes");

//This function returns the value of first and last concatenated together. 
const fullName = function (first, last) {
    return `${first} ${last}`;
}

//assign the return value of fullName to a variable and then display it in the console
let debra = fullName("Debra", "Gordon");
console.log("debra", debra);

//because this is a pure function, given the same input, the same result will be given
let debra2 = fullName("Debra", "Gordon");
console.log("debra2", debra2);


//impure function
const noise = function () {
    return Math.random()
}
//returns a different results each time
console.log("noise 1", noise());
console.log("noise 2", noise());

//this is also an impure function because it affect other parts of our application
const updateDOM = function (message) {
    const el = document.getElementById("messages")
    const messageEl = `<p>${message}</p>`
    el.innerHTML += messageEl
}

updateDOM("I'm updating the DOM");
updateDOM("I'm adding a second message");

