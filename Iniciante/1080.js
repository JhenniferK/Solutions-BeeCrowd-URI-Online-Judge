let max = Math.max(...lines);
console.log(max);

for (let i = 0; i < lines.length; i++) {
  if (lines[i] == max) {
    console.log(i+1);
  }
}
