/*-------------------------------- Constants --------------------------------*/
const winningArrays = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
]
//https://github.com/kubowania/connect-four/blob/master/app.js

/*---------------------------- Variables (state) ----------------------------*/
let board, winner, turn


/*-------------- Cached Element References -----------------------------------*/
const divEls = document.querySelectorAll('.cell')
const messageEl = document.querySelector('#message')
const resetBtn = document.querySelector('#restart')

//console.log(divEls)
/*----------------------------- Event Listeners -----------------------------*/
divEls.forEach(div => {
  div.addEventListener('click', handleClick)
})
resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  board = [null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null]

  turn = 1
  winner = null
  messageEl.textContent =  'Player Red starts'
  render()

  }

function render() {
  board.forEach((div, idx) => {
    if (div === 1){
      divEls[idx].style.backgroundColor = 'red'
    }
    else if (div === -1) {
      divEls[idx].style.backgroundColor = 'yellow'
    }
    else if (div === null) {
      divEls[idx].style.backgroundColor = 'white'
    }
  })
  if (winner === null) {
    messageEl.textContent = `Player ${turn === 1 ? 'Red' : 'Yellow'} your turn`
  } else if (winner === 'T') {
    messageEl.textContent = 'It is a draw'
  }else {
    messageEl.textContent = `Player ${winner === 1 ? 'Red' : 'Yellow'} has won!!`
  }
}

function handleClick(evt) {
  let divIdx = evt.target.id
  if (board[divIdx] || winner) {
    return
  }
  board[divIdx] = turn
  turn *= -1
  winner = getWinner()
  render()
}

function getWinner() {
  for (let i = 0; i < winningArrays.length; i++) {
    if (Math.abs(board[winningArrays[i][0]] + board[winningArrays[i][1]] + board[winningArrays[i][2]] + board[winningArrays[i][3]])  === 4) {
      
      return board[winningArrays[i][0]]
    } 
  }
  const result = !board.includes(null)
  return result ? 'T' : null
}
// for (let i = 0; i < 42; i++) {
//   let divEl = document.createElement('div')
//   divEl.className = 'slot'
//   divEls.appendChild(divEl)
// }