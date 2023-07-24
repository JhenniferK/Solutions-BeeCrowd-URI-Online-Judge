let espacos = Number(lines.shift());
let totalCompradas = Number(lines.shift());
let figurinhas = [], contador = 0;

for (let i = 0; i < totalCompradas; i++) {
  let n = Number(lines.shift());

  if (!figurinhas.includes(n)) {
    figurinhas.push(n);
    contador++;
  }
}

if (espacos >= contador) {
  console.log(espacos - contador);
} else {
  console.log(0);
}
