let people = 1
let wisdom = 1
let teachCost = 5
let bookCost = 50
let stage = "Alone"

const peopleText = document.getElementById('people')
const wisdomText = document.getElementById('wisdom')
const stageText = document.getElementById('stage')
const teachText = document.getElementById('teach')
const bookText = document.getElementById('book')


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
  teachText.innerText = `Teach person: costs ${teachCost} Wisdom`
  bookText.innerText = `Write book: costs ${bookCost} Wisdom`

}

function teach() {
  console.log("teach");
  if (wisdom >= teachCost) {
    wisdom -= teachCost
    teachCost *= 2
    people += 1
    setStage()
    draw()
    console.log(people)
  } else {
    alert("earn more wisdom")
  }
}

function book() {
  console.log("book");
  if (wisdom >= bookCost) {
    wisdom -= bookCost
    bookCost *= 2
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
  } else if (people >= 12 && people <= 50) {
    stage = "Tribe"
  } else if (people >= 51 && people <= 100) {
    stage = "Town"
  } else if (people >= 101 && people <= 500) {
    stage = "City"
  }
  draw()
}

// function meaning() {
//   if (stage == "Alone"){
//     meaning = 
//   }
// }

// Changes meaning of life depending on how many people are educated