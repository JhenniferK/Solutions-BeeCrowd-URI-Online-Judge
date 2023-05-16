let testes = Number(lines.shift());
let tempo = 0;

for(let i = 0; i < testes; i++) {
  let palavra = lines.shift();

  tempo = palavra.length/100; 
  console.log(tempo.toFixed(2));
}
