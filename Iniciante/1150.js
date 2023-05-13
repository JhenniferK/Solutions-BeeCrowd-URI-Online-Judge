let x = Number(lines.shift());
let z = Number(lines.shift());

while (z <= x) {
  z = Number(lines.shift());
}

let soma = x;
let cont = 1;

while (soma < z) {
  x++;
  soma += x;
  cont++;
}

console.log(cont);
