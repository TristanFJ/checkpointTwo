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
    // stage()
    draw()
    console.log(people)
  } else {
    alert("earn more wisdom")
  }
}

// function stage() {
//   if (people == 1) {
//     stage = "alone"
//   } else if (people == 2) {
//     stage = "partnered"
//   }
// }