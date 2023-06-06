n = int(input())
num = input().split()

for i in range(n):
    num[i] = int(num[i])
    
print(num.index(min(num)) + 1)
