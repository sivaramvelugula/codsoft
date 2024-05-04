// Add event listener to capture key presses
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is a number
    if (!isNaN(parseInt(event.key))) {
        // If yes, append the pressed number to the display
        appendToDisplay(event.key);
    } else if (event.key === '.') {
        // If the pressed key is '.', check if there is already a '.' in the display
        // If not, append '.' to the display
        var currentValue = document.getElementById('display').value;
        if (currentValue.indexOf('.') === -1) {
            appendToDisplay(event.key);
        }
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        // If the pressed key is an operator, append it to the display
        appendOperatorToDisplay(event.key);
    } else if (event.key === 'Enter') {
        // If the pressed key is 'Enter', perform calculation
        calculate();
    } else if (event.key === 'Backspace') {
        // If the pressed key is 'Backspace', clear the display
        clearDisplay();
    }
});

// Add event listener for operator buttons
var operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        appendOperatorToDisplay(button.textContent);
    });
});

// Function to append operators to display
function appendOperatorToDisplay(operator) {
    var currentValue = document.getElementById('display').value;
    // Check if the last character in the display is already an operator
    // If not, append the operator to the display
    if (!isNaN(parseInt(currentValue[currentValue.length - 1]))) {
        appendToDisplay(operator);
    }
}

// Existing functions
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Dark mode toggle
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
