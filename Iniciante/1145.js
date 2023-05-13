var lines = input.split(' ').map(Number); 

let x = lines.shift();
let y = lines.shift();

let cnt = 0;

for (let i = 1; i <= y; i++){
  cnt++;
  if (cnt == x) {
    console.log(i);
    cnt = 0;
  } else {
    process.stdout.write(i + " ");
  }
}
