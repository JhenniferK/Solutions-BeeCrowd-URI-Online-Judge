import math

while True:
    try:
        n = int(input())
    except EOFError:
        break
    
    clones = int(math.log(n, 2))
    
    print(clones)
