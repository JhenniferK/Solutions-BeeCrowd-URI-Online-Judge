let total = Number(lines.shift());

for (let i = 0; i < total; i++) {
  let linha = lines.shift().split(' ').map(Number);
  let K = linha.shift();
  let somador = 0;

  for (let j = 0; j < linha.length; j++) {
    somador += linha[j];
  }

  let aparelhos = (somador - K) + 1;
  console.log(aparelhos);
}
