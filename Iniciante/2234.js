let line1 = lines.shift().split(' ').map(Number);

let H = line1[0], P = line1[1];

console.log((H/P).toFixed(2));
