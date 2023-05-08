let x = Number(lines.shift());
let y = Number(lines.shift());

if (x < y) {
  for (let i = x+1; i < y; i++) {
    if (i%5 == 3 || i%5 == 2) {
      console.log(i);
    }
  }
} else {
  for (let i = y+1; i < x; i++) {
    if (i%5 == 3 || i%5 == 2) {
      console.log(i);
    }
  }
}
