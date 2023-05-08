let lim = Number(lines.shift());

for (let i = 0; i < lim; i++) {
  let [x, y] = lines[i].split(' ').map(Number);

  if (y != 0) {
    console.log((x/y).toFixed(1));
  } else {
    console.log("divisao impossivel");
  }
}
