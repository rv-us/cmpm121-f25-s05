// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const INCREMENT_BUTTON_ID = "increment";
const COUNTER_DISPLAY_ID = "counter";
const HEADING_TEXT = "CMPM 121 Project";

// Color constants for background
const ODD_COLOR = "pink";
const EVEN_COLOR = "lightblue";

// Updates the UI to reflect the current counter value
function updateCounterDisplay() {
  const counterDisplay = document.getElementById(COUNTER_DISPLAY_ID);
  if (!counterDisplay) return;

  counterDisplay.innerHTML = `${counter}`;
  document.title = `Clicked ${counter}`;
  document.body.style.backgroundColor = counter % 2 === 1
    ? ODD_COLOR
    : EVEN_COLOR;
}

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${HEADING_TEXT}</h1>
    <p>Counter: <span id="${COUNTER_DISPLAY_ID}">0</span></p>
    <button id="${INCREMENT_BUTTON_ID}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get button elements from the document
  const incrementButton = document.getElementById(INCREMENT_BUTTON_ID);
  const decrementButton = document.getElementById("dec");
  const resetButton = document.getElementById("reset");
  const counterDisplay = document.getElementById(COUNTER_DISPLAY_ID);

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton || !counterDisplay) {
    return;
  }

  // Add click event to the increment button
  incrementButton.addEventListener("click", () => {
    counter++;
    updateCounterDisplay();
  });

  // Add click event to the decrement button
  decrementButton.addEventListener("click", () => {
    counter--;
    updateCounterDisplay();
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    counter = 0;
    updateCounterDisplay();
  });
}

// Start the counter app
setup();
