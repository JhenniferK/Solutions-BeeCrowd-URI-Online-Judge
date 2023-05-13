let [a, b, c] = lines.shift().split(' ').map(Number);
let humor;

if (a > b && b <= c) {
  humor = ':)';
} else if (a < b && b >= c) {
  humor = ':(';
} else if (a < b && b < c) {
  if ((c-b) < (b-a)) {
    humor = ':(';
  } else if ((c-b) == (b-a)) {
    humor = ':)';
  } else {
    humor = ':)';
  }
} else if (a > b && b > c) {
  if ((b-c) < (a-b)) {
    humor = ':)';
  } else if ((b-c) == (a-b)) {
    humor = ':(';
  } else {
    humor = ':(';
  }
} else if (a == b) {
  if (c > b) {
    humor = ':)';
  } else {
    humor = ':('
  }
}

console.log(humor);
