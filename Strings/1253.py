n = int(input())

for _ in range(n):
    cifra = input().strip()
    deslocamento = int(input())
    
    decifrado = ""
    
    for letra in cifra:
        if letra.isalpha():
            nova_letra = chr(((ord(letra) - ord('A') - deslocamento)%26) + ord('A'))
            decifrado += nova_letra
        else:
            decifrado += letra

    print(decifrado)
