lines = lines.map((e) => Number(e));

let m;

do {
  for (m = 0; m < lines.length; m++) {
    if (lines[m] === 2002) {
      console.log("Acesso Permitido");
      break;
    } else {
      console.log("Senha Invalida");
    }
  }
} while (lines[m] != 2002);
