let car1 = lines.shift().split(' ').map(Number);
let car2 = lines.shift().split(' ').map(Number);

if (car1[1]/car1[2] < car2[1]/car2[2]) {
  console.log(car1[0]);
} else {
  console.log(car2[0]);
}
