for (let i = 0; i < lines.length; i++) {
  if (lines[i] == 0 || lines[i] < 0) {
    lines[i] = 1;
  }
}

for (let j = 0; j < lines.length; j++) {
  console.log(`X[${j}] = ${lines[j]}`);
}
