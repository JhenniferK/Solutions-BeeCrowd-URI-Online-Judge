let n = Number(lines.shift());
let x = new Array(n);

for (let i = 0; i < lines.length; i++) {
  let v = lines.shift().split(' ').map(Number);
  x = v;
}

console.log(`Menor valor: ${Math.min(...x)}`);
console.log(`Posicao: ${x.indexOf(Math.min(...x))}`);
