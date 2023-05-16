testes = int(input())

for i in range(testes):
  h, m, o = map(int, input().split())

  hora = str(h).zfill(2)
  minuto = str(m).zfill(2)
  
  if o == 0:
    print("{}:{} - A porta fechou!".format(hora, minuto))
  else:
    print("{}:{} - A porta abriu!".format(hora, minuto))
