const canvas = document.getElementById('canvas');

let playerChoice = '';

function paintGrid() {
  for (let i = 0; i < playerChoice; i++) {
    let div = document.createElement('div');
    canvas.appendChild(div);
    div.addEventListener('mouseover', function() {hoverColorChange(div)});
  }
}

function hoverColorChange(div) {
  div.classList = 'hover';
}

function customGrid() {
  playerChoice = Number(prompt('How big should the grid be?'));
  paintGrid();
  document.documentElement.style.setProperty(`--gridColumns`, this.value = playerChoice);
}
