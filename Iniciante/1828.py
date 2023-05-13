nTestes = int(input())

for i in range(1, nTestes+1):
  r, s = map(str, input().split())
  
  if (r == s):
    print("Caso #{}: De novo!".format(i))
  elif (r == 'tesoura' and s == 'papel' or r == 'tesoura' and s == 'lagarto'):
    print("Caso #{}: Bazinga!".format(i))
  elif (r == 'papel' and s == 'pedra' or r == 'papel' and s == 'Spock'):
    print("Caso #{}: Bazinga!".format(i))
  elif (r == 'pedra' and s == 'lagarto' or r == 'pedra' and s == 'tesoura'):
    print("Caso #{}: Bazinga!".format(i))
  elif (r == 'Spock' and s == 'tesoura' or r == 'Spock' and s == 'pedra'):
    print("Caso #{}: Bazinga!".format(i))
  elif (r == 'lagarto' and s == 'Spock' or r == 'lagarto' and s == 'papel'):
    print("Caso #{}: Bazinga!".format(i))
  else:
    print("Caso #{}: Raj trapaceou!".format(i))
