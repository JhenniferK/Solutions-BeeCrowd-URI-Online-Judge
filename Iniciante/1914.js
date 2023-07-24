let lim = Number(lines.shift());

for (let i = 0; i < lim; i++) {
  let [nome1, e1, nome2, e2] = lines.shift().split(' ');
  let [n1, n2] = lines.shift().split(' ').map(Number);
  let total = n1+n2;

  if (total%2 == 0) {
    if (e1 == 'PAR') {
      console.log(nome1);
    } else {
      console.log(nome2);
    }
  } else {
    if (e1 == 'IMPAR') {
      console.log(nome1);
    } else {
      console.log(nome2);
    }
  } 
}
