entrada = list(map(float, input().split()))

litA = entrada[0]
litG = entrada[1]
rendA = entrada[2]
rendG = entrada[3]

if (rendA/litA > rendG/litG):
  print('A')
elif (rendA/litA < rendG/litG):
  print('G')
else:
  print('G')
