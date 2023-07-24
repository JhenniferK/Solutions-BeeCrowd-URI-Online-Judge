let n = Number(lines.shift());
let iccanobif = [1, 1], cont = 2, ultimo;

if (n == 1) {
  console.log(n);
} else {
  while (cont < n) {
    ultimo = iccanobif[0] + iccanobif[1];
    iccanobif.unshift(ultimo);
    cont++;
  }

  console.log(...iccanobif);
}
