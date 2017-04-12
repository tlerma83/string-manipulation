// Variables
var input = document.getElementById("text-input");
var button = document.getElementById("button");
var parentContainer = document.getElementById("container");
var testString = "";
var clearButton = document.getElementById("clear");

//create each element outside of functions so it does not repeat and add additional paragraphs with each keypress...also each paragraph needs its own var otherwise it will be set to new value and LAST value only when functions run
var output1 = document.createElement("p");
var output2 = document.createElement("p");
var output3 = document.createElement("p");
// append to parent to prevent from adding to page more than once and replacing existing HTML unnecessarily
parentContainer.appendChild(output1);
parentContainer.appendChild(output2);
parentContainer.appendChild(output3);
// provides option to clear text field
function clear (input) {
    location.reload();
}
//main function that calls all functions
function run () {
    testString = input.value;
    if (isNaN(input.value)) {
        reversal();
        alphabits();
        palindrome();
    } else {
        alert("enter number");
    }
}

function reversal () {
    output1.innerHTML = testString.split("").reverse().join("");
}

function alphabits() {
    output2.innerHTML = testString.split("").sort().join("");
}

function palindrome() {
    var stringTest = testString.split("").reverse().join("").toLocaleLowerCase();
    if (stringTest === testString) {
        output3.innerHTML = `${stringTest} Your text is a Palindrome!`;
    } else {
        output3.innerHTML = `${stringTest} Your text is NOT a Palindrome`;
    }
}
//.eventlistener has built in funtion that passes the argument to "e" (what is passes, then becomes "e") once event happens and function is called
function keyboardEvent(e) {
    if (e.keyCode == 13) {
        run();
    }
}

input.addEventListener("keypress", keyboardEvent);
button.addEventListener("click", run);
clearButton.addEventListener("click", clear);
