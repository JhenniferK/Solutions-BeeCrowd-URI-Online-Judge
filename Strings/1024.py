n = int(input());

for i in range(n):
  texto = input();
  novotexto = "";

  for j in texto:
    if (j.isalpha()):
      novotexto += chr(ord(j) + 3);
    else:
      novotexto += j;

  texto = novotexto[::-1];
  metade = len(texto)//2;
  metade2 = "";

  for j in texto[metade:]:
    metade2 += chr(ord(j)-1);

  texto = texto[:metade] + metade2;
  print(texto);
