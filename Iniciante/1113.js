for (let i = 0; i < lines.length; i++) {
  let [x, y] = lines[i].split(' ').map(Number);

  if (x < y) {
    console.log("Crescente");
  } else if (y < x) {
    console.log("Decrescente");
  } else {
    break;
  }
}
