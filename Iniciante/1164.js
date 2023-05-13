function ehPfto(n) {
  let soma = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      soma += i;
    }
  }
  return soma === n;
}

let n = Number(lines.shift());

for (let i = 0; i < n; i++) {
  let x = Number(lines.shift());
  
  if (ehPfto(x)) {
    console.log(`${x} eh perfeito`);
  } else {
    console.log(`${x} nao eh perfeito`);
  }
}
