let correto = Number(lines.shift());
let respostas = lines.shift().split(' ').map(Number);
let corretas = 0;

for (let i = 0; i < respostas.length; i++) {
  if (correto === respostas[i]) {
    corretas++;
  }
}

console.log(corretas);
