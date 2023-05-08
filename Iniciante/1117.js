lines = lines.map((e) => Number(e));

let contador = 0;
let somador = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i] >= 0 && lines[i] <= 10) {
    contador++;
    somador += lines[i];
    if (contador == 2) {
      console.log("media = " + (somador/contador).toFixed(2));
      break;
    }
  } else {
    console.log("nota invalida")
  }
}
