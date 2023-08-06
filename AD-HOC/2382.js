let [L, A, P, R] = lines.shift().split(' ').map(Number);

if (R >= (Math.sqrt(L**2 + A**2))/2 && R >= (Math.sqrt(L**2 + P**2))/2) {
  console.log("S");
} else {
  console.log("N");
}
