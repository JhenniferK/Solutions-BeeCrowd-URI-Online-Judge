let sorteados = lines.shift().split(' ');
let apostados = lines.shift().split(' ');
let qtde = 0;

for (let i = 0; i < sorteados.length; i++) {
  for (let j = 0; j < apostados.length; j++) {
    if (apostados[j] == sorteados[i]) {
      qtde++;
    }
  }
}

if (qtde == 3) {
  console.log("terno");
} else if (qtde == 4) {
  console.log("quadra");
} else if (qtde == 5) {
  console.log("quina");
} else if (qtde == 6) {
  console.log("sena");
} else {
  console.log("azar");
}
