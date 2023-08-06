let n = Number(lines.shift());
let quebrados = 0;

for (let i = 0; i < n; i++) {
  let [L, C] = lines.shift().split(' ').map(Number);

  if (L > C) {
    quebrados += C;
  }
}

console.log(quebrados);
