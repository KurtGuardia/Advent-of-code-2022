const fs = require('fs')

const allRucksacks = []
const mistaken = []
const itemsPriorities = []
const labels = []
const labelsPriorities = []

const data = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .forEach((rucksack) => {
    const length = rucksack.length / 2
    const compartment1 = rucksack.slice(0, length)
    const compartment2 = rucksack.slice(length)
    allRucksacks.push([compartment1, compartment2])
  })

allRucksacks.forEach((rucksack) => {
  const rucksackMistake = []
  for (let i = 0; i < rucksack[0].length; i++) {
    const ch = rucksack[0][i]
    for (let j = 0; j < rucksack[1].length; j++) {
      const ch2 = rucksack[1][j]
      if (ch === ch2) rucksackMistake.push(ch2)
    }
  }
  mistaken.push(rucksackMistake[0])
})

mistaken.forEach((mistake) => {
  if (mistake) {
    if (mistake === mistake.toLowerCase())
      itemsPriorities.push(mistake.charCodeAt(0) - 96)
    else itemsPriorities.push(mistake.charCodeAt(0) - 38)
  }
})

const itemPrioritySum = itemsPriorities.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
)

//  Part 2

const dataAgain = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .reduce(
    (r, e, i) =>
      (i % 3 ? r[r.length - 1].push(e) : r.push([e])) && r,
    [],
  )

//Yeah, horrible, I know..
dataAgain.forEach((group) => {
  const repeated = []
  for (let i = 0; i < group[0].length; i++) {
    const ch = group[0][i]
    for (let j = 0; j < group[1].length; j++) {
      const ch2 = group[1][j]
      for (let k = 0; k < group[2].length; k++) {
        const ch3 = group[2][k]
        if (ch === ch2 && ch2 === ch3) repeated.push(ch3)
      }
    }
  }
  labels.push(repeated[0])
})

labels.forEach((label) => {
  if (label) {
    if (label === label.toLowerCase())
      labelsPriorities.push(label.charCodeAt(0) - 96)
    else labelsPriorities.push(label.charCodeAt(0) - 38)
  }
})

const labelsPrioritySum = labelsPriorities.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
)
console.log(
  '🚀 ~ file: app.js:82 ~ labelsPrioritySum',
  labelsPrioritySum,
)
