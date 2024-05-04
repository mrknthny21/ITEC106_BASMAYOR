
const display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}
function clearRecentEntry() {
    var currentValue = display.value;

    // Check if the current value is not empty
    if (currentValue.length > 0) {
        // Remove the last character from the current value
        var newValue = currentValue.slice(0, -1);

        // Update the display with the new value
        display.value = newValue;
    }
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}


