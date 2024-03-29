const display = document.getElementById(`display`);


function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = " "
}
function displayAnswer() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
    if (display.value === "Error") {
        setTimeout(() => display.value = " ", 3000);
    }
}
