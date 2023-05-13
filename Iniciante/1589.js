let ntestes = lines.shift();
let raio = 0;

for (let i = 0; i < ntestes; i++) {
  let [r1, r2] = lines.shift().split(' ').map(Number);

  raio = r1+r2;
  console.log(raio);
}
