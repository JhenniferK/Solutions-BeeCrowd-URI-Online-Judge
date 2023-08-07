var lines = input.split(' ').map(Number);

lines = lines.sort((a, b) => a - b);
let menor = lines.shift(), maior = lines.pop();
let pontuacao = 0;

for (let i = 0; i < lines.length; i++) {
  pontuacao += lines[i];
}

console.log(pontuacao.toFixed(1));
