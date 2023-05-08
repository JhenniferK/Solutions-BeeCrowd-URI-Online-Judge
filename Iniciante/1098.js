let li = 1;
let ls = 3;

for (let i = 0; i <= 2; i += 0.2) {
  for (let j = li; j <= ls; j++) {
    console.log("I=" + Math.round(i * 100)/100 + " J=" + Math.round(j * 100)/100);
  }
  ls += 0.2;
  li += 0.2;
}
