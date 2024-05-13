def lexer(cadena):
    i = 0
    while i < len(cadena):
        if cadena[i:i+2] == 'if':
            token = cadena[i:i+2]
            print( token + '| Palabra Reservada | Tipo 19')
            i += 2
        elif cadena[i:i+5] == 'while':
            token = cadena[i:i+5]
            print( token + '| Palabra Reservada | Tipo 20')
            i += 5
        elif cadena[i:i+6] == 'return':
            token = cadena[i:i+6]
            print( token + '| Palabra Reservada | Tipo 21')
            i += 6
        elif cadena[i:i+4] == 'else':
            token = cadena[i:i+4]
            print( token + '| Palabra Reservada | Tipo 22')
            i += 4
        
        elif cadena[i:i+3] == 'int':
            token = cadena[i:i+3]
            print( token + '| TipoDato | Tipo 4')
            i += 3
        elif cadena[i:i+5] == 'float':
            token = cadena[i:i+5]
            print( token + '| TipoDato | Tipo 4')
            i += 5
        elif cadena[i:i+4] == 'void':
            token = cadena[i:i+4]
            print( token + '| TipoDato | Tipo 4')
            i += 4
        

        #########################


        elif cadena[i].isalpha():
            
            j = i + 1
            while j < len(cadena) and (cadena[j].isalpha() or cadena[j].isdigit()):
                j += 1
            token = cadena[i:j]
            print( token + '| Identificador | Tipo 0')
            i = j

        elif cadena[i].isdigit():
            j = i + 1
            while j < len(cadena) and (cadena[j].isdigit() or cadena[j] == '.'):
                j += 1
            token = cadena[i:j]
            if '.' in token:
                print( token + ' | Numero Real | Tipo 2')
            else:
                print( token + ' | Entero | Tipo 1')
            i = j

        elif cadena[i] == '+' or cadena[i] == '-':
            token = cadena[i]
            print( token + ' | Operador de Adición | Tipo 5')
            i += 1

        elif cadena[i] == '*' or cadena[i] == '/':
            token = cadena[i]
            print( token + ' | Operador de Multiplicacion | Tipo 6')
            i += 1

        

        elif cadena[i] == '<' or cadena[i] == '>' or cadena[i] == '<=' or cadena[i] == '>=':
            token = cadena[i:i+2] if cadena[i:i+2] in ('<=', '>=') else cadena[i]  
            print( token + ' | Operador Relacional | Tipo 7')
            i += 2

        elif cadena[i:i+2] == '!=' or cadena[i:i+2] == '==':
            token = cadena[i:i+2] if cadena[i:i+2] in ('!=', '==') else cadena[i] 
            print( token + ' | Operador de Igualdad | Tipo 11')
            i += 2

        elif cadena[i] == '=':
            token = cadena[i]
            print( token + ' | Operador de Asignacion | Tipo 18')
            i += 1

        elif cadena[i:i+2] == '&&':
            token = cadena[i:i+2]
            print( token + ' | Operador AND | Tipo 9')
            i += 2

        elif cadena[i:i+2] == '||':
            token = cadena[i:i+2]
            print( token + ' | Operador OR | Tipo 8')
            i += 2

        elif cadena[i] == '!':
            token = cadena[i]
            print( token + ' | Operador NOT | Tipo 10')
            i += 1

        elif cadena[i] == '(':
            token = cadena[i]
            print( token + ' | Parentesis ( | Tipo 14')
            i += 1
        elif cadena[i] == ')':
            token = cadena[i]
            print( token + ' | Parentesis ) | Tipo 15')
            i += 1

        
        elif cadena[i] == '{':
            token = cadena[i]
            print( token + ' | LlaveIzq { | Tipo 16')
            i += 1
        elif cadena[i] == '}':
            token = cadena[i]
            print( token + ' | LlaveDer } | Tipo 17')
            i += 1

        elif cadena[i] == ';':
            token = cadena[i]
            print( token + ' | Punto&Coma (;) | Tipo 12')
            i += 1

        elif cadena[i] == ',':
            token = cadena[i]
            print( token + ' | Coma (,) | Tipo 13')
            i += 1

        elif cadena[i] == '$':
            token = cadena[i]
            print( token + ' | Fin | Tipo 23')
            i += 1

        

        else:
            i += 1

def main():
    while True:
        cadena = input("Ingresa los datos a analizar: ")
        lexer(cadena)
        print("1. Analizar otra cadena")
        print("0. Salir")
        opc = input("¿Desea analizar otra cadena? ")
        if opc != "1":
            break

if __name__ == "__main__":
    main()
