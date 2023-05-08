//utilizando array para estrutura de dados

let l1 = Number(lines.shift());
let quant = new Array(3);
let C = 0, R = 0, S = 0, total = 0;

for (let i = 0; i < l1; i++) {
  let [n, e] = lines.shift().split(' ');
  n = Number(n);

  if (e == "C") {
    C += n;
  } else if (e == "R") {
    R += n;
  } else if (e == "S") {
    S += n;
  }
}

quant[0] = C;
quant[1] = R;
quant[2] = S;

for (let i = 0; i < quant.length; i++) {
  total += quant[i];
}

let percC = (quant[0]*100)/total;
let percR = (quant[1]*100)/total;
let percS = (quant[2]*100)/total;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${C}`);
console.log(`Total de ratos: ${R}`);
console.log(`Total de sapos: ${S}`);
console.log(`Percentual de coelhos: ${(percC).toFixed(2)} %`);
console.log(`Percentual de ratos: ${(percR).toFixed(2)} %`);
console.log(`Percentual de sapos: ${(percS).toFixed(2)} %`);
