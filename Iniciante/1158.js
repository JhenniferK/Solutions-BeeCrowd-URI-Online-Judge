let t = Number(lines.shift());

for (let i = 0; i < t; i++) {
  let [x, y] = lines.shift().split(' ').map(Number);
  let soma = 0, cont = 0;

  while (cont < y) {
    if (x%2 != 0) {
      soma += x;
      cont++;
    }
    x++;
  }
  console.log(soma);
}
