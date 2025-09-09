// script.js - BlissBroom

/* 
============================
 Part 2: Functions & Scope
============================
*/

// A reusable function with parameters and return value
function calculateCleanScore(sweeps, rooms) {
  return sweeps * rooms * 10;
}

// Function demonstrating local scope
function getBroomMessage() {
  let message = "BlissBroom is ready to clean!";
  return message;
}

// Event: Calculate Clean Score
document.getElementById('score-btn').addEventListener('click', () => {
  const score = calculateCleanScore(3, 4); // Example values
  document.getElementById('score-output').textContent =
    `Your BlissBroom Clean Score is ${score}!`;
});

// Event: Show Scope Message
document.getElementById('scope-btn').addEventListener('click', () => {
  const result = getBroomMessage();
  document.getElementById('scope-output').textContent = result;
});

/* 
============================================
 Part 3: Trigger CSS Animation via JavaScript
============================================
*/

// Reusable function to trigger animation
function triggerBroomSweep() {
  const broom = document.getElementById('broom');
  broom.classList.add('sweep');

  // Remove class after animation ends so it can be triggered again
  setTimeout(() => {
    broom.classList.remove('sweep');
  }, 800);
}

// Event: Trigger broom sweep
document.getElementById('sweep-btn').addEventListener('click', triggerBroomSweep);
