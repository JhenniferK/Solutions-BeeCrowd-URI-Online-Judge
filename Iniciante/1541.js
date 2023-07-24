for (let i = 0; i < lines.length; i++) {
  let n = lines[i].split(' ').map(Number);

  if (n == 0) {
    break;
  } else {
    let calculo = ((n[0]*n[1])*100)/n[2];
    let total = Math.floor(Math.sqrt(calculo));
    console.log(total);
  }
}
