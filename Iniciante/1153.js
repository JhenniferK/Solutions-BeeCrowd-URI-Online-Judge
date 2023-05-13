function fatorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * fatorial(x - 1);
  }
}

let n = Number(lines.shift());
console.log(fatorial(n));
