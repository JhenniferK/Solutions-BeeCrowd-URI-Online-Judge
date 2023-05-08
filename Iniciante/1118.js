function calcularMedia() {
  let avs = [];
  while (avs.length < 2){
    let nota = lines.shift();
    if (nota >= 0 && nota <= 10) avs.push(nota);
    else console.log("nota invalida");
  }
  
  let a1 = avs[0];
  let a2 = avs[1];
  let mediaSemestral = (a1+a2)/2;
  console.log("media = " + mediaSemestral.toFixed(2));
  
  let c = lines.shift();
  console.log("novo calculo (1-sim 2-nao)");
  
  while (c != 1 && c != 2) {
    c = lines.shift();
    console.log("novo calculo (1-sim 2-nao)");
  }
  
  if (c == 1) calcularMedia();
  else if (c == 2) return;

}

calcularMedia();
