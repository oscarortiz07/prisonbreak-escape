const Modal = document.getElementById("Modal");
const closeModal = document.getElementById("closeModal");
const ModalText = document.getElementById("ModalContent");

const nextModal = document.getElementById("nextRoom-container");

const note = document.getElementById("note");
const hint = document.getElementById("hint");
const lock = document.getElementById("lock");
const lockHint = document.getElementById("lockHint");
const lockBox = document.getElementById("lockbox");

const key = document.getElementById("key");

const passwordEnter = document.getElementById("passwordEnter");
const passwordInput = document.getElementById("passwordInput");
const password = document.getElementById("password");

const timer = document.getElementById("timer");

const cop = document.getElementById("cop");

let timerInterval;

let hasKey = false;

note.onclick = () => {
  Modal.style.display = "block";
  ModalText.parentNode.style.backgroundColor = "whitesmoke";
  ModalText.innerText = "A secret is sealed, five numbers wait, but their meanings concealed. The alphabet holds the key, but dont be fooled, its not as easy as it seems. A common set of rules, a map, a match, a guide.\n 2 1 4 7 5";
};

hint.onclick = () => {
  Modal.style.display = "block";
  ModalText.parentNode.style.backgroundColor = "#FCDC5A";
  ModalText.innerText = "A B C D E F G H I J\n1 2 3 4 5 6 7 8 9 10";
};

closeModal.onclick = () => {
  Modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === Modal) {
    Modal.style.display = "none";
  }
};

let style = document.createElement("style");

passwordEnter.onclick = () => {
  if (passwordInput.value.toLowerCase() == "badge") {
    // const body = document.getElementById("body");
    // body.classList.add("keyCursor");
    hasKey = true;
    // key.style.display = "block";
    passwordInput.value = "";
    // Create a new <style> element

    // Add the CSS rule as the content of the style tag
    style.innerHTML = `
  * {
    cursor: url("./assets/keySmall.png"), auto !important;
  }
`;

    // Append the style element to the head of the document
    document.head.appendChild(style);
  } else {
    passwordInput.style.color = "red";
    passwordInput.value = "wrong, try again";
    setTimeout(() => {
      passwordInput.value = "";
      passwordInput.style.color = "gray";
    }, 2000);
  }
};

lock.onclick = () => {
  if (hasKey) {
    clearInterval(timerInterval);
    hasKey = false;
    key.style.display = "none";
    style.innerHTML = `
`;

    document.getElementById("keyUnlock").play();
    nextModal.style.display = "block";
  } else {
    lockHint.style.display = "block";
    setTimeout(() => {
      lockHint.style.display = "none";
    }, 1500);
  }
};

let lockOpen = false;

lockBox.onclick = () => {
  if (!lockOpen) {
    password.style.display = "block";
    lockOpen = true;
  } else {
    password.style.display = "none";
    lockOpen = false;
  }
};

let timerSeconds = 120;

window.onload = () => {
  timerInterval = setInterval(() => {
    if (timerSeconds === 0) {
      cop.style.display = "block";
      setTimeout(() => {
        window.location.href = "https://punkbound.github.io/LVL1/";
      }, 3500);
      clearInterval(timerInterval);
    } else {
      timer.innerText = timerSeconds + " seconds";
      timerSeconds -= 1;
    }
  }, 1000);
};
