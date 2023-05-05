let entrada = Number(lines.shift());

if (entrada > 365) {
  let anos = Math.trunc(entrada/365);
  let meses = Math.trunc((entrada%365)/30);
  let dias = (entrada%365)%30;
  console.log(anos + " ano(s)" + '\n' + meses + " mes(es)" + '\n' + dias + " dia(s)");
} else if (entrada%365 == 0) {
  let anos = entrada/365;
  console.log(anos + " ano(s)" + '\n' + "0 mes(es)" + '\n' + "0 dia(s)");
} else {
  let meses = Math.trunc(entrada/30);
  let dias = entrada%30;
  console.log("0 ano(s)" + '\n' + meses + " mes(es)" + '\n' + dias + " dia(s)")
}
