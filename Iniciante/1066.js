lines = lines.map((e) => Number(e));

let contPar = -1, contImpar = 0, contPositivo = 0, contNegativo = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i] == 0 || lines[i]%2 == 0) {
    contPar++;
  } else if (lines[i]%2 != 0){
    contImpar++;
  }

  if (lines[i] > 0) {
    contPositivo++;
  } else if (lines[i] < 0) {
    contNegativo++;
  }
}

console.log(`${contPar} valor(es) par(es)\n${contImpar} valor(es) impar(es)\n${contPositivo} valor(es) positivo(s)\n${contNegativo} valor(es) negativo(s)`);
