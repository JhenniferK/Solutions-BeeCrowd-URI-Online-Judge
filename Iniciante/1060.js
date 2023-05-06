lines = lines.map((e) => Number(e));

let contPos = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i] > 0) {
    contPos++;
  }
}

console.log(`${contPos} valores positivos`);
