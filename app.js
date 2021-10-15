let people = 1
let wisdom = 1
let stage = "Alone"

const peopleText = document.getElementById('people')
const wisdomText = document.getElementById('wisdom')
const stageText = document.getElementById('stage')

function learn() {

  if (people == 1) {
    wisdom++
  } else {

    wisdom += people;
  }
  console.log(wisdom);
  draw();
}

function draw() {
  wisdomText.innerText = `Wisdom: ${wisdom}`
  peopleText.innerText = `People: ${people}`
  stageText.innerText = `Stage: ${stage}`
}

function meet() {
  console.log("meet");
  if (wisdom >= 5) {
    wisdom -= 5
    people += 1
    setStage()
    draw()
    console.log(people)
  } else {
    alert("earn more wisdom")
  }
}


function setStage() {
  if (people == 1) {
    stage = "Alone"
  } else if (people == 2) {
    stage = "Partnered"
  }
  draw()
}