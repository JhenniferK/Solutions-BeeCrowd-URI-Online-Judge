lines = lines.shift().split(' ').map(Number);

let a = lines.shift();
let n = lines.shift();

while (n < 0 || n === 0) {
  n = lines.shift();
}

let soma = a;

for (let i = 1; i <= n-1; i++) {
  soma += (a + i);
}

console.log(soma);
