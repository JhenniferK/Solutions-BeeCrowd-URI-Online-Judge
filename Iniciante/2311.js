let n = Number(lines.shift());

function remover(array) {
  array.sort((a, b) => a - b);
  array.shift();
  array.pop();
}

for (let i = 0; i < n; i++) {
  let nome = lines.shift();
  let nivel = lines.shift().split(' ').map(Number);
  let notas = lines.shift().split(' ').map(Number);

  remover(notas);
  let soma = 0;

  for (let j = 0; j < notas.length; j++) {
    soma += notas[j];
  }

  console.log(`${nome} ${(soma*nivel).toFixed(2)}`);
}
