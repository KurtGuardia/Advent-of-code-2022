const fs = require('fs')

const data = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')

const X = 1
const Y = 2
const Z = 3
const L = 0
const D = 3
const W = 6
let score1 = 0

data.forEach((round) => {
  switch (round) {
    case 'A X':
      score1 += X + D
      break
    case 'A Y':
      score1 += Y + W
      break
    case 'A Z':
      score1 += Z + L
      break
    case 'B X':
      score1 += X + L
      break
    case 'B Y':
      score1 += Y + D
      break
    case 'B Z':
      score1 += Z + W
      break
    case 'C X':
      score1 += X + W
      break
    case 'C Y':
      score1 += Y + L
      break
    case 'C Z':
      score1 += Z + D
      break
  }
})

let score2 = 0

data.forEach((round) => {
  switch (round) {
    case 'A X':
      score2 += Z + L
      break
    case 'A Y':
      score2 += X + D
      break
    case 'A Z':
      score2 += Y + W
      break
    case 'B X':
      score2 += X + L
      break
    case 'B Y':
      score2 += Y + D
      break
    case 'B Z':
      score2 += Z + W
      break
    case 'C X':
      score2 += Y + L
      break
    case 'C Y':
      score2 += Z + D
      break
    case 'C Z':
      score2 += X + W
      break
  }
})

console.log(score2)
