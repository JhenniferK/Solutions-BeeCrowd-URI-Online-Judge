let [leituras, capacidade] = lines.shift().split(' ').map(Number);
let total = 0;
let encontrou = false;

for (let i = 0; i < leituras; i++) {
  let [S, E] = lines.shift().split(' ').map(Number);

  total -= S;
  total += E;

  if (total > capacidade) {
    encontrou = true;
    console.log("S");
    break;
  }
}

if (!encontrou) {
  console.log("N");
}
