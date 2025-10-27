// SIMPLE CLOCK CODE

function displayClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

document.getElementById(
    "clock"
  ).textContent = `${hours} : ${minutes} : ${seconds}`;
}

displayClock; 
setInterval(displayClock, 1000);
// variable = condition ? value_true: value_false

// SIMPLE CALCULATOR CODE
function simpleCalculator() {
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let operator = prompt("Enter operation (*, -, +, /): ");
let result;

if (isNaN(num1) || isNaN(num2)) {
    alert('You have entered an invalid number.');
}

switch (operator) {
  case"+":
    result = num1 + num2;
    break;
  case"*":
  result = num1 * num2;
   break;
  case "-":
    result = num1 - num2;
    break;
   case "/": 
   result = num2 === 0 ? "Cannot divide by 0" : num1 / num2;
   break;
    default:
        result = "You entered an invalid operation";
}

   alert("Result: " + result);
}
