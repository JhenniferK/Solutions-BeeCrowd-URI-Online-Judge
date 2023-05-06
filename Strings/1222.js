while (true) {
  try {
    let line1 = lines.shift().split(' ');
    let n = Number(line1[0]);
    let l = Number(line1[1]);
    let c = Number(line1[2]);
    let texto = lines.shift().split(' ');

    let linha = "";
    let linhas = 1;
    for (let i = 0; i < texto.length; i++) {
      let palavra = texto[i];
      if (linha == "") {
        linha = palavra;
      } else {
        if ((linha + " " + palavra).length > c) {
          linhas++;
          linha = palavra;
        } else {
          linha += " " + palavra;
        }
      }
    }

    let resultado = Math.ceil(linhas/l);

    console.log(resultado);
  } catch (error) {
    break;
  }
}
