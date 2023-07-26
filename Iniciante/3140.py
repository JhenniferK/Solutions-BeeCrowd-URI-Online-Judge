tag = False

while True:
    try:
        entrada = input()
        if "<body>" in entrada:
            tag = True
        if "</body>" in entrada:
            tag = False
        if tag == True and "<body>" not in entrada:
            print(entrada)
    except EOFError:
        break
