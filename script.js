const gameArea = document.querySelector('.gameArea');
document.addEventListener('DOMContentLoaded', init);
const game = { 
    row: 9, 
    col: 9,
    arr: [],
    ani: {},
    max: 5,
    actives: 0,
    inPlay: false,
    gameBtn: {}
};
function init() {
    gameArea.innerHTML = '';
    game.gameBtn = createNewElement(gameArea, 'button' , 'Start', 'btn');
    game.gameBtn.addEventListener('click', () => {
        if(game.gameBtn.textContent=='Start'){
            game.inPlay = true;
            game.ani = requestAnimationFrame(startGame);
            game.gameBtn.textContent = 'Stop';
        } else {
            cancelAnimationFrame(game.ani);
            game.gameBtn.textContent = 'Start';
            game.inPlay = false;
        }
    })
    const main = createNewElement(gameArea, 'div', '', 'gridContainer')
    
    buildGrid(main);
}

function makeSelect() {
    const sel = Math.floor(Math.random()*game.arr.length);
    return game.arr[sel];
}

function startGame() {
    const total = game.max > game.arr.length ? game.arr.length : game.max;
    if(game.actives < total){
        setActive(makeSelect());
    }
    if(game.inPlay) {
        game.ani = requestAnimationFrame(startGame)
    }
}

function setActive() {
    if (el.classList.contains('active')) {
        console.log('already there');
        console.log(el);
        return setActive(makeSelect());
    } else {
        game.actives++;
        const timer = Math.floor(Math.random()*4000)+1000;
        myEl.classList.add('active');
    }

    
    // setTimeout(removeActive, timer, myEl);
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
            el.addEventListener('click', hitButton)
            game.arr.push(el);
        }
    }
    main.style.gridTemplateColumns = dim.x;
    main.style.gridTemplateRows = dim.y;
}

function hitButton(e) {
    console.log(e.target);
    const el = e.target;
    if (el.classList.contains('active')) {
        console.log('hit');
        removeActive(el);
    } else {
        console.log('miss')
    }
}

function createNewElement(parent, ele, html, myClass) {
    const el = document.createElement(ele)
    el.classList.add(myClass);
    el.innerHTML = html;
    parent.append(el);

    return el;
}
