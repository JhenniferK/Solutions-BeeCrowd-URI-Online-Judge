var lines = input.split(' ');

let valorAntigo = Number(lines.shift());
let valorNovo = Number(lines.shift());

let percentual = ((valorNovo-valorAntigo)/valorAntigo)*100;

console.log(percentual.toFixed(2) + '%');
