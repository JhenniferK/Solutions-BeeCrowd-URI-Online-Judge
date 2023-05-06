let nTestes = Number(lines.shift());

for (let i = 0; i < nTestes; i++) {
  let [a, b] = lines.shift().split(' ');
  
  if (a.substr(-b.length) === b) {
    console.log("encaixa");
  } else {
    console.log("nao encaixa");
  }
}
