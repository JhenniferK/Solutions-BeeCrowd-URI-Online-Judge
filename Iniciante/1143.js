let lim = lines.shift();
let n1 = 1;
let n2 = 1;
let n3 = 1;

for (let i = 0; i < lim; i++) {
  console.log(n1 + ' ' + n2 + ' ' + n3);
  n1++;
  n2 = n1**2;
  n3 = n1*n2;
}
