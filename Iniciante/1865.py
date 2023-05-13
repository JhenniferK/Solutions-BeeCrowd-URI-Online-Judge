ntestes = int(input())

for i in range(ntestes):
  nome, forca = map(str, input().split())

  if (nome == 'Thor'):
    print('Y')
  else:
    print('N')
