let li = Number(lines.shift());
let ls = Number(lines.shift());
let soma = 0;

if (ls > li) {
  for (let i = li+1; i < ls; i++) {
    if (i%2 != 0) {
    soma += i;
    }
  }
}

if (li > ls) {
  for (let i = ls+1; i < li; i++) {
    if (i%2 != 0) {
    soma += i;
    }
  }
}

console.log(soma);
