let line1 = lines.shift().split(' ');

let N1 = Number(line1.shift());
let N2 = Number(line1.shift());
let N3 = Number(line1.shift());
let N4 = Number(line1.shift());
let N5 = Number(lines.shift());

let media = ((N1*2)+(N2*3)+(N3*4)+(N4*1))/10;

if (media >= 7){
  console.log("Media: " + media.toFixed(1));
  console.log("Aluno aprovado.");
} else if (media < 5){
  console.log("Media: " + media.toFixed(1));
  console.log("Aluno reprovado.");
} else if (media >= 5 && media <= 6.9){
  console.log("Media: " + media.toFixed(1));
  console.log("Aluno em exame.");
  console.log("Nota do exame: " + N5.toFixed(1));
  mediaFinal = (N5 + media)/2;
  if (mediaFinal >= 5){
    console.log("Aluno aprovado.");
    console.log("Media final: " + mediaFinal.toFixed(1));
  } else {
    console.log("Aluno reprovado.");
  }
} 
