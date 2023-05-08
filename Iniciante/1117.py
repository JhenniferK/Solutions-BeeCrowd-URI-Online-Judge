contador = 0
somador = 0

while True:
  nota = float(input())

  if nota >= 0 and nota <= 10:
    contador += 1
    somador += nota

    if contador == 2:
      print("media = {:.2f}".format(somador/contador))
      break

  else:
    print("nota invalida")
