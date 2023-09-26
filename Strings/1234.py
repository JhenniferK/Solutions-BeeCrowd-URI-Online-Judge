while True:
  try:
    texto = input();
    novoTexto = "";

    i = 0;
    for char in texto:
      if (char.isalpha()):
        if (i%2 != 0):
          letra = char.lower();
        else:
          letra = char.upper();
        i += 1;
      else:
        letra = char;
      novoTexto += letra;

    print(novoTexto);
  except EOFError:
    break;
