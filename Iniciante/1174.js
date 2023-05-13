for (let i = 0; i < lines.length; i++) {
  if (i == 100) {
    break;
  }
  
  if (lines[i] <= 10) {
    console.log(`A[${i}] = ${(lines[i]).toFixed(1)}`);
  }
}
