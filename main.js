const canvas = document.getElementById('canvas');

let gridSideLength = 100;

function paintGrid() {
  document.documentElement.style.setProperty(`--gridSize`, this.value = Math.sqrt(gridSideLength));
  for (let i = 0; i < gridSideLength; i++) {
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
  document.documentElement.style.setProperty(`--gridSize`, this.value = Math.sqrt(gridSideLength));
}

function promptUser() {
  let input = Number(prompt('How big should the grid be?'));
  if (!isSquare(input)) {
    alert('Please pick a square number.');
    promptUser();
  } else {
    gridSideLength = input;
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

const newGridButton = document.getElementById('newGrid')
newGridButton.addEventListener('click', customGrid);
