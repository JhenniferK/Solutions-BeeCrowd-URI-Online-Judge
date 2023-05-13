let sqc = "";
let primeiroLoop = true;

while (true) {
  let x = Number(lines.shift());

  if (x === 0) {
    break;
  }

  if (!primeiroLoop) {
    sqc += "\n";
  }

  for (let i = 1; i <= x; i++) {
    sqc += i;

    if (i < x) {
      sqc += " ";
    }
  }

  primeiroLoop = false;
}

console.log(sqc);
