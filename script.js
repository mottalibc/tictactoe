const boxes = document.querySelectorAll(".box");
const btn = document.querySelector(".reset");

// Reset Button
btn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    document.querySelector(".win").innerText = "";
    count = 1;
  });
});

// for checking Player Turn
let turn = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

let count = 1;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      box.style.color = "red";
      turn = false;
    } else {
      box.innerText = "x";
      box.style.color = "black";
      turn = true;
    }

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      document.querySelector(".win").innerText = "Draw";
    } else {
      count++;
    }

    box.disabled = true;
  });
});

const btnDisable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// For checking winner-->

const checkWinner = () => {
  for (let pattern of winpattern) {
    const position1 = boxes[pattern[0]].innerText;
    const position2 = boxes[pattern[1]].innerText;
    const position3 = boxes[pattern[2]].innerText;

    if (position1 !== "" && position2 !== "" && position3 !== "") {
      if (position1 === position2 && position2 === position3) {
        btnDisable();
        count = 1;
        document.querySelector(".win").innerText = `Winner is ${position1}`;
        return true;
      }
    }
  }
};
