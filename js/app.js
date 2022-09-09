/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*-------------- Cached Element References -----------------------------------*/
const divEls = document.querySelector('#grid')

console.log(divEls)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

for (let i = 0; i < 41; i++) {
  let divEl = document.createElement('div')
  divEl.className = 'slot'
  divEls.appendChild(divEl)
}