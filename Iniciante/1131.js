let grenais = 0, vI = 0, vG = 0, empates = 0;

while (true) {
  let [i, g] = lines.shift().split(' ').map(Number);

  if (i > g) {
    vI++;
  } else if (g > i) {
    vG++;
  } else {
    empates++;
  }

  grenais++;

  console.log("Novo grenal (1-sim 2-nao)");
  let resposta = Number(lines.shift());

  if (resposta === 2) {
    break;
  }
}

console.log(`${grenais} grenais
Inter:${vI}
Gremio:${vG}
Empates:${empates}`);

if (vI > vG) {
  console.log("Inter venceu mais");
} else if (vG > vI) {
  console.log("Gremio venceu mais");
} else {
  console.log("Nao houve vencedor");
}
