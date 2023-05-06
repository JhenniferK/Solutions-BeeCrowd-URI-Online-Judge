lines = lines.map((e) => Number(e));

let lim = lines.shift(), contIn = 0, contOut = 0;

for (let i = 0; i < lim; i++) {
  if (lines[i] >= 10 && lines[i] <= 20) {
    contIn++;
  } else {
    contOut++;
  }
}

console.log(`${contIn} in\n${contOut} out`);
