let lines1 = lines.shift().split(' ');

let abas = Number(lines1.shift());
let vezes = Number(lines1.shift());;

for (let i = 0; i < vezes; i++) {
  let acao = lines.shift();

  if (acao == "fechou") {
    abas--;
    abas += 2;
  } else {
    abas--;
  }
}

console.log(abas);
