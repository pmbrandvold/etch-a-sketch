const canvas = document.getElementById('canvas');
const newGridButton = document.getElementById('newGrid')

let gridSize = 625;

function paintGrid() {
  document.documentElement.style.setProperty(`--gridSize`, this.value = Math.sqrt(gridSize));
  for (let i = 0; i < gridSize; i++) {
    let div = document.createElement('div');
    canvas.appendChild(div);
    div.addEventListener('mouseover', function() {hoverColorChange(div)});
  }
}

function hoverColorChange(div) {
  div.classList = 'hover';
}

function customGrid() {
  clearCurrentGrid();
  promptUser();
  paintGrid();
  document.documentElement.style.setProperty(`--gridSize`, this.value = Math.sqrt(gridSize));
  document.getElementById('cellCounter').innerHTML = "Current Cells in Grid: " + gridSize;
}

function promptUser() {
  let input = Number(prompt('How big should the grid be?'));
  input = (input*input);
  if (!isSquare(input)) {
    alert('Please pick a square number.');
    promptUser();
  } else {
    gridSize = input;
  }
}

function isSquare(n) {
    return n > 1 && Math.sqrt(n) % 1 === 0;
}

function clearCurrentGrid() {
    var elems = document.querySelectorAll('#canvas div');
    elems.forEach((elem) => {(elem).classList.remove('hover')});
}

paintGrid();

newGridButton.addEventListener('click', customGrid);
