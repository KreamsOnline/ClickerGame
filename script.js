const gameArea = document.querySelector('.gameArea');
document.addEventListener('DOMContentLoaded', init);
const game = {row: 5, col: 5};
function init() {
    gameArea.innerHTML = '';
    const main = createNewElement(gameArea, 'div', '', 'gridContainer')
    
    buildGrid(main);
}

function buildGrid(main) {
    const dim = {
        x: '',
        y: ''
}
    for(let y = 0; y < game.row; y++) {
        dim.y += ' auto ';
        for (let x = 0; x < game.col; x++) {
            if(y == 0) {dim.x += '  auto ';}
            const cell = y*game.col+x+1;
            createNewElement(main, 'div', y+1, 'grid-item');
        }
    }
    main.style.gridTemplateColumns = dim.x;
    main.style.gridTemplateRows = dim.y;
}

function createNewElement(parent, ele, html, myClass) {
    const el = document.createElement(ele)
    el.classList.add(myClass);
    el.innerHTML = html;
    parent.append(el);

    return el;
}
