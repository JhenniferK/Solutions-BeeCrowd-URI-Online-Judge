entrada = input();
frase = '';
i = 1;

while i < len(entrada):
    frase += entrada[i];
    if i + 1 < len(entrada) and entrada[i + 1] != ' ':
        i += 1;
    i += 1;

print(frase);
