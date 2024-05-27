// Initialize the display value
let displayValue = "0";

// Function to append digits to the display
function appendToDisplay(digit) {
    if (displayValue === "0") {
        displayValue = digit;
    } else {
        displayValue += digit;
    }
    document.getElementById("display").value = displayValue;
}

// Function to clear the display
function clearDisplay() {

    displayValue = "0";
    document.getElementById("display").value = displayValue;
}

// Function to calculate the result
function calculate() {
    try {
        const result = eval(displayValue); // Use eval() for simplicity (not recommended in production)
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}