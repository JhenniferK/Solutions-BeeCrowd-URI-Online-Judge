let n = Number(lines.shift());
let tS = 0, tB = 0, tA = 0;
let S = 0, B = 0, A = 0;

for (let i = 0; i < n; i++) {
  let str = lines.shift();
  let [s, b, a] = lines.shift().split(' ').map(Number);
  let [s1, b1, a1] = lines.shift().split(' ').map(Number);

  tS += s, tB += b, tA += a;
  S += s1, B += b1, A += a1;
}

let pSaque = (100*S)/tS, pBloqueio = (100*B)/tB, pAtaque = (100*A)/tA;

console.log(`Pontos de Saque: ${pSaque.toFixed(2)} %.
Pontos de Bloqueio: ${pBloqueio.toFixed(2)} %.
Pontos de Ataque: ${pAtaque.toFixed(2)} %.`);
