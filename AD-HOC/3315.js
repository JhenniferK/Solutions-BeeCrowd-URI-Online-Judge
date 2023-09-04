let maior = 0;

for (let i = 0; i < 4; i++) {
  let linha = lines.shift().split(' ').map(Number);
  let somador = 0;
  
  for (let j = 0; j < linha.length; j++) {
    somador += linha[j];
  }

  if (somador > maior) {
    maior = somador;
  }
}

function binario(n){
  return (n >>> 0).toString(2);
}

console.log(`${maior} = ${binario(maior)}`);
