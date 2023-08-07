entrada = list(map(int, input().split()))

vC = entrada[0]
eC = entrada[1]
sC = entrada[2]
vF = entrada[3]
eF = entrada[4]
sF = entrada[5]

ptcC = vC*3 + eC
ptcF = vF*3 + eF

if (ptcC > ptcF):
  print('C')
elif (ptcF > ptcC):
  print('F')
elif (ptcC == ptcF):
  if (sC > sF):
    print('C')
  elif (sF > sC):
    print('F')
  else:
    print('=')
