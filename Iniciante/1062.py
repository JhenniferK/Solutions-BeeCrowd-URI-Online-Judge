for _ in range(int(input())):
  entrada = int(input())
  ano = entrada - 2015

  if ano < 0:
    print("{} D.C.".format(-ano))
  elif ano == 0:
    print("1 A.C.")
  else:
    print("{} A.C.".format(ano+1))
