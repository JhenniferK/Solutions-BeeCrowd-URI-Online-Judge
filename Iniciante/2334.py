while True:
    P = int(input())
    
    if P == -1:
        break
    else:
        if P > 0 and P <= 10**19:
            print("{}".format(P-1))
        else:
            print("0")
