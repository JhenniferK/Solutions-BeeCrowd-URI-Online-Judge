lines = lines.map((e) => Number(e));

let ordem = [], A, B, C;

for (let i = 0; i < lines.length; i++) {
  lines.sort((a,b) => b-a);
  A = lines[0];
  B = lines[1];
  C = lines[2];
}

if (A >= (B+C)) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (A**2 == (B**2 + C**2)) {
    console.log("TRIANGULO RETANGULO");
  } 
  if (A**2 > (B**2 + C**2)) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (A**2 < (B**2 + C**2)) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (A == B && A == C) {
    console.log("TRIANGULO EQUILATERO");
  }
  if (A == B && A != C || B == C && B != A || A == C && A != B) {
    console.log("TRIANGULO ISOSCELES");
  }
}
