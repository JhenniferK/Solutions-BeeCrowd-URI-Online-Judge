let nTestes = Number(lines.shift());

for (let i = 0; i < nTestes; i++) {
  let [r, s] = lines.shift().split(' ');
  
  if (r === s) {
    console.log('empate');
  } else if (r == 'tesoura' && s == 'papel' || r == 'tesoura' && s == 'lagarto') {
    console.log('rajesh');
  } else if (r == 'papel' && s == 'pedra' || r == 'papel' && s == 'spock') {
    console.log('rajesh');
  } else if (r == 'pedra' && s == 'lagarto' || r == 'pedra' && s == 'tesoura') {
    console.log('rajesh');
  } else if (r == 'spock' && s == 'tesoura' || r == 'spock' && s == 'pedra') {
    console.log('rajesh');
  } else if (r == 'lagarto' && s == 'spock' || r == 'lagarto' && s == 'papel') {
    console.log('rajesh');
  } else {
    console.log('sheldon');
  }
}
