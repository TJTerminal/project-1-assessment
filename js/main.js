//variables
let count = 0;

var inputValue = document.getElementById('input').value;
var finalCount = document.getElementById('sum');

// let playerGuess = parseInt(input.value)


let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
// clickhandler
plusButton.addEventListener('click', addition);
minusButton.addEventListener('click', subtract);


function addition() {
    inputValue = document.getElementById('input').value;
    // value entered in the <input> is added to the count and the new count value is displayed
    count = parseInt(count) + parseInt(inputValue);
    updateCount();
    console.log("addtion!");
    console.log(count);
}

function subtract() {
    inputValue = document.getElementById('input').value;
    // value entered in the <input> is subtracted from the count and the new count value is displayed
    count = parseInt(count) - parseInt(inputValue);
    updateCount();
    console.log("subtract!");
    console.log(count);
}

function updateCount() {
    finalCount.innerHTML = count;
    console.log(count);
}

updateCount();