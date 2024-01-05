function raiz2(n) {
  if (n == 0) {
    return 6;
  }

  let x = 6+1/raiz2(n-1);
  return x;
}

n = lines.shift();
x = raiz2(n)-3;

console.log(x.toFixed(10));
