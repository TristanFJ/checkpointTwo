let people = 1
let wisdom = 1
let stage = "Alone"

const peopleText = document.getElementById('people')
const wisdomText = document.getElementById('wisdom')
const stageText = document.getElementById('stage')

//  TODO When a user purchases an upgrade, the price of the upgrade changes

// TODO Users have at least 4 upgrades to purchase




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

function book() {
  console.log("meet");
  if (wisdom >= 50) {
    wisdom -= 50
    people += 10
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
  } else if (people == 3) {
    stage = "Family"
  } else if (people >= 12) {
    stage = "Tribe"
  }
  draw()
}