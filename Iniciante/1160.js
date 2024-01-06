function calculoTempo(popA, popB, crescA, crescB) {
  let anos = 0;

  while (popA <= popB) {
    popA = parseInt(popA*(1+crescA/100));
    popB = parseInt(popB*(1+crescB/100));
    anos += 1;

    if (anos > 100) {
      return "Mais de 1 seculo.";
    }
  }
    
  return `${anos} anos.`;
}

testes = lines.shift();

for (let i = 0; i < testes; i++) {
  let [pA, pB, cA, cB] = lines.shift().split(' ').map(Number);
  console.log(calculoTempo(pA, pB, cA, cB))
}
