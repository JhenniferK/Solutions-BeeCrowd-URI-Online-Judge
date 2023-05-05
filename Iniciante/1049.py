A1 = str(input())
A2 = str(input())
A3 = str(input())

if A1 == 'vertebrado':
  if A2 == 'ave':
    if A3 == 'carnivoro':
      print('aguia')
    elif A3 == 'onivoro':
      print('pomba')
  elif A2 == 'mamifero':
    if A3 == 'onivoro':
      print('homem')
    elif A3 == 'herbivoro':
      print('vaca');
else:
  if A2 == 'inseto':
    if A3 == 'hematofago':
      print('pulga')
    elif A3 == 'herbivoro':
      print('lagarta')
  elif A2 == 'anelideo':
    if A3 == 'hematofago':
      print('sanguessuga')
    elif A3 == 'onivoro':
      print('minhoca')
