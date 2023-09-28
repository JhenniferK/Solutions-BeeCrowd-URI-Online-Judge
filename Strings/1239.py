while True:
  try:
    texto = input();
    novoTexto = "";
    contUnder = 0;
    contAst = 0;
    
    for i in range(len(texto)):
      if (texto[i] != "_" and texto[i] != "*"):
        novoTexto += texto[i];
      else:
        if (texto[i] == "_"):
          contUnder += 1;
          if (contUnder == 1):
            novoTexto += "<i>";
          else:
            novoTexto += "</i>";
            contUnder = 0;
        else:
          contAst += 1;
          if (contAst == 1):
            novoTexto += "<b>";
          else:
            novoTexto += "</b>";
            contAst = 0;
    print(novoTexto);
  except EOFError:
    break;

