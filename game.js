const character = document.getElementById('char')
const block = document.getElementById('block')
const buton = document.getElementById('btn')
const game = document.getElementById('mod')
const container = document.getElementById('joc')
let score = 0
let Max = 0
let MaxLvl = 1
let lvl = 0
let tries = 1
const sunet = document.getElementById('sound')
let audio = document.querySelector('#sunet')
sunet.addEventListener('click', function () {
  audio.volume = 0.1
  audio.play()
  sunet.style.backgroundImage = 'url("soundon.png")'
  sunet.addEventListener('dblclick', function () {
    sunet.style.backgroundImage = 'url("soundoff.png")'
    audio.pause()
  })
})
buton.addEventListener('click', function () {
  document.querySelector('h1').classList.add('color')
  document.querySelector('#btn').style.display = 'none'
  block.style.animationPlayState = 'running'
  block.style.animationName = 'block'
  block.style.display = 'block'
  block.style.animationDuration = '3s'
  var checkdead = setInterval(function () {
    score++
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (blockLeft <= 30 && blockLeft > 10 && characterTop > 110) {
      document.querySelector('h1').classList.remove('color')
      tries++
      buton.style.display = 'none'
      game.style.display = 'inline'
      block.style.animationName = 'none'
      if (Max < score) Max = score
      if (MaxLvl < lvl) MaxLvl = lvl
      document.getElementById('max').innerHTML = `Max score: ${Max}`
      if (MaxLvl != 'Game Finished') { document.getElementById('maxlvl').innerHTML = `Max level: ${MaxLvl}`}
      lvl = 0
      score = 0
      document.getElementById('score').innerHTML = ''
      document.getElementById('level').innerHTML = ''
      block.style.display = 'none'
      document.querySelector('#btn').innerHTML = 'Restart'
      document.querySelector('#lose').style.display = 'block'
      document.querySelector('#lose').style.fontSize = '75px'
      document.querySelector('#lose').innerHTML = 'The man behind the slaughter'
      document.querySelector('#joc').style.display = 'none'
      clearInterval(checkdead)
    }
    if (score > 6500) {
      audio.pause()
      document.querySelector('#lose').style.display = 'block'
      document.querySelector('#joc').style.display = 'none'
      document.querySelector('#lose').style.fontSize = '57px'
      if (tries === 1) {
        document.querySelector('#lose').innerHTML = 'Congratulations, you finished the game in only one try'
      } else {
        document.querySelector('#lose').innerHTML = `Congratulations, you finished the game in ${tries} tries`
      }
      tries = 1
      buton.style.display = 'none'
      game.style.display = 'inline'
      score = 0
      Max = 5001
      lvl = 0
      MaxLvl = 'Game Finished'
      document.getElementById('max').innerHTML = `Max score: ${Max}`
      document.getElementById('maxlvl').innerHTML = 'Game Finished'
      block.style.animationName = 'none'
      clearInterval(checkdead)
    } else if (score > 4700) {
        block.onanimationend = function () {

        }
        block.style.animationDuration = '0.7s'
      lvl = 5
    } else if (score > 3850) {
      block.style.animationDuration = '1.2s'
      lvl = 4
    } else if (score > 2700) {
      block.style.animationDuration = '1.5s'
      lvl = 3
    } else if (score > 1500) {
      block.style.animationDuration = '2s'
      lvl = 2
    } else if (score > 600) {
        if(blockLeft <= 30)
        block.style.animationDuration ='1s'
      lvl = 1
    }
    document.getElementById('score').innerHTML = `Score: ${score}`
    document.getElementById('level').innerHTML = `Level: ${lvl}`
  }, 10)
  game.addEventListener('click', function () {
    buton.style.display = 'inline'
    game.style.display = 'none'
    document.querySelector('#lose').style.display = 'none'
    document.querySelector('#joc').style.display = 'block'
    clearInterval(checkdead)
  })
})
function jump () {
  if (character.classList.value != 'animation') {
    character.classList.value = 'animation'
    character.addEventListener('animationend', function()
    {
      character.classList.value = ''
    })
  }     
}
document.addEventListener('keypress', function (event) {
  if (event.keyCode === 32 || event.which === 32) {
    if (character.classList.value != 'animation') {
      character.classList.value = 'animation'
      character.addEventListener('animationend', function()
      {
        character.classList.value = ''
      })
    }     
  }
})
/// // COPYRIGHT UTZU
