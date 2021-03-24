/*
Cours Sofiane

// Notre fonction ShowStars
const showStars = (nbStars) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log('*'.repeat(i))
  }
}

// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 3) {
  console.log('usage: node stars.js number')
  process.exit(1)
}

// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

// Nous somme OK, il n'y a qu'un seul argument et c'est un nombre.
const nbStars = Number(process.argv[2])
showStars(nbStars)
*/


//Correction de guillaume

const pyramid = (nbStars, str) => {
  for (let i = 1; i <= nbStars; i+= 1) {
    console.log(str.repeat(i))
  }
}
if (process.argv.length !== 4) {
  console.log('usage : node pyramid.js nbStars st ')
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

let nbStars = process.argv[2]
let str = process.argv[3]
pyramid(nbStars,str)