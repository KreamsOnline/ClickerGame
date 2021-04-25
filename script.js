const gameArea = document.querySelector('.gameArea');
document.addEventListener('DOMContentLoaded', init);
const game = { 
    row: 9, 
    col: 9,
    arr: [],
    ani: {},
    max: 5,
    actives: 0,
    inPlay: false
};
function init() {
    gameArea.innerHTML = '';
    const main = createNewElement(gameArea, 'div', '', 'gridContainer')
    
    buildGrid(main);
    game.ani = requestAnimationFrame(startGame);
}

function startGame() {
    if(game.actives < game.max){
        setActive();
    }

    game.ani = requestAnimationFrame(startGame)
}

function setActive() {
    game.actives++;
    const sel = Math.floor(Math.random()*game.arr.length);
    const myEl = game.arr[sel];
    const timer = Math.floor(Math.random()*4000)+1000;
    myEl.classList.add('active');
    setTimeout(removeActive, timer, myEl);
}

function removeActive(myEl) {
    console.log(myEl);
    myEl.classList.remove('active');
    game.actives--;
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
            const el = createNewElement(main, 'div', y+1, 'grid-item');
            game.arr.push(el);
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
