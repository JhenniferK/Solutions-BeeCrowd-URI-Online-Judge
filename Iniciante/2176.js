let s = lines.shift();
let cont1 = 0;

for (let i = 0; i < s.length; i++) {
  if (s[i] == '1') {
    cont1++;
  }
}

if (cont1%2 == 0) {
  console.log(s + '0');
} else {
  console.log(s + '1');
}
