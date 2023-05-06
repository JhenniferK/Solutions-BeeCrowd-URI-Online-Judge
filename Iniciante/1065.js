let pares = 0;

for (let i=0; i<=4; i++) {
  let valor = Number(lines.shift());
  if (valor%2 == 0) {
    pares++;
  }
} 

console.log(pares + " valores pares");
