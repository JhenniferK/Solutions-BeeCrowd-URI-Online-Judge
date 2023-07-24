let soma = 0;

for (let i = 0; i < lines.length; i++) {
  let entrada = lines[i];

  if (entrada == 'caw caw') {
    console.log(soma);
    soma = 0;
  } else {
    let olhos = entrada.split('');
    for (let j = 0; j < olhos.length; j++) {
      if (olhos[j] == '*') {
        soma += 1*2**(2-j);
      }
    }
  }
}
