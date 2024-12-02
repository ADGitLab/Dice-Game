const dice = document.querySelector(".dice");
const roll = document.querySelector(".roll");
const pass = document.querySelector(".pass");
const refresh = document.querySelector(".new");
const dot = document.querySelectorAll(".dot");
const dot1 = document.querySelector(".dot1");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");
const dot5 = document.querySelector(".dot5");
const dot6 = document.querySelector(".dot6");
const dot7 = document.querySelector(".dot7");
const dot9 = document.querySelector(".dot9");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const p1 = document.querySelector(".p-1");
const p2 = document.querySelector(".p-2");
const one = document.querySelector(".one-p");
const two = document.querySelector(".two-p");

let currentPlayer = "player1";
let sum1 = 0;
let sum2 = 0;

function changePlayer() {
  if (currentPlayer == "player1") {
    currentPlayer = "player2";
    num1.textContent = 0;
  } else if (currentPlayer == "player2") {
    currentPlayer = "player1";
    num2.textContent = 0;
  }
}

function spin() {
  const point = Math.floor(Math.random() * 6);

  function update() {
    if (currentPlayer == "player1") {
      sum1 += point + 1;
      num1.textContent = sum1;
      p1.textContent = sum1;
    } else if (currentPlayer == "player2") {
      sum2 += point + 1;
      num2.textContent = sum2;
      p2.textContent = sum2;
    }
  }

  if (point === 0) {
    dot5.classList.add("visible");
    dot1.classList.remove("visible");
    dot3.classList.remove("visible");
    dot4.classList.remove("visible");
    dot6.classList.remove("visible");
    dot7.classList.remove("visible");
    dot9.classList.remove("visible");
    dice.classList.add("show");
    changePlayer();
    marker();
  } else if (point === 1) {
    dot4.classList.add("visible");
    dot6.classList.add("visible");
    dot1.classList.remove("visible");
    dot3.classList.remove("visible");
    dot5.classList.remove("visible");
    dot7.classList.remove("visible");
    dot9.classList.remove("visible");
    dice.classList.add("show");
    update();
  } else if (point === 2) {
    dot1.classList.add("visible");
    dot5.classList.add("visible");
    dot9.classList.add("visible");
    dot3.classList.remove("visible");
    dot4.classList.remove("visible");
    dot6.classList.remove("visible");
    dot7.classList.remove("visible");
    dice.classList.add("show");
    update();
  } else if (point === 3) {
    dot1.classList.add("visible");
    dot3.classList.add("visible");
    dot7.classList.add("visible");
    dot9.classList.add("visible");
    dot4.classList.remove("visible");
    dot6.classList.remove("visible");
    dot5.classList.remove("visible");
    dice.classList.add("show");
    update();
  } else if (point === 4) {
    dot1.classList.add("visible");
    dot3.classList.add("visible");
    dot5.classList.add("visible");
    dot7.classList.add("visible");
    dot9.classList.add("visible");
    dot4.classList.remove("visible");
    dot6.classList.remove("visible");
    dice.classList.add("show");
    update();
  } else if (point === 5) {
    dot1.classList.add("visible");
    dot3.classList.add("visible");
    dot4.classList.add("visible");
    dot6.classList.add("visible");
    dot7.classList.add("visible");
    dot9.classList.add("visible");
    dot5.classList.remove("visible");
    dice.classList.add("show");
    update();
  }

  if (currentPlayer == "player1") {
    one.classList.add("bg");
    two.classList.remove("bg");
  } else if (currentPlayer == "player2") {
    one.classList.remove("bg");
    two.classList.add("bg");
  }
}

roll.addEventListener("click", spin);
pass.addEventListener("click", changePlayer);
refresh.addEventListener("click", () => {
  location.reload();
});
