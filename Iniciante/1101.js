let soma = 0;

for (let i = 0; i < lines.length; i++) {
  let [m, n] = lines[i].split(' ').map(Number);

  if (m <= 0 || n <= 0) {
    break;
  } else {
    if (m < n) {
      for (let j = m; j <= n; j++) {
        process.stdout.write(j + " ");
        soma += j;
      }
    } else {
      for (let k = n; k <= m; k++) {
        process.stdout.write(k + " ");
        soma += k;
      }
    }
  }
  console.log("Sum=" + soma);
  soma = 0;
}
