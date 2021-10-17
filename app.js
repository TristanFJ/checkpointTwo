// CLICK UPGRADES
let people = 1
let wisdom = 100000
let teachCost = 5
let peopleTaught = 0
let bookCost = 50
let booksBought = 0
let orbitalCost = 10000
let orbitalsBuilt = 0
let marsCost = 20000
let marsBuilt = 0
let dysonCost = 30000
let dysonBuilt = 0
let ftlCost = 50000
let ftlBuilt = 0


// AUTO UPGRADES
let auto = 1
let libraryCost = 500
let libraryBuilt = 0
let collegeCost = 5000
let collegeBuilt = 0

// STRINGS
let stage = "Alone"
let meaning = ""

// GET ELEMENTS
const autoText = document.getElementById('auto')
const peopleText = document.getElementById('people')
const wisdomText = document.getElementById('wisdom')
const stageText = document.getElementById('stage')
const teachText = document.getElementById('teach')
const bookText = document.getElementById('book')
const meaningText = document.getElementById('meaning')
const libraryText = document.getElementById('library')
const collegeText = document.getElementById('college')
const orbitalText = document.getElementById('orbital')
const marsText = document.getElementById('mars')
const dysonText = document.getElementById('dyson')
const ftlText = document.getElementById('ftl')



// TODO hit basic requirements, then consider expanding into stretch goals, utilize dictionaries, use for-in loops to modify the dictionary values

// draws values to the webpage
function draw() {
  wisdomText.innerText = `Wisdom: ${wisdom}`
  peopleText.innerText = `People: ${people}`
  stageText.innerText = `Stage: ${stage}`
  autoText.innerText = `WPS: ${auto}`
  meaningText.innerText = `Meaning of Life: ${meaning}`
  teachText.innerText = `costs ${teachCost} Wisdom. Taught: ${peopleTaught}.`
  bookText.innerText = `costs ${bookCost} Wisdom. Written: ${booksBought}.`
  libraryText.innerText = `costs ${libraryCost} Wisdom. Built: ${libraryBuilt}.`
  collegeText.innerText = `costs ${collegeCost} Wisdom. Built: ${collegeBuilt}.`
  orbitalText.innerText = `costs ${orbitalCost} Wisdom. Built: ${orbitalsBuilt}.`
  marsText.innerText = `costs ${marsCost} Wisdom. Built: ${marsBuilt}.`
  dysonText.innerText = `costs ${dysonCost} Wisdom. Built: ${dysonBuilt}.`
  ftlText.innerText = `costs ${ftlCost} Wisdom. Built: ${ftlBuilt}.`
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
    bookCost *= 2
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

// the third purchase, automates 50 wisdom
function library() {
  if (wisdom >= libraryCost) {
    wisdom -= libraryCost
    libraryCost *= 3
    libraryBuilt++
    auto += 50
    setStage()
    draw()
    console.log(libraryBuilt)
  } else {
    alert("earn more wisdom")
  }
  setMeaning()

}

// the fourth purchase, automates 500 wisdom
function college() {
  if (wisdom >= collegeCost) {
    wisdom -= collegeCost
    collegeCost *= 3
    collegeBuilt++
    auto += 500
    document.getElementById('levelTwo').classList.remove('d-none')
    setStage()
    draw()
    console.log(collegeBuilt)
  } else {
    alert("earn more wisdom")
  }
  setMeaning()

}

function orbital() {
  if (wisdom >= orbitalCost) {
    wisdom -= orbitalCost
    orbitalCost *= 2
    orbitalsBuilt++
    people += 100
    setStage()
    draw()
  } else {
    alert("earn more wisdom")
  }
  setMeaning()
}

function mars() {
  if (wisdom >= marsCost) {
    wisdom -= marsCost
    marsCost *= 2
    marsBuilt++
    people += 300
    setStage()
    draw()
  } else {
    alert("earn more wisdom")
  }
  setMeaning()
}


function dyson() {
  if (wisdom >= dysonCost) {
    wisdom -= dysonCost
    dysonCost *= 3
    dysonBuilt++
    auto += 1000
    setStage()
    draw()
  } else {
    alert("earn more wisdom")
  }
  setMeaning()
}

function ftl() {
  if (wisdom >= ftlCost) {
    wisdom -= ftlCost
    ftlCost *= 3
    ftlBuilt++
    auto += 2000
    setStage()
    draw()
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
  } else if (people >= 501 && people <= 1000) {
    stage = "Government"
  } else if (people >= 1000 && people <= 2000) {
    stage = "Space Faring"
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
  } else if (stage == "Government") {
    meaning = "explore the stars"
  } else if (stage == "Space Faring") {
    meaning = "find the aliens"
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
  let tick = 1000
  let collectionInterval = setInterval(collectAutoUpgrades, tick)
  // call clearInterval(collectionInterval) if you want to cancel the timer 

  // You could use tick as a modifier, have a purchase that reduces the tick interval for a period of time

}

// Supposed to prevent users from "hacking the game" with the console. Unsure if it would work.
function consoleBlock() {
  debugger
}
// consoleBlock()

startInterval()
draw()