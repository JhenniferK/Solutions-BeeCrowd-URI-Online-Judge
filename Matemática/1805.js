let [A, B] = lines.shift().split(' ').map(Number);
let soma = (A+B)*(B-A+1)/2;

console.log(soma);
