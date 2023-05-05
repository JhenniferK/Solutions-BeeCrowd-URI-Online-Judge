let line1 = lines.shift().split(' ');

let A = Number(line1.shift());
let B = Number(line1.shift());
let C = Number(line1.shift());

if ((A>Math.abs(B-C) && A<(B+C)) || (B>Math.abs(A-C) && B<(A+C)) || (C>Math.abs(A-B) && C<(A-B))) {
  p = A+B+C;
  console.log("Perimetro = " + p.toFixed(1));
} else {
  area = ((A+B)*C)/2;
  console.log("Area = " + area.toFixed(1));
}
