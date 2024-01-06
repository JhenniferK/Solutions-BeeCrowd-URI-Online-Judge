let [saida, tempo, fuso] = lines.shift().split(' ').map(Number);

let total = (saida + tempo + fuso)%24

if (total < 0) {
  total += 24;
}

console.log(total)
