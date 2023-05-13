let ntestes = Number(lines.shift());

for (let i = 0; i < ntestes; i++) {
  let n = Number(lines.shift());

  if (n%2 == 0) {
    console.log(0);
  } else {
    console.log(1);
  }
}
