lines = lines.map((e) => Number(e));

let limInf = lines.shift();
let limSup = lines.shift();
let soma = 0;

if (limInf < limSup) {
  for (let i = limInf; i <= limSup; i++) {
    if (i%13 != 0) {
      soma += i;
    }
  }
} else if (limSup < limInf) {
  for (let i = limSup; i <= limInf; i++) {
    if (i%13 != 0) {
      soma += i;
    }
  }
}

console.log(soma);
