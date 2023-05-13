lines = lines.map((e) => Number(e));

let n = lines.shift();

for (let i = 0; i <= n; i++) {
  if (n%i == 0) {
    console.log(i);
  }
}
