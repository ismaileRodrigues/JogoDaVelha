const board = document.getElementById('board');
let pontuacaoX = document.getElementById('X');
let pontuacaoO = document.getElementById('O');


let currentPlayer = "X";
let contadorX = 0;
let contadorO = 0;
let pontoX = []


const cells = Array(9).fill(null);



function creatBoard() {
    cells.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => makeMove(index));
        board.appendChild(cell);
        
      if (cells.index==='X') {
          cell.style.backgroundColor = 'red'
      }

    })
    

}


function makeMove(index) {

    if (!cells[index]) {
        cells[index] = currentPlayer;
        render();

        if (checkWinner()) {

             if( cells[index] = currentPlayer=== 'X'){
               contadorX++
             pontuacaoX.innerHTML =` X = ${contadorX}`;
             }else if(cells[index] = currentPlayer=== 'O') {
                contadorO++
                pontuacaoO.innerHTML =` O = ${contadorO}`;
               
             } 

        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";

        }
                
     
    }

    if(contadorX>5){
        pontuacaoX.innerHTML =` X = Se é o bichao memo`;
      
        
     }else if(contadorO>5) {
        pontuacaoO.innerHTML =` O = Se é o bichao memo`;
     }


}


function render() {
    const cellElements = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cellElements[index].textContent = cell;
        if (cell === 'X') { 
            
        cellElements[index].style.backgroundColor = 'green'; 
    
    } else if(cell === 'O') {
         cellElements[index].style.backgroundColor = 'blue'; 
            } else{
                cellElements[index].style.backgroundColor = ''; 
            }

    })

}

// Função para verificar se há um vencedor

function checkWinner() {
    // Define todas as combinações vencedoras possíveis
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8],// colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return cells[a] && cells[a] === cells[b] && cells[a] === cells[c]

    });
    

}

function resetGame() {
    cells.fill(null);
    
    currentPlayer = "X";
    
    
    render()

}


creatBoard()

