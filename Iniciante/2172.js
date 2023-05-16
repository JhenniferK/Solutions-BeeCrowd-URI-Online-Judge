for (let i = 0; i < lines.length; i++) {
  let [x, m] = lines[i].split(' ').map(Number);
  
  if (x == 0 && m == 0) {
    break;
  } else {
    let newXP = x*m;
    console.log(newXP);
  }
}
