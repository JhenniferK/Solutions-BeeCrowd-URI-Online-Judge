import math

while True:
    try:
        n, l, c = input().split()
        l = int(l)
        c = int(c)
        texto = input().split()
        
        linha = ""
        linhas = 1
        for palavra in texto:
            if linha == "":
                linha = palavra
            else:
                if len(linha + " " + palavra) > c:
                    linhas += 1
                    linha = palavra
                else:
                    linha += " " + palavra
                    
        resultado = math.ceil(linhas/l)
        
        print(resultado)
    except EOFError:
        break
