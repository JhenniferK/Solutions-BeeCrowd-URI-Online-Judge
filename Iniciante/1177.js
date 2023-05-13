let t = Number(lines.shift());
let n = [];

for (let i = 0; i < 1000; i++) {
  n[i] = i%t;
}

for (let i = 0; i < 1000; i++) {
  console.log(`N[${i}] = ${n[i]}`);
}
