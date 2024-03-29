const display = document.getElementById("display");

// Append input to the display
function appendToDisplay(input) {
  display.value += input;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Evaluate and display the answer
function displayAnswer() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }

  if (display.value === "Error") {
    setTimeout(() => (display.value = ""), 3000);
  }
}
