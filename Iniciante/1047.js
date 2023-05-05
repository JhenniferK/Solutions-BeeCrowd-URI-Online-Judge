let line1 = lines.shift().split(' ');

let h1 = Number(line1.shift());
let m1 = Number(line1.shift());
let h2 = Number(line1.shift());
let m2 = Number(line1.shift());

let h = h2-h1;
let m = m2-m1;

if (h<=0 && m<=0){
  h += 24;
}

if (m<=0){
  m += 60;
  h--;
}

if (h1 == h2 && m1 == m2) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  console.log("O JOGO DUROU " + h + " HORA(S) E " + m + " MINUTO(S)");
}
