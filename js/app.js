/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*-------------- Cached Element References -----------------------------------*/
const divEls = document.querySelector('#grid')

console.log(divEls)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
//function init(){}
for (let i = 0; i < 42; i++) {
  let divEl = document.createElement('div')
  divEl.className = 'slot'
  divEls.appendChild(divEl)
}