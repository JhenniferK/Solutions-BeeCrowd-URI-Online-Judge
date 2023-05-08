let ls = 7;
let li = 5;

for (let i = 1; i <= 9; i+=2) {
  for (let j = ls; j >= li; j--) {
    console.log("I=" + i + " J=" + j);
  }
  ls += 2;
  li += 2;
}
