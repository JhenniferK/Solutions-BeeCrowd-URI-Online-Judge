let [n, k] = lines.shift().split(' ').map(Number);
let alunos = [];

for (let i = 0; i < n; i++) {
  alunos.push(lines.shift());
}

alunos.sort(function(a, b) {
  return a.localeCompare(b);
});

console.log(alunos[k-1]);
