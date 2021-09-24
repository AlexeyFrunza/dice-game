let rotate_d1_btn = document.querySelector('.rotate-d-1')
let rotate_d2_btn = document.querySelector('.rotate-d-2')

let dice1 = document.querySelector('.dice-1')
let dice2 = document.querySelector('.dice-2')

let diceclicked_1 = 0
let diceclicked_2 = 0

let turn1 = document.querySelector('.turn-1')
let turn2 = document.querySelector('.turn-2')

let dicevalues1 = ["one","two","three","four","five","six"]
let dicevalues2 = ["one","two","three","four","five","six"]

rotate_d1_btn.addEventListener('click', () => {
  let dicerandom = Math.floor(Math.random() * dicevalues1.length)
  var dice_1 = dicevalues1[dicerandom]
  dice1.innerHTML = `
  <i class="fas fa-dice-${dice_1}"></i>
  `
  rotate_d1_btn.disabled = true;
  if (rotate_d1_btn.disabled) {
    turn2.innerHTML = `
    <h2 class="header">YOUR TURN!</h2>
    `
    turn1.innerHTML = ``
    rotate_d2_btn.disabled = false;
  }
  diceclicked_1++;
})

rotate_d2_btn.addEventListener('click', () => {
  let dicerandom = Math.floor(Math.random() * dicevalues1.length)
  var dice_2 = dicevalues1[dicerandom]
  dice2.innerHTML = `
  <i class="fas fa-dice-${dice_2}"></i>
  `
  if (rotate_d1_btn.disabled) {
    rotate_d2_btn.disabled = true;
    rotate_d1_btn.disabled = false;
  }
  if (rotate_d2_btn.disabled) {
    turn1.innerHTML = `
    <h2 class="header">YOUR TURN!</h2>
    `
    turn2.innerHTML = ``
  }
  diceclicked_2++;
  diceResult(dice_1,dice_2);
})



