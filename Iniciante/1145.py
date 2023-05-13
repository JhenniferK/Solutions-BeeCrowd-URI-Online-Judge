lines = list(map(int, input().split()))

x = lines.pop(0)
y = lines.pop(0)

cnt = 0

for i in range(1, y+1):
    cnt += 1
    if cnt == x:
        print(i)
        cnt = 0
    else:
        print(i, end=' ')
