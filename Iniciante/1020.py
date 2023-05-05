entrada = int(input())

if entrada > 365:
  anos = entrada//365
  meses = (entrada%365)//30
  dias = (entrada%365)%30
  print("{} ano(s)\n{} mes(es)\n{} dia(s)".format(anos, meses, dias))
elif entrada%365 == 0:
  anos = entrada//365
  print("{} ano(s)\n0 mes(es)\n0 dia(s)".format(anos))
else:
  meses = entrada//30
  dias = entrada%30
  print("0 ano(s)\n{} mes(es)\n{} dia(s)".format(meses, dias))
