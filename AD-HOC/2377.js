let [L, D] = lines.shift().split(' ').map(Number);
let [K, P] = lines.shift().split(' ').map(Number);

let qtdPed = Math.floor(L/D);
console.log(K*L + P*qtdPed);
