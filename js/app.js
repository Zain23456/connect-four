/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*-------------- Cached Element References -----------------------------------*/
const divEls = document.querySelector('#grid')
const messafeEl = document.querySelector('#message')
console.log(divEls)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init(){
  board = [null, null, null, null, null. null, null,
    null, null, null, null, null. null, null,
    null, null, null, null, null. null, null,
    null, null, null, null, null. null, null,
    null, null, null, null, null. null, null,
    null, null, null, null, null. null, null]

  turn = 1
  winner = null
  messafeEl.textContent =  `Player Red starts`
  render()

  }


for (let i = 0; i < 42; i++) {
  let divEl = document.createElement('div')
  divEl.className = 'slot'
  divEls.appendChild(divEl)
}