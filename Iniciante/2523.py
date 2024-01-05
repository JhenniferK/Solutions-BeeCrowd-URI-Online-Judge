while True:
  try:
    alfab = input()
    n = int(input())
    lamp = list(map(int, input().split()))
    mensagem = ""

    for i in lamp:
      mensagem += alfab[i-1]

    print(mensagem)
  except EOFError:
    break
