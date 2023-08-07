let n = Number(lines.shift());
let resp = lines.shift().split(' ').map(Number);
let sat = 0, ins = 0;

for (let i = 0; i < n; i++) {
  if (resp[i] == 0) {
    sat++;
  } else {
    ins++;
  }
}

if (sat > ins) {
  console.log('Y');
} else {
  console.log('N');
}
