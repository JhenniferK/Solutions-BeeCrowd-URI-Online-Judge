let n = Number(lines.shift());

for (let i = 0; i < n; i++) {
  let [x, y] = lines[i].split(' ').map(Number);
  let r = (3*x)**2+y**2; 
  let b = 2*(x**2)+(5*y)**2;
  let c = (-100*x)+(y**3); 

  if (Math.max(r, b, c) == r) console.log("Rafael ganhou");
  else if (Math.max(r, b, c) == b) console.log("Beto ganhou");
  else if (Math.max(r, b, c) == c) console.log("Carlos ganhou");
} 
