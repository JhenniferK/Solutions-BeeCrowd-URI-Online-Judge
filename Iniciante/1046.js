let line1 = lines.shift().split(' ');

let hi = Number(line1.shift());
let hf = Number(line1.shift());

let h = hf-hi;

if (h < 1) {
  h += 24;
  console.log("O JOGO DUROU " + h + " HORA(S)");
}

if (h == 0) {
  console.log("O JOGO DUROU 24 HORA(S)");
}

if (hf > hi) {
  console.log("O JOGO DUROU " + h + " HORA(S)");
}
