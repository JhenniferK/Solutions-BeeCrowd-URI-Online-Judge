let lines1 = lines.shift().split(' ');

let c1 = Number(lines1.shift());
let c2 = Number(lines1.shift());
let c3;

if (c1 == c2) {
  c3 = c1;
} else if (c1 > c2) {
  c3 = c1;
} else {
  c3 = c2;
}

console.log(c3);
