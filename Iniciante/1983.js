let n = Number(lines.shift());
let mat = 0, maiorN = 0;

for (let i = 0; i < n; i++) {
  let [matricula, nota] = lines[i].split(' ').map(Number);
  if (nota > maiorN) {
    mat = matricula;
    maiorN = nota;
  }
}

if (maiorN >= 8) {
  console.log(mat);
} else {
  console.log("Minimum note not reached");
}
