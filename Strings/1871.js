for (let i = 0; i < lines.length; i++) {
  let [m, n] = lines[i].split(' ');
  m = m.replace(/0/g, '');
  n = n.replace(/0/g, '');

  if (m == '' || n == '') {
    break;
  } else {
    let soma = Number(m) + Number(n);
    let res = soma.toString().replace(/0/g, '');
  
    if (res === '') {
      console.log('0');
    } else {
      console.log(res);
    }
  }
}
