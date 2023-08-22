let n = Number(lines.shift());
let valores = [];

for (let i = 0; i < n; i++) {
  let [preco, gramas] = lines[i].split(' ').map(Number);
  let total = (preco/gramas)*1000;
  valores.push(total);
}

console.log(Math.min(...valores).toFixed(2));
