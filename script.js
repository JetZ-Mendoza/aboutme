const texts = ["Programmer", "Embedded Systems", "Networking", "SQL"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  if (!isDeleting) {
    letter = currentText.slice(0, ++index);
  } else {
    letter = currentText.slice(0, --index);
  }

  document.getElementById("typing").textContent = letter;

  let typingSpeed = isDeleting ? 50 : 120;

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    typingSpeed = 1000; // pause before deleting
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    typingSpeed = 500; // pause before typing new word
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);
