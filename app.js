let cells= document.querySelectorAll('.row > div');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}
 
    function cellClicked() {
        event.target.textContent =''
     
    }

  

  function winMessage() {
      
  }
    let gameBoard=[
    ['','',''],
    ['','',''],
    ['','',''],
];
let players= ['X', 'O']
 function winMessage(params) {
     console.log('X has won'|| 'O has won')
     
 }
const winCombos =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function checkForWinner(params) {
    if
    for (let i = 0; i < winCombos.length; i++) {
        const combo = winCombos[i];
        
    }
}
function whoseTurn(params) {
    
}









