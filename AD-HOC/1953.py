while True:
    try:
        n = int(input())

        epr = 0
        ehd = 0
        intrusos = 0

        for i in range(n):
            entrada = input().split()
            mat = entrada[0]
            cur = entrada[1]

            if cur == "EPR":
                epr += 1
            elif cur == "EHD":
                ehd += 1
            else:
                intrusos += 1
        
        print("EPR: {}\nEHD: {}\nINTRUSOS: {}".format(epr, ehd, intrusos))
    except EOFError:
        break
