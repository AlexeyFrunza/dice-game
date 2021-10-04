document.addEventListener('DOMContentLoaded', () => {
  var rotate_d1_btn = document.querySelector('.rotate-d-1')
  var rotate_d2_btn = document.querySelector('.rotate-d-2')

  var dice1 = document.querySelector('.dice-1')
  var dice2 = document.querySelector('.dice-2')

  var dice_i_1 = document.querySelector('.fas-1')
  var dice_i_2 = document.querySelector('.fas-2')

  var dicevalues1 = ["one","two","three","four","five","six"]
  var dicevalues2 = ["one","two","three","four","five","six"]

  var score_output_1 = document.querySelector('.score-1')
  var score_output_2 = document.querySelector('.score-2')

  var player_1_score = 0;
  var player_2_score = 0;

  score_output_1.innerHTML = `${player_1_score}`;
  score_output_2.innerHTML = `${player_2_score}`;

  var score_arr = [];

  var audio = new Audio('./assets/sounds/rotating.mp3')

  var turn1 = document.querySelector('.turn-1')
  var turn2 = document.querySelector('.turn-2')

  var draw_1 = document.querySelector('.draw-1')
  var draw_2 = document.querySelector('.draw-2')

  var fadeIn = document.querySelector('.fade-in')

  function getScore(score_1,score_2) {
    if(score_1 > score_2) {
      score_output_1.innerHTML = player_1_score++;
      score_output_1.animate([
        {
          opacity: 0.5,
          color: "#69f38b"
        },
        {
          opacity: 1,
          color: "#222222"
        }
        ], 1000)
      }
    else if(score_1 === score_2) {
      draw_1.innerHTML = 'DRAW'
      draw_2.innerHTML = 'DRAW'
    }
    else {
      score_output_2.innerHTML = player_2_score++;
      score_output_2.animate([
        {
          opacity: 0.5,
          color: "#69f38b"
        },
        {
          opacity: 1,
          color: "#222222"
        }
        ], 1000)
    }
  }
  function updateScore(ps1,ps2) {
    score_output_1.innerHTML = ps1;
    score_output_2.innerHTML = ps2;
  }

  rotate_d1_btn.addEventListener('click', () => {
    let dicerandom = Math.floor(Math.random() * dicevalues1.length)
    var dice_1 = dicevalues1[dicerandom]
    dice1.innerHTML = `
    <i class="fas fa-dice-${dice_1}"></i>
    `
    dice1.animate([
      {
        transform: "rotate(540deg) scale(0.8)"
      },
      {
        transform: "rotate(0deg) scale(1)"
      }
    ],1000)
    audio.play();
    rotate_d1_btn.disabled = true;
    if (rotate_d1_btn.disabled) {
      turn2.innerHTML = `
      <h2 class="header">YOUR TURN!</h2>
      `
      turn1.innerHTML = ``
      rotate_d2_btn.disabled = false;
    }
    score_arr.push(dicevalues1.indexOf(dice_1));
  })

  rotate_d2_btn.addEventListener('click', () => {
    let dicerandom = Math.floor(Math.random() * dicevalues2.length)
    var dice_2 = dicevalues2[dicerandom]
    dice2.innerHTML = `
    <i class="fas fa-dice-${dice_2}"></i>
    `
    dice2.animate([
      {
        transform: "rotate(540deg) scale(0.8)"
      },
      {
        transform: "rotate(0deg) scale(1)"
      }
    ],1000)
    audio.play();
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
    score_arr.push(dicevalues2.indexOf(dice_2));
    getScore(score_arr[0],score_arr[1])
    updateScore(player_1_score,player_2_score)
    score_arr.splice(0,2);
  })
})




