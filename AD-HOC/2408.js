var lines = input.split(' ').map(Number);

lines.sort((a, b) => a - b);

console.log(lines[1]);
