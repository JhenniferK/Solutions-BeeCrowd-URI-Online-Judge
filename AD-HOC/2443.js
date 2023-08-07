var lines = input.split(' ').map(Number);

let [a, b, c, d] = lines;

let denom = b*d, num = (denom/b)*a + (denom/d)*c;

for (let i = 100; i >= 2; i--) {
  if (num%i == 0 && denom%i == 0) {
    num = num/i;
    denom = denom/i;
  }
}

console.log(num, denom);
