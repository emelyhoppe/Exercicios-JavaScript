//Obtém a referência ao elemento HTML com o ID 'board' e à classe .'mensagem'.
var board = document.getElementById('board');
var mensagem = document.getElementById('mensagem');

let joagdorAtual = 'X';
let cells = Array (9).fill('')
let gameover = false;


for (let i = 0; i < 9; i++){
    let cell = document.createElement('div');
    cell.classList('cell');
    cell.addEventListener('click', () => handleCellClick(i) );
    board.appendChild(cell);
}

// Função que lida com o clique em uma célula.
function handleCellClick (index)
