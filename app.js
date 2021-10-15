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


// TODO Users have at least 4 upgrades to purchase

// TODO Users can purchase at least 1 automatic upgrade


// interfaces values to the webpage
function draw() {
  wisdomText.innerText = `Wisdom: ${wisdom}`
  peopleText.innerText = `Educated People: ${people}`
  stageText.innerText = `Stage: ${stage}`
  teachText.innerText = `Teach person: costs ${teachCost} Wisdom`
  bookText.innerText = `Write book: costs ${bookCost} Wisdom`

}

// the clicker button, increases wisdom based on educated population
function learn() {
  if (people == 1) {
    wisdom++
  } else {

    wisdom += people;
  }
  console.log(wisdom);
  draw();
}

// the first purchase, educates one person
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

// the second purchase, educates ten people
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

// Changes the progress of civilization depending on how many people are educated
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