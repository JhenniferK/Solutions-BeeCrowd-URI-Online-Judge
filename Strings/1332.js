let nTestes = Number(lines.shift());
let um = 'one';

for (let i = 0; i < nTestes; i++) {
  let palavra = lines.shift();

  if (palavra.length === 5) {
    console.log(3);
  } else {
    let igual = 0;
    
    for (let j = 0; j < 3; j++) {
      if (palavra[j] == um[j]) {
        igual++;
      }
    }
    
    if (igual > 1) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}
