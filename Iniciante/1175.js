let n = [];

for (let i = 0; i < 20; i++) {
  n[i] = Number(lines.shift());
}

for (let i = 0; i < 10; i++) {
  let temp = n[i];
  n[i] = n[19-i];
  n[19-i] = temp;
}

for (let i = 0; i < 20; i++) {
  console.log(`N[${i}] = ${n[i]}`);
}
