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
  gridSideLength = Number(prompt('How big should the grid be?'));
  clearCurrentGrid();
  paintGrid();
  document.documentElement.style.setProperty(`--gridSize`, this.value = Math.sqrt(gridSideLength));
}

function clearCurrentGrid() {
    var elems = document.querySelectorAll('#canvas div');
    elems.forEach((elem) => {(elem).classList.remove('hover')});
}

paintGrid();

const newGridButton = document.getElementById('newGrid')
newGridButton.addEventListener('click', customGrid);
