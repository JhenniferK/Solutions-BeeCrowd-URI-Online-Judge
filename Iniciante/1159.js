let cont = 1, soma = 0, armx = 0;

while (true) {
  x = Number(lines.shift());
  armx = x;

  if (x == 0) {
    break;
  }

  if (x%2 == 0) {
    soma += x;
  } else {
    armx = x+1;
    soma += armx;
  }

  while (cont < 5) {
    armx += 2;
    soma += armx;
    cont++;
  }

  console.log(soma);
  soma = 0, cont = 1;
}
