p, n = map(int, input().split())
canos = list(map(int, input().split()))

for i in range(1, n):
    if abs(canos[i] - canos[i-1]) > p:
        print("GAME OVER")
        break
else:
    print("YOU WIN")
