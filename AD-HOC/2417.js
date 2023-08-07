var lines = input.split(' ').map(Number);

let vC = lines[0], eC = lines[1], sC = lines[2];
let vF = lines[3], eF = lines[4], sF = lines[5];

let ptcC = vC*3 + eC, ptcF = vF*3 + eF;

if (ptcC > ptcF) {
  console.log('C');
} else if (ptcF > ptcC) {
  console.log('F');
} else if (ptcC == ptcF) {
  if (sC > sF) {
    console.log('C');
  } else if (sF > sC) {
    console.log('F');
  } else {
    console.log('=');
  }
}
