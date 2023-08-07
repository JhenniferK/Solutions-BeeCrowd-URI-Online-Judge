let [X, Y] = lines.shift().split(' ').map(Number);

if (X >= 0 && X <= 432 && Y >= 0 && Y <= 468) {
  console.log('dentro');
} else {
  console.log('fora');
}
