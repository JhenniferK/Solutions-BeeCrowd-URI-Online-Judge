let conceito = new Array(101);

conceito[0] = "E";

for (let i = 1; i <= 35; i++) {
  conceito[i] = "D";
}

for (let i = 36; i <= 60; i++) {
  conceito[i] = "C";
}

for (let i = 61; i <= 85; i++) {
  conceito[i] = "B";
}

for (let i = 86; i <= 100; i++) {
  conceito[i] = "A";
}

let nota = Number(lines.shift());

console.log(conceito[nota]);
