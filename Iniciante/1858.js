let n = Number(lines.shift());
let num = lines.shift().split(' ').map(Number);

console.log(num.indexOf(Math.min(...num)) + 1);
