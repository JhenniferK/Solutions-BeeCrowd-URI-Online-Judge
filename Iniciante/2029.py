while True:
  try:
    volume = float(input())
    diametro = float(input())

    pi = 3.14
    raio = diametro/2
    altura = volume/(pi*(raio**2))
    area = pi*raio**2

    print('ALTURA = {:.2f}'.format(altura))
    print('AREA = {:.2f}'.format(area))

  except EOFError:
    break
