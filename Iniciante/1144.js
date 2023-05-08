let l1 = Number(lines.shift());

for (let i = 1; i <= l1; i++) {
  let n1 = i;
  let n2 = i*i;
  let n3 = i*i*i;

  console.log(`${n1} ${n2} ${n3}`);
  console.log(`${n1} ${n2 + 1} ${n3 + 1}`);
}
