// Variables
var input = document.getElementById("text-input");
var button = document.getElementById("button");
var output = document.getElementById("output");
var parentContainer = document.getElementById("container");
var inputValue = input.value;
var clearButton = document.getElementById("clear");
//eventHandler
button.addEventListener("click", reversal);
button.addEventListener("click", alphabits);
button.addEventListener("click", palindrome);
clearButton.addEventListener("click", clear);

function reversal () {
    if (isNaN(input.value)) {
        let reversed = input.value;
        reversed = reversed.split("").reverse().join("");
        output.innerHTML = reversed;
    } else {
        alert("text only please");
    }
}

/// this clears the input field if a number is typed
function clear (input) {
    location.reload();
}

function alphabits() {
    let alpha = input.value;
    alpha = alpha.split("").sort().join("");
    var alphaOutput = document.createElement("p");
    alphaOutput.innerHTML = alpha;
    parentContainer.appendChild(alphaOutput);
}

function palindrome() {
    let inputVal = input.value;
    var palindromeP = document.createElement("p");
    var regex = "/[\W]/g";
    var stringTest = inputVal.toLocaleLowerCase().replace(regex, "");
    var reverStringTest = stringTest.split("").reverse().join("");
    if (stringTest === reverStringTest) {
        palindromeP.innerHTML = `${reverStringTest} Your text is a Palindrome!`;
        parentContainer.appendChild(palindromeP);
    } else {
        palindromeP.innerHTML = `${reverStringTest} Your text is NOT a Palindrome`;
        parentContainer.appendChild(palindromeP);
    }
}

document.addEventListener('keypress', (event) => {
//    console.log(event);
  var keyName = event.key;
  if (keyName === "Enter") {
    event.preventDefault();
    reversal();
    alphabits();
    palindrome();
  }
}, false);


