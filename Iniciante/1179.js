let pares = [], impares = [];

for (let i = 0; i < 15; i++) {
  let valor = Number(lines.shift());
  
  if (valor % 2 === 0) {
    pares.push(valor);
  } else {
    impares.push(valor);
  }

  if (pares.length === 5) {
    for (let j = 0; j < pares.length; j++) {
      console.log(`par[${j}] = ${pares[j]}`);
    }
    pares = [];
  } else if (impares.length === 5) {
    for (let k = 0; k < impares.length; k++) {
      console.log(`impar[${k}] = ${impares[k]}`);
    }
    impares = [];
  }
}

for (let i = 0; i < impares.length; i++) {
  console.log(`impar[${i}] = ${impares[i]}`);
}

for (let i = 0; i < pares.length; i++) {
  console.log(`par[${i}] = ${pares[i]}`);
}
