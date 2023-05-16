let numeros = lines[1].split(' ').map(Number);
let n2 = 0, n3 = 0, n4 = 0, n5 = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i]%2 === 0) {
    n2++;
  }
  if (numeros[i]%3 === 0) {
    n3++;
  }
  if (numeros[i]%4 === 0) {
    n4++;
  }
  if (numeros[i]%5 === 0) {
    n5++;
  }
}

console.log(`${n2} Multiplo(s) de 2`);
console.log(`${n3} Multiplo(s) de 3`);
console.log(`${n4} Multiplo(s) de 4`);
console.log(`${n5} Multiplo(s) de 5`);
