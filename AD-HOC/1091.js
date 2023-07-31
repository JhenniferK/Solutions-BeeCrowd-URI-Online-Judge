while (lines.length) {
  let n = Number(lines.shift());

  if (n == 0) {
    break;
  }

  let [N, M] = lines.shift().split(' ').map(Number);

  for (let i = 0; i < n; i++) {
    let [X, Y] = lines.shift().split(' ').map(Number);

    X -= N;
    Y -= M;

    if (X > 0) {
      if (Y > 0) {
        console.log("NE");
      } else if (Y < 0) {
        console.log("SE");
      } else {
        console.log("divisa");
      } 
    } else if (X < 0) {
      if (Y > 0) {
        console.log("NO");
      } else if (Y < 0) {
        console.log("SO");
      } else {
        console.log("divisa");
      }            
    } else {
      console.log("divisa");
    }
  }
}
