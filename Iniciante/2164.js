let n = lines.shift();
let fib = (((1+Math.sqrt(5))/2)**n - ((1-Math.sqrt(5))/2)**n)/Math.sqrt(5);

console.log(fib.toFixed(1))
