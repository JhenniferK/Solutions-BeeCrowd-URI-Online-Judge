let n = Number(lines.shift());

for (let i = 0; i < n; i++) {
  let[n1, n2] = lines[i].split(' ');
  if (n1.substr(-n2.length) == n2) {
    console.log("encaixa");
  } else {
    console.log("nao encaixa");
  }
}
