const gridHolder = document.querySelector("section");
const rangeInput = document.getElementById("range");
const showSize = document.querySelector(".size");
const randomBtn = document.getElementById("random");
const blackBtn = document.getElementById("black");
const clearBtn = document.getElementById("clear");
const switchEtching = document.querySelector("section p");

let range = 10;
let colorize = "black";
let click = false;

document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.className == "block") {
      click = !click;
      if (click) {
         switchEtching.style.display = "none";
         // switchEtching.innerHTML = "";
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
      block.className = "block";
      block.addEventListener("mouseover", clrBlock);
      gridHolder.append(block);
   }
}
/// change block color
if (!click) {
   console.log("ok");
   function clrBlock() {
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
/// clear all colors
clearBtn.addEventListener("click", clearClrs);
function clearClrs() {
   let divs = document.querySelectorAll("section div");
   divs.forEach((d) => (d.style.backgroundColor = "transparent"));
}
