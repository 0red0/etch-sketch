const gridHolder = document.querySelector("section");
const rangeInput = document.getElementById("range");
const showSize = document.querySelector(".size");
const randomBtn = document.getElementById("random");
const blackBtn = document.getElementById("black");
const gridBtn = document.getElementById("grid-lines");
const clearBtn = document.getElementById("clear");
const switchEtching = document.querySelector("section p");

let range = 10;
let colorize = "black";
let click = false;

document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.classList.contains("block")) {
      click = !click;
      if (click) {
         switchEtching.style.display = "none";
      } else {
         switchEtching.style.display = "block";
         switchEtching.innerText = "Etching Off!";
      }
   }
});

createBlocks(range);

// onchange size from input range
rangeInput.addEventListener("change", () => {
   range = parseInt(rangeInput.value);
   createBlocks(range);
   displaySize(range);
});
console.log(range);

/// create sketch blocks
function createBlocks(num) {
   gridHolder.style.gridTemplateColumns = `repeat(${num},1fr)`;
   gridHolder.style.gridTemplateRows = `repeat(${num},1fr)`;

   let numbersOfBlocks = num * num;
   for (let i = 0; i < numbersOfBlocks; i++) {
      let block = document.createElement("div");
      block.classList.add("block", "marg");
      block.addEventListener("mouseover", clrBlock);
      gridHolder.append(block);
   }
}
/// change block color
function clrBlock() {
   if (click) {
      console.log("ok");
      changeClr();
      if (colorize == "randomize") {
         this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
      } else {
         this.style.backgroundColor = `black`;
      }
   }
}
/// show board size
function displaySize(n) {
   showSize.innerText = `${n} X ${n}`;
}
/// change color
function changeClr() {
   randomBtn.addEventListener("click", () => (colorize = "randomize"));
   blackBtn.addEventListener("click", () => (colorize = "blackize"));
}
// clear all colors
let divs = document.querySelectorAll("section div");
clearBtn.addEventListener("click", clearClrs);
function clearClrs() {
   divs.forEach((d) => (d.style.backgroundColor = "white"));
}
// grid button
gridBtn.addEventListener("click", () => {
   divs.forEach((d) => d.classList.toggle("marg"));
});
