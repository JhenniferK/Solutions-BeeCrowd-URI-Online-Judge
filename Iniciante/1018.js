let valor = Number(lines.shift());
console.log(valor);

let notas = [100, 50, 20, 10, 5, 2, 1];
let quantidades = [0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < notas.length; i++) {
  quantidade = parseInt(valor/notas[i]);
  valor %= notas[i];
  quantidades[i] = quantidade;
}

for (let i = 0; i < notas.length; i++) {
  console.log(`${quantidades[i]} nota(s) de R$ ${notas[i]},00`);
}
