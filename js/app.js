import { winningArrays } from "./data/winningArrays.js"

/*-------------------------------- Constants --------------------------------*/
const resetSound = new Audio("./Audio/mixkit-cartoon-toy-whistle-616.wav")
const intro = new Audio("./Audio/relaxing-light-background-116686.mp3")

/*---------------------------- Variables (state) ----------------------------*/
let board, winner, turn


/*-------------- Cached Element References -----------------------------------*/
const divEls = document.querySelectorAll('.cell')
const messageEl = document.querySelector('#message')
const resetBtn = document.querySelector('#restart')


/*----------------------------- Event Listeners -----------------------------*/
divEls.forEach(div => {
  div.addEventListener('click', handleClick)
})
resetBtn.addEventListener('click', init)

resetBtn.addEventListener('click', e => {
  resetSound.play()
})

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  board = [
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    0, 0, 0, 0, 0, 0, 0]

  turn = 1
  winner = null
  messageEl.innerHTML =  'Player Red starts'

  playAudio()
  render()
  }

  function playAudio() {
    intro.play()
    intro.volume = .2

    setTimeout(() => {
    intro.pause()
    }, 11000)
  }

function render() {
  board.forEach((div, idx) => {
    if (div === 1){
      divEls[idx].style.backgroundColor = '#f33bee'
    }
    else if (div === -1) {
      divEls[idx].style.backgroundColor = '#eef33b'
    }
    else {
      divEls[idx].style.backgroundColor = '#ffffff'
    }
  })
  if (winner === null) {
    messageEl.textContent = `Player ${turn === 1 ? 'Red' : 'Yellow'} your turn`
  } else if (winner === 'T') {
    messageEl.textContent = 'It is a draw'
  }else {
    messageEl.textContent = `Player ${winner === 1 ? 'Red' : 'Yellow'} has won!!`
    confetti.start(3000)
  }
}

function handleClick(evt) {
  let divIdx = parseInt(evt.target.id)
  if (winner) {
    return
  }

  while(board[divIdx] !== 0) {
    divIdx += 7
    if(divIdx > 42){
      return
    }
  }
  board[divIdx] = turn
  board[divIdx -7] = 0
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
// function createGrid() {
//  for (let i = 0; i < 42; i++) {
//   let divEl = document.createElement('div')
//   divEl.className = 'slot'
//    devEl.setAttribute('id', i)
//    if (i > 35) {
//         div.className='filled'
//      }
//   divEls.appendChild(divEl)
// }
//}
