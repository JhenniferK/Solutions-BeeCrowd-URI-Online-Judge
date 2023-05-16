while True:
    try:
        senha = int(input())-1
    except EOFError:
        break
    
    print(senha)
