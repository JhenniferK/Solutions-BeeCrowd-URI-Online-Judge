let lim = Number(lines.shift());

function somaImpares(x, y) {
  let soma = 0;
  if (y < x) {
    for (let i = y+1; i < x; i++) {
      if (i%2 !== 0) {
        soma += i;
      }
    }
    return soma;
  }
  for (let i = x+1; i < y; i++) {
    if (i%2 !== 0) {
      soma += i;
    }
  }
  return soma;
}

for (let i = 0; i < lim; i++) {
  let [x, y] = lines.shift().split(' ').map(Number);
  let resultado = somaImpares(x, y);
  console.log(resultado);
}
