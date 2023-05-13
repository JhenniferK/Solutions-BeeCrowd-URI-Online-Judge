let line1 = lines.shift().split(' ');

function calcularNumeroMax(t1, t2, t3, t4) {
  let numeroMax = t1 + t2 + t3 + t4 - 3;
  return numeroMax;
}

let t1 = Number(line1[0]);
let t2 = Number(line1[1]);
let t3 = Number(line1[2]);
let t4 = Number(line1[3]);

console.log(calcularNumeroMax(t1, t2, t3, t4));
