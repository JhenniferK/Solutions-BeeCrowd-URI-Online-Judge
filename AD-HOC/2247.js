let indice = 0;
let teste = 1;

while(true) {
  let n = Number(lines[indice]);
  let valor = 0;
  indice++;

  if (n == 0) {
    break;
  }

  console.log(`Teste ${teste}`);
  teste++;

  for (let i = 0; i < n; i++) {
    let [J, K] = lines[indice].split(' ').map(Number);
    valor += J-K;
    console.log(valor);
    indice++;
  }

  if (indice != lines.length-1) {
    console.log();
  }
}
