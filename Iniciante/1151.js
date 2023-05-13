let n = lines.shift();

let arr = [0, 1];

for (let i = 2; i < n; i++) {
  arr.push(arr[i-1] + arr[i-2]);
}

for (let i = 0; i < n; i++) {
  if (i === (n - 1)) {
    console.log(arr[i]);
  } else {
    process.stdout.write(arr[i]+ " ");
  }
}
