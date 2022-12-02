const fs = require('fs')

const data = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((n) => parseInt(n))

let elves = []
let cur_elf = []

data.forEach((val) => {
  if (val) {
    cur_elf.push(val)
  } else {
    elves.push(cur_elf)
    cur_elf = []
  }
})
elves.push(cur_elf)

const test = elves.map((elf) => {
  return elf.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue,
    0,
  )
})

console.log(Math.max(...test))

const desc = test.sort((a, b) => a - b).reverse()

const topThreeMotherfockers = desc[0] + desc[1] + desc[2]
console.log(
  '🚀 ~ file: index.js:34 ~ topThreeMotherfockers',
  topThreeMotherfockers,
)
