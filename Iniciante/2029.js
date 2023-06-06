const pi = 3.14;

while (lines.length > 0) {
  let volume = Number(lines.shift());
  let diametro = Number(lines.shift());
  
  let raio = diametro/2;
  let altura = volume/(pi*(raio**2));
  let area = pi*raio**2;

  console.log(`ALTURA = ${altura.toFixed(2)}`);
  console.log(`AREA = ${area.toFixed(2)}`);
}
