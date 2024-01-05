function raiz2(n) {
  if (n == 0) {
    return 2;
  }

  let x = 2+1/raiz2(n-1);
  return x;
}

n = lines.shift();
x = raiz2(n)-1;

console.log(x.toFixed(10));
