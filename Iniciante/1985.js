let ntestes = Number(lines.shift());
let total = 0;

for (let i = 0; i < ntestes; i++) {
  let [c, q] = lines.shift().split(' ').map(Number);

  if (c == 1001) {
    total += q*1.5;
  } else if (c == 1002) {
    total += q*2.5;
  } else if (c == 1003) {
    total += q*3.5;
  } else if (c == 1004) {
    total += q*4.5;
  } else if (c == 1005) {
    total += q*5.5;
  }
}

console.log(total.toFixed(2));
