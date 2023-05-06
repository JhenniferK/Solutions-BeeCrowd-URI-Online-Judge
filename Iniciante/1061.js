let [dInicio, tInicio] = lines[0].split(' ');
let [hInicio, mInicio, sInicio] = lines[1].split(':').map(Number);

let [dFim, tFim] = lines[2].split(' ');
let [hFim, mFim, sFim] = lines[3].split(':').map(Number);

let inicio = sInicio + mInicio*60 + hInicio*3600 + (tInicio - 1)*86400;
let fim = sFim + mFim*60 + hFim*3600 + (tFim - 1)*86400;
let duracao = fim - inicio;

let dias = Math.floor(duracao/86400);
duracao %= 86400;
let horas = Math.floor(duracao/3600);
duracao %= 3600;
let minutos = Math.floor(duracao/60);
duracao %= 60;
let segundos = duracao;

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
