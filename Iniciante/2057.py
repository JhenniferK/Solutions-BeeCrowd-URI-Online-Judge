saida, tempo, fuso = map(int, input().split())

total = (saida + tempo + fuso)%24

print(total)
