let somador = 1;
let x = 2;
let p = 1;

for (let i = 3; i <= 39; i+=2) {
  somador += (i/(x**p));
  p++;
}

console.log(somador.toFixed(2));
