// CLICK UPGRADES
let people = 1
let wisdom = 1
let teachCost = 5
let peopleTaught = 0
let bookCost = 50
let booksBought = 0

// AUTO UPGRADES
let auto = 1
let libraryCost = 500
let libraryBuilt = 0
let collegeCost = 5000
let collegeBuilt = 0

let stage = "Alone"
let meaning = ""

const peopleText = document.getElementById('people')
const wisdomText = document.getElementById('wisdom')
const stageText = document.getElementById('stage')
const teachText = document.getElementById('teach')
const bookText = document.getElementById('book')
const meaningText = document.getElementById('meaning')
const libraryText = document.getElementById('library')
const autoText = document.getElementById('auto')

/* TODO
Users have at least 4 upgrades to purchase
Users can see the quantity of each upgrade they have purchased
Users can see the total amount of modification each upgrade provides
Users can purchase at least 1 automatic upgrade
Automatic upgrades are applied at least every 3 seconds
Each Upgrade has different modifier values

TODO hit basic requirements, then consider expanding into stretch goals, utilize dictionaries, use for-in loops to modify the dictionaries 
*/

// draws values to the webpage
function draw() {
  wisdomText.innerText = `Wisdom: ${wisdom}`
  peopleText.innerText = `People: ${people}`
  stageText.innerText = `Stage: ${stage}`
  teachText.innerText = `Teach person: costs ${teachCost} Wisdom. Taught: ${peopleTaught}.`
  bookText.innerText = `Write book: costs ${bookCost} Wisdom. Written: ${booksBought}.`
  libraryText.innerText = `Build library: costs ${libraryCost} Wisdom. Built: ${libraryBuilt}.`
  meaningText.innerText = `Meaning of Life: ${meaning}`
  autoText.innerText = `WPS: ${auto}`

}

// the clicker button, increases wisdom based on educated population
function learn() {
  if (people == 1) {
    wisdom++
  } else {

    wisdom += people;
  }
  draw();
  setMeaning()
}

// the first purchase, educates one person
function teach() {
  console.log("teach");
  if (wisdom >= teachCost) {
    wisdom -= teachCost
    teachCost *= 2
    peopleTaught++
    people += 1
    setStage()
    draw()
    console.log(people)
  } else {
    alert("earn more wisdom")
  }
  setMeaning()
}

// the second purchase, educates ten people
function book() {
  console.log("book");
  if (wisdom >= bookCost) {
    wisdom -= bookCost
    bookCost *= 3
    booksBought++
    people += 10
    setStage()
    draw()
    console.log(people)
  } else {
    alert("earn more wisdom")
  }
  setMeaning()
}

// the third purchase, automated purchases
function library() {
  if (wisdom >= libraryCost) {
    wisdom -= libraryCost
    libraryCost *= 4
    libraryBuilt++
    auto += 5
    setStage()
    draw()
    console.log(libraryBuilt)
  } else {
    alert("earn more wisdom")
  }
  setMeaning()

}

// Changes the progress of civilization depending on how many people are educated
function setStage() {
  if (people == 1) {
    stage = "Alone"
  } else if (people == 2) {
    stage = "Partnered"
  } else if (people >= 3 && people <= 11) {
    stage = "Family"
  } else if (people >= 12 && people <= 50) {
    stage = "Tribe"
  } else if (people >= 51 && people <= 100) {
    stage = "Town"
  } else if (people >= 101 && people <= 500) {
    stage = "City"
  }
  setMeaning()
  draw()
}

// Changes meaning of life depending on how many people are educated
function setMeaning() {
  if (stage == "Alone") {
    meaning = "teach myself"
  } else if (stage == "Partnered") {
    meaning = "learn with my friend"
  } else if (stage == "Family") {
    meaning = "teach my kids"
  } else if (stage == "Tribe") {
    meaning = "learn with other parents"
  } else if (stage == "Town") {
    meaning = "establish council of elders"
  } else if (stage == "City") {
    meaning = "form a stable government"
  }
  draw()
}

// adds wisdom based on auto modifiers every second
function collectAutoUpgrades() {
  console.log('tick');
  if (auto >= 1) {
    wisdom += auto
  }
  setStage()
  setMeaning()
  draw()
}

// starts a timer 1 tick per second
function startInterval() {
  let collectionInterval = setInterval(collectAutoUpgrades, 1000)
  // call clearInterval(collectionInterval) if you want to cancel the timer 
}

startInterval()
draw()