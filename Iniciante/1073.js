let lim = Number(lines.shift());

for (let i = 1; i <= lim; i++) {
  if (i%2 == 0) {
    console.log(i + "^2 = " + i**2);
  }
}
