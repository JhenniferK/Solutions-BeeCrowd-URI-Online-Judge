let n = Number(lines.shift());

let cont = 0;

while (cont < 6) {
  if (n%2 != 0) {
    console.log(n);
    cont++;
  }
  n++;
}
