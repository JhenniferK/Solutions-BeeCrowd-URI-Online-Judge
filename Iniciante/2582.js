let musicas = ['PROXYCITY', 'P.Y.N.G.', 'DNSUEY!', 'SERVERS', 'HOST!', 'CRIPTONIZE', 'OFFLINE DAY', 'SALT', 'ANSWER!', 'RAR?', 'WIFI ANTENNAS'];

let C = Number(lines.shift());

for (let i = 0; i < C; i++) {
  let [X, Y] = lines[i].split(' ').map(Number);

  let soma = X+Y;
  console.log(musicas[soma]);
