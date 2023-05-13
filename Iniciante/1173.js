let v = Number(lines.shift());

for (let i = 0; i < 10; i++) {
  console.log(`N[${[i]}] = ${v}`);
  v = 2*v;
}
