while True:
  try:
    n = int(input())
    votos = list(map(int, input().split()))
    total = 0
    
    for i in votos:
      if i == 1:
        total += 1

    if total >= (n/3)*2:
      print("impeachment")
    else:
      print("acusacao arquivada")
  except EOFError:
    break
