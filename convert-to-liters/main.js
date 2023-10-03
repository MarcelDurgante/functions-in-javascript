// Create a new function that converts gallons to liters
const gallonsInput = document.getElementById('gallonsInput');
const liters = document.getElementById('liters');
const btn = document.getElementById('btn');

// function declaration
function convertToLiters(gallons){
    return gallons * 3.785;
}

btn.addEventListener('click', () => {
    liters.textContent = convertToLiters(gallonsInput.value);
});

/*

// function expression
const convertToLiters = function(gallons){
    return gallons * 3.785;
}
console.log(convertToLiters(10));
 */

/*
// arrow function
const convertToLiters = gallons => gallons * 3.785;
console.log(convertToLiters(10));
 */

/*

// function constructor
const convertToLiters = new Function("gallons", 'return gallons * 3.785;');
console.log(convertToLiters(10));
 */




