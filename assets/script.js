const textElement = document.getElementById('typing-text');
const phrases = [
  "Software Engineering Student",
  "Backend Developer",
  "DevOps Engineer",
  "Linux Enthusiast"
];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function type() {
  const phrase = phrases[currentPhrase];
  if (isDeleting) {
    currentChar--;
    textElement.textContent = phrase.substring(0, currentChar);
    if (currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 50);
    }
  } else {
    currentChar++;
    textElement.textContent = phrase.substring(0, currentChar);
    if (currentChar === phrase.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else {
      setTimeout(type, 100);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);
