const gridContainer = document.getElementById('gridContainer');

function paintGrid() {
  for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    gridContainer.appendChild(div);
    div.addEventListener('mouseover', function() {hoverColorChange(div)});
  }
}

function hoverColorChange(div) {
  div.classList = 'hover';
}
