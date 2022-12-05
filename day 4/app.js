const fs = require('fs')

const groups = []
let counter = 0

const data = fs
  .readFileSync('test.txt', { encoding: 'utf-8' })
  .split('\n')
  .forEach((pair) => {
    // Creating complete numered data
    const splitted = pair.split(',')
    const start1 = +splitted[0][0]
    const end1 = +splitted[0][2]
    const missing1 = end1 - start1 - 1
    const start2 = +splitted[1][0]
    const end2 = +splitted[1][2]
    const missing2 = end2 - start2 - 1
    const group = []
    const first = []
    const second = []

    first.push(start1)
    for (let i = 0; i < missing1; i++) {
      first.push(start1 + i + 1)
    }
    if (end1 !== start1) first.push(end1)

    second.push(start2)
    for (let i = 0; i < missing2; i++) {
      second.push(start2 + i + 1)
    }
    if (end2 !== start2) second.push(end2)

    // Each group looks like this ['234', '456']
    group.push(
      first.toString().replaceAll(',', ''),
      second.toString().replaceAll(',', ''),
    )

    groups.push(group)
  })

groups.forEach((group) => {
  if (
    group[0].includes(group[1]) ||
    group[1].includes(group[0])
  )
    counter++
})

console.log(counter)
