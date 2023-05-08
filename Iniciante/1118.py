def calcularMedia():
  avs = []

  while (len(avs) < 2):
    nota = float(input())
    if (nota >= 0 and nota <= 10):
      avs.append(nota)
    else:
      print("nota invalida")
  
  a1 = avs[0]
  a2 = avs[1]

  mediaSemestral = (a1+a2)/2
  print("media = {:.2f}".format(mediaSemestral))
  c = float(input())
  print("novo calculo (1-sim 2-nao)")

  while (c != 1 and c != 2):
    c = float(input())
    print("novo calculo (1-sim 2-nao)")
  
  if (c == 1): 
    calcularMedia()
  elif (c == 2): 
    return

calcularMedia()
