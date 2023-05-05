let line1 = lines.shift().split(' ');
let original = [...line1];
let ordem = line1.sort((a, b) => a - b);

console.log(`${ordem[0]}\n${ordem[1]}\n${ordem[2]}`);
console.log('');
console.log(`${original[0]}\n${original[1]}\n${original[2]}`);
