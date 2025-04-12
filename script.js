const affirmations = [
  "You are capable of amazing things!",
  "Believe in yourself.",
  "You are stronger than you think.",
  "Every day is a fresh start.",
  "You’ve got this!",
  "Your potential is endless.",
  "Be kind to yourself."
];

function newAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmation").innerText = affirmations[randomIndex];
}
