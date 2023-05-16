let testes = Number(lines.shift());

for(let i = 0; i < testes; i++) {
  let [h, m, o] = lines.shift().split(' ').map(Number);

  let hora = h.toString().padStart(2, '0');
  let minuto = m.toString().padStart(2, '0');
  
  if (o == 0) {
    console.log(`${hora}:${minuto} - A porta fechou!`);
  } else {
    console.log(`${hora}:${minuto} - A porta abriu!`);
  }
}
