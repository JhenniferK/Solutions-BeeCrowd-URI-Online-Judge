let line1 = lines.shift().split(' ');

let c = Number(line1.shift());
let q = Number(line1.shift());

if (c>=1 && c <=5){
  if(c==1){
    v=q*4;
    console.log("Total: R$ " + v.toFixed(2));
  } else if(c==2){
    v=q*4.50;
    console.log("Total: R$ " + v.toFixed(2));
  } else if(c==3){
    v=q*5;
    console.log("Total: R$ " + v.toFixed(2));
  } else if(c==4){
    v=q*2;
    console.log("Total: R$ " + v.toFixed(2));
  } else if(c==5){
    v=q*1.50;
    console.log("Total: R$ " + v.toFixed(2));
  }
}
