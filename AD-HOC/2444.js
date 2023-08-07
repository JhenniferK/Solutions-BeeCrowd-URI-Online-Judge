let [V, T] = lines.shift().split(' ').map(Number);
let volumes = lines.shift().split(' ').map(Number);

let final = V;

for (let i = 0; i < T; i++) {
  final += volumes[i];

  if (final > 100) {
    final = 100;
  } else if (final < 0) {
    final = 0;
  }
}

console.log(final);
