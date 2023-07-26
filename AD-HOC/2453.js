var lines = input.split('');

let frase = '';

for (let i = 1; i < lines.length; i++) {
  frase += lines[i];
  if (lines[i+1] != ' ') {
    i++;
  }
}

console.log(frase);
