let x, somador = 0, cont = 0;

for (let i = 0; i < lines.length; i++) {
  x = lines[i];
  if (x >= 0) {
    somador += x;
    cont++;
  } else {
    break;
  }
}

console.log((somador/cont).toFixed(2));
