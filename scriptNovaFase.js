const board2 = document.getElementById('board2');
let pontuacaoX2 = document.getElementById('X2');
let pontuacaoO2 = document.getElementById('O2');


let currentPlayer = "X";
let contadorX2 = 0;
let contadorO2 = 0;



const cells2 = Array(16).fill(null);



function creatboard2() {
    cells2.forEach((_, index) => {
        const cell2 = document.createElement('div');
        cell2.classList.add('cell2');
        cell2.addEventListener('click', () => makeMove2(index));
        board2.appendChild(cell2);
        
      if (cells2.index==='X') {
          cell2.style.backgroundColor = 'red'
      }

    })
    

}


function makeMove2(index) {

    if (!cells2[index]) {
        cells2[index] = currentPlayer;
        render();

        if (checkWinner()) {

             if( cells2[index] = currentPlayer=== 'X'){
               contadorX2++
             pontuacaoX2.innerHTML =` X = ${contadorX2}`;
             }else if(cells2[index] = currentPlayer=== 'O') {
                contadorO2++
                pontuacaoO2.innerHTML =` O = ${contadorO2}`;
               
             } 

        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";

        }
                
     
    }

    if(contadorX2>5){
        pontuacaoX.innerHTML =` X = Se é o bichao memo`;
      
        
     }else if(contador2>5) {
        pontuacaoO.innerHTML =` O = Se é o bichao memo`;
     }


}


function render() {
    const cellElements = document.querySelectorAll('.cell2');
    cells2.forEach((cell2, index) => {
        cellElements[index].textContent = cell2;
        if (cell2 === 'X') { 
            
        cellElements[index].style.backgroundColor = 'green'; 
    
    } else if(cell2 === 'O') {
         cellElements[index].style.backgroundColor = 'blue'; 
            } else{
                cellElements[index].style.backgroundColor = ''; 
            }

    })

}



function checkWinner() {
    // Define todas as combinações vencedoras possíveis
    const winningCombinations = [
        [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], // linhas
        [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],// colunas
        [0, 5, 10, 15], [3, 6, 9, 12] // diagonais
    ];

    return winningCombinations.some(combination => {
        const [a, b, c, d] = combination;
        return cells2[a] && cells2[a] === cells2[b] && cells2[a] === cells2[c] && cells2[a] ===cells2[d];

    });

}

function resetGam2() {
    cells2.fill(null);
    
    currentPlayer = "X";
    
    
    render()

}


creatboard2()