let indice = 0;
let teste = 1;

while(true) {
  let n = Number(lines[indice]);
  indice++;

  if (n == 0) {
    break;
  }

  console.log(`Teste ${teste}`);
  teste++;

  let aldo = 0;
  let beto = 0;

  for (let i = 0; i < n; i++) {
    let [A, B] = lines[indice].split(' ').map(Number);
    aldo += A;
    beto += B;
    indice++;
  }

  if (aldo > beto) {
    console.log("Aldo");
  } else {
    console.log("Beto");
  }
  
  if (indice != lines.length-1) {
    console.log();
  }
}
