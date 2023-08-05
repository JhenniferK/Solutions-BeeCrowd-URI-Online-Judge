var lines = input.split(' ').map(Number);

let litA = lines[0], litG = lines[1];
let rendA = lines[2], rendG = lines[3];

if (rendA/litA > rendG/litG) {
  console.log('A');
} else if (rendA/litA < rendG/litG) {
  console.log('G');
} else {
  console.log('G');
}
