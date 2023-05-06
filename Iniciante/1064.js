lines = lines.map((e) => Number(e));

let contPos = 0, soma = 0, media;

for (let i = 0; i < lines.length; i++) {
  if (lines[i] > 0) {
    contPos++;
    soma += lines[i];
  }
}

media = soma/contPos;

console.log(`${contPos} valores positivos\n${media.toFixed(1)}`);
