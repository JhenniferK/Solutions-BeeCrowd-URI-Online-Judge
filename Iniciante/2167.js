let n = Number(lines.shift());
let rpm = lines.shift().split(' ').map(Number);
let contador = 0, sqc = [], queda = false;

for (let i = 0; i < rpm.length; i++) {
  if (i == 0) {
    sqc.push(rpm[i]);
    contador++;
  } else {
    if (rpm[i] >= rpm[i-1]) {
      sqc.push(rpm[i]);
      contador++;
    } else {
      queda = true;
      contador++;
      console.log(contador);
      break;
    }
  }
}

if (queda == false) {
  console.log(0);
}
