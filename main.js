const canvas = document.getElementById('canvas');

function paintGrid() {
  for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    canvas.appendChild(div);
    div.addEventListener('mouseover', function() {hoverColorChange(div)});
  }
}

function hoverColorChange(div) {
  div.classList = 'hover';
}
