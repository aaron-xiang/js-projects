const cells = [];
for (let i = 0; i < 9; i++) {
    cells.push('');
}

let nextPlayer = 'X';

setNextPlayer();

function setNextPlayer() {
    const player = document.getElementById('player');
    player.innerHTML = `<h3>Next Player: ${nextPlayer}</h3>`; 
}

function clickCell(id) {
    // alert(`Cell ${id} clicked`);
    if (cells[id] !== '') {
        return;
    }
    const clickedCell = document.getElementById(id);
    clickedCell.innerText = nextPlayer;
    cells[id] = nextPlayer;
    nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
    setNextPlayer();
}

function isWinner(player) {
    
}