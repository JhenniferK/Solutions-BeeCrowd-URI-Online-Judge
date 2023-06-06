while True:
  try:
    entrada = int(input())

    if entrada >= 0 and entrada < 90 or entrada == 360:
      print('Bom Dia!!')
    elif entrada >= 90 and entrada < 180:
      print('Boa Tarde!!')
    elif entrada >= 180 and entrada < 270:
      print('Boa Noite!!')
    elif entrada >= 270 and entrada < 360:
      print('De Madrugada!!')

  except EOFError:
    break
