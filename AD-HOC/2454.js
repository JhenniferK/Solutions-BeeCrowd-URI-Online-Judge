var lines = input.split(' ').map(Number);

let P = lines[0];
let R = lines[1];

if (P == 0) {
  console.log('C');
} else if (P == 1 && R == 0) {
  console.log('B');
} else {
  console.log('A');
}
