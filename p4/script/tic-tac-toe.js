const statusDisplay = document.querySelector('.status');
const score = document.querySelector('.scoreBar');
let computerCounter = 0;
let playerCounter = 0; //creating variables to keep track of wins
let drawCounter =0;
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const cpuWinMessage = () => 'Computer has won!!';
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function pickStart(){
    let turn = Math.floor(Math.random() *2) +1; //picks between 1 and 2
   console.log(turn);
   if (turn ==1 ){
    currentPlayer ="X"; //needed for restarts
   }
    //for testing
    if (turn ==2){
        currentPlayer = "O";
        handleComputerMove();
    }
    
}

pickStart();

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleComputerMove(){
    pickComputermove();
    checkWin(); //rewriting handle result validation 
}

function pickComputermove (){
while (true){
    //loop through gameState and randomly find an avaliable spot
    var m = Math.floor(Math.random()*8);
    if(gameState[m]==""){
        break;
    }
}
    gameState[m] = currentPlayer; //putting down the move on the board
    document.getElementById(m).innerHTML =currentPlayer; //updated screen

}

function checkWin(){
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            //highlight winning tiles
           document.getElementById(winCondition[0]).style.backgroundColor = "pink";
           document.getElementById(winCondition[1]).style.backgroundColor = "pink";
           document.getElementById(winCondition[2]).style.backgroundColor = "pink";
            break
        }
    }

    if (roundWon) {
        //keep track of wins with counter
        if(currentPlayer == "X"){
            playerCounter++;
            statusDisplay.innerHTML = winningMessage();
            console.log(playerCounter,computerCounter,drawCounter);
            score.innerHTML = "Player: " + playerCounter +" <br> Computer:" + computerCounter+ "<br> Draws: " + drawCounter;
        }
        if (currentPlayer == "O"){
            computerCounter++;
            statusDisplay.innerHTML = cpuWinMessage();
            console.log(playerCounter,computerCounter,drawCounter);
            score.innerHTML = "Player: " + playerCounter +" <br> Computer:" + computerCounter+ "<br> Draws: " + drawCounter;

        }
        gameActive = false;
        statusDisplay.style.color = "pink";
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        statusDisplay.style.color = "pink";
        drawCounter++;
        console.log(playerCounter,computerCounter,drawCounter);
        score.innerHTML = "Player: " + playerCounter +" <br> Computer:" + computerCounter+ "<br> Draws: " + drawCounter;

        return;
    }

    handlePlayerChange();
}


function handleResultValidation() {
    checkWin();
    if(gameActive){
        //adding a sleep function to the computer mover
    setTimeout(handleComputerMove,1000);
}
}
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = ""; //resetting current player
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.style.color = "white";
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    document.querySelectorAll('.cell').forEach(cell => cell.style.backgroundColor = ""); //reset color at each restart
    pickStart(); //random start everytime
    statusDisplay.innerHTML = currentPlayerTurn();
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restart').addEventListener('click', handleRestartGame);