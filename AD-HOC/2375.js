let bola = Number(lines.shift());
let [A, L, P] = lines.shift().split(' ').map(Number);

if (A >= bola && L >= bola && P >= bola) {
  console.log("S");
} else {
  console.log("N");
}
