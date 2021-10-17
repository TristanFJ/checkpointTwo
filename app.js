// CLICK UPGRADES

// if variable exists in local storage, set variable to that value, if it doesn't exist in local storage then set variable to default number
let people = Number(localStorage.getItem('People')) || 1
let wisdom = Number(localStorage.getItem('Wisdom')) || 1
let teachCost = Number(localStorage.getItem('TeachCost')) || 5
let peopleTaught = Number(localStorage.getItem('PeopleTaught')) || 0
let bookCost = Number(localStorage.getItem('BookCost')) || 50
let booksBought = Number(localStorage.getItem('BooksBought')) || 0
let orbitalCost = Number(localStorage.getItem('OrbitalCost')) || 10000
let orbitalsBuilt = Number(localStorage.getItem('OrbitalsBuilt')) || 0
let marsCost = Number(localStorage.getItem('MarsCost')) || 20000
let marsBuilt = Number(localStorage.getItem('MarsBuilt')) || 0

// I definitely repeat myself in this program many times. I've tried writing functions to prevent that but I haven't had any working solutions. 
// Similarly, I think I could implement local storage, but it would require repeating myself as I'm not sure how to do it well. 

// AUTO UPGRADES
let auto = Number(localStorage.getItem('Auto')) || 1
let libraryCost = Number(localStorage.getItem('LibraryCost')) || 500
let libraryBuilt = Number(localStorage.getItem('LibraryBuilt')) || 0
let collegeCost = Number(localStorage.getItem('CollegeCost')) || 5000
let collegeBuilt = Number(localStorage.getItem('CollegeBuilt')) || 0
let dysonCost = Number(localStorage.getItem('DysonCost')) || 30000
let dysonBuilt = Number(localStorage.getItem('DysonBuilt')) || 0
let ftlCost = Number(localStorage.getItem('FtlCost')) || 50000
let ftlBuilt = Number(localStorage.getItem('FtlBuilt')) || 0

// STRINGS
let stage = localStorage.getItem('Stage') || "Alone"
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

// fifth purchase teaches 100 people
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

// sixth purchase teaches 300 people
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

// seventh purchase automates 1000 wisdom
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

// eighth purchase automates 2000 wisdom
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
  } else if (people >= 1001 && people <= 2500) {
    stage = "Space Faring"
  } else if (people >= 2501 && people <= 5000) {
    stage = "Found a strange signal"
  } else if (people >= 5001) {
    stage = "Learned from aliens"
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
  } else if (stage == "Found a strange signal") {
    meaning = "make contact with the alien life"
  } else if (stage == "Learned from aliens") {
    meaning = "spread the ancient message"
  }
  draw()
}

// every second, add auto to wisdom, save stats to local storage, update stage + meaning and draw all to screen
function collectAutoUpgrades() {
  console.log('tick');
  if (auto >= 1) {
    wisdom += auto
  }

  localStorage.setItem("People", people)
  localStorage.setItem("Wisdom", wisdom)
  localStorage.setItem("TeachCost", teachCost)
  localStorage.setItem("PeopleTaught", peopleTaught)
  localStorage.setItem("BookCost", bookCost)
  localStorage.setItem("BooksBought", booksBought)
  localStorage.setItem("OrbitalCost", orbitalCost)
  localStorage.setItem("OrbitalsBuilt", orbitalsBuilt)
  localStorage.setItem("MarsCost", marsCost)
  localStorage.setItem("MarsBuilt", marsBuilt)
  localStorage.setItem("DysonCost", dysonCost)
  localStorage.setItem("DysonBuilt", dysonBuilt)
  localStorage.setItem("FtlCost", ftlCost)
  localStorage.setItem("FtlBuilt", ftlBuilt)
  localStorage.setItem("Auto", auto)
  localStorage.setItem("LibraryCost", libraryCost)
  localStorage.setItem("LibraryBuilt", libraryBuilt)
  localStorage.setItem("CollegeCost", collegeCost)
  localStorage.setItem("CollegeBuilt", collegeBuilt)

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

function checkLayerTwo() {
  if (collegeBuilt >= 1) {
    document.getElementById('levelTwo').classList.remove('d-none')
  }
}

checkLayerTwo()
startInterval()
draw()
setStage()