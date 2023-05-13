let ntestes = Number(lines.shift());

for (let i = 0; i < ntestes; i++) {
  let [nome, forca] = lines.shift().split(' ');

  if (nome == 'Thor') {
    console.log('Y');
  } else {
    console.log('N');
  }
} 
