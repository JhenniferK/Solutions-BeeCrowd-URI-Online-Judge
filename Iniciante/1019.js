let n = Number(lines.shift());

if (n>=3600){
  s = n%60;
  m = (parseInt(n/60))%60;
  h = parseInt(parseInt(n/60)/60)
  console.log(h + ":" + m + ":" + s);
} else {
  s = n%60;
  m = parseInt(n/60);
  h = 0;
  console.log(h + ":" + m + ":" + s);
}
