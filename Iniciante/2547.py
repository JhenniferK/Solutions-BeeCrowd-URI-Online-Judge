while True:
  try:
    entrada = input().split()

    nvis = int(entrada[0])
    amin = int(entrada[1])
    amax = int(entrada[2])
    cont = 0

    for i in range(nvis):
      vis = int(input())

      if vis >= amin and vis <= amax:
        cont += 1

    print(cont)

  except EOFError:
    break
