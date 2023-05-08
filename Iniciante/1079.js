let l1 = Number(lines.shift());

for (let i = 0; i < l1; i++) {
  valores = lines.shift().split(' ').map(Number);
  let soma = 0, pesos = [2, 3, 5];

  for (let j = 0; j < valores.length; j++) {
    soma += valores[j]*pesos[j];
  }

  let media = soma/10;
  console.log(media.toFixed(1));
}
