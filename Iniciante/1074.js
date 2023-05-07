lines = lines.map((e) => Number(e));

let lim = lines.shift();

for (let i = 0; i < lim; i++) {
  if (lines[i] > 0 && lines[i]%2 == 0) {
    console.log("EVEN POSITIVE");
  } else if (lines[i] > 0 && lines[i]%2 != 0) {
    console.log("ODD POSITIVE");
  } else if (lines[i] == 0) {
    console.log("NULL");
  } else if (lines[i] < 0 && lines[i]%2 == 0) {
    console.log("EVEN NEGATIVE");
  } else if (lines[i] < 0 && lines[i]%2 != 0) {
    console.log("ODD NEGATIVE");
  }
}
