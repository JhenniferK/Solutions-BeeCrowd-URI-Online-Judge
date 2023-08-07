let colchao = lines.shift().split(' ').map(Number);
let porta = lines.shift().split(' ').map(Number);

colchao = colchao.sort((a, b) => a - b);
porta = porta.sort((a, b) => a - b);

if (colchao[0] <= porta[0] && colchao[1] <= porta[1]) {
  console.log("S");
} else {
  console.log("N");
}
