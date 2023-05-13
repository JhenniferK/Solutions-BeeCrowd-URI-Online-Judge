function ehPrimo(x) {
  for (let i = 2; i < x; i++) {
    if (x%i == 0) {
      return false;
    }
  }
  return true;
}

let n = Number(lines.shift());

for (let i = 0; i < n; i++) {
  let x = Number(lines.shift());
  
  if (ehPrimo(x)) {
    console.log(`${x} eh primo`);
  } else {
    console.log(`${x} nao eh primo`);
  }
}
