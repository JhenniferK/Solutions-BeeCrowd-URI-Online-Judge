let nTestes = Number(lines.shift());

for (let i = 1; i <= nTestes; i++) {
  let [r, s] = lines.shift().split(' ');
  
  if (r === s) {
    console.log(`Caso #${[i]}: De novo!`);
  } else if (r == 'tesoura' && s == 'papel' || r == 'tesoura' && s == 'lagarto') {
    console.log(`Caso #${[i]}: Bazinga!`);
  } else if (r == 'papel' && s == 'pedra' || r == 'papel' && s == 'Spock') {
    console.log(`Caso #${[i]}: Bazinga!`);
  } else if (r == 'pedra' && s == 'lagarto' || r == 'pedra' && s == 'tesoura') {
    console.log(`Caso #${[i]}: Bazinga!`);
  } else if (r == 'Spock' && s == 'tesoura' || r == 'Spock' && s == 'pedra') {
    console.log(`Caso #${[i]}: Bazinga!`);
  } else if (r == 'lagarto' && s == 'Spock' || r == 'lagarto' && s == 'papel') {
    console.log(`Caso #${[i]}: Bazinga!`);
  } else {
    console.log(`Caso #${[i]}: Raj trapaceou!`);
  }
}
