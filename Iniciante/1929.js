let varetas = lines.shift().split(' ').map(Number);
varetas.sort((a, b) => a - b);

if (varetas[0] + varetas[1] > varetas[2] || varetas[1] + varetas[2] > varetas[3]) {
  console.log('S');
} else {
  console.log('N');
}
