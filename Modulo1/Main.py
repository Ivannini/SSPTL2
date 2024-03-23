from PyQt5.QtWidgets import QApplication, QMainWindow, QTextEdit, QTableWidget, QTableWidgetItem, QVBoxLayout, QHBoxLayout, QPushButton, QWidget
import sys

class Token:
    def __init__(self, type, value, _id=None):
        self.type = type
        self.value = value
        self._id = _id

    def return_token(self):
        return (self.type, self.value, self._id)

def es_entero(input):
    if input[0].isdigit():
        for char in input[1:]:
            if not char.isdigit():
                return False
        return True
    return False

def es_real(input):
    if not input[0].isdigit():
        return False
    elif input[0].isdigit:
        pos=1
        for char in input[1:]:
            if not (char.isdigit() or char == '.'):
                return False
            elif char == '.':
                if '.' in input[pos+1:]:
                    return False
            pos += 1
        if input[-1] == '.':
            return False
        return True

def es_cadena(input):
    if input[0] == '"' and input[-1] == '"':
        return True
    return False

class Tokenizer():
    def __init__(self, input):
        self.input = input
        self.tokens_tuples = []
        self.tokens_objects = []
        self.reserved_words = ['int', 'float', 'void' 'if', 'while', 'return', 'else']
        self.operators = ['+', '-', '*', '/', '=', '<', '>', '<=', '>=', '!=', '==', '&&', '||', '!', '&', '|']
        self.delimiters = [' ', '\n', '(', ')', '{', '}', ';', ',']
        self.simbolos_permitidos = self.operators + self.delimiters + ['.', '$', '"', "'"]

    def add_token(self, token_type, token_value, token_id=None):
        self.tokens_objects.append(Token(token_type, token_value, token_id))

    def obtener_tokens(self):
        pos = 0

        current_token = ""

        while pos < len(self.input):

            char = self.input[pos]

            if char in self.delimiters:

                if current_token:
                    # Aquí es donde determinaríamos si es un tipo de dato, un identificador o un número
                    if current_token in self.reserved_words:
                        self.tokens_tuples.append(('RESERVED_WORD', current_token))
                    elif es_entero(current_token):
                        self.tokens_tuples.append(('INTEGER', current_token))
                    elif es_real(current_token):
                        self.tokens_tuples.append(('FLOAT', current_token))
                    else:
                        self.tokens_tuples.append(('IDENTIFIER', current_token))
                    current_token = ""

                if char.strip():
                    self.tokens_tuples.append(('DELIMITER', char))
            elif char in self.operators:

                if current_token:
                    if es_entero(current_token):
                        self.tokens_tuples.append(('INTEGER', current_token))
                    elif es_real(current_token):
                        self.tokens_tuples.append(('FLOAT', current_token))
                    else:
                        self.tokens_tuples.append(('IDENTIFIER', current_token))
                    current_token = ""

                if char + self.input[pos + 1] in self.operators:
                    self.tokens_tuples.append(('OPERATOR', char + self.input[pos + 1]))
                    pos += 1
                else:
                    self.tokens_tuples.append(('OPERATOR', char))
            else:
                current_token += char
            pos += 1

        # Mostrar los tokens encontrados
        for token in self.tokens_tuples:
            if (not token[1][0].isalnum()) and (token[1][0] not in self.simbolos_permitidos):
                self.add_token('ERROR', token[1], -1)
            if token[0] == 'RESERVED_WORD':
                if token[1] in ['int', 'float', 'void']:
                    self.add_token('DATA_TYPE', token[1], 4)
                elif token[1] == 'if':
                    self.add_token('IF', token[1], 19)
                elif token[1] == 'while':
                    self.add_token('WHILE', token[1], 20)
                elif token[1] == 'return':
                    self.add_token('RETURN', token[1], 21)
                elif token[1] == 'else':
                    self.add_token('ELSE', token[1], 22)
            elif token[0] == 'OPERATOR':
                if token[1] in ['+', '-']:
                    self.add_token('OP_SUMA', token[1], 5)
                elif token[1] in ['*', '/']:
                    self.add_token('OP_MUL', token[1], 6)
                elif token[1] in ['<', '>', '<=', '>=']:
                    self.add_token('OP_RELAC', token[1], 7)
                elif token[1] == '||':
                    self.add_token('OP_OR', token[1], 8)
                elif token[1] == '&&':
                    self.add_token('OP_AND', token[1], 9)
                elif token[1] == '!':
                    self.add_token('OP_NOT', token[1], 10)
                elif token[1] in ['!=', '==']:
                    self.add_token('OP_IGUALDAD', token[1], 11)
                elif token[1] == '=':
                    self.add_token('IGUAL', token[1], 18)
            elif token[0] == 'DELIMITER':
                if token[1] == ';':
                    self.add_token('PUNTO_COMA', token[1], 12)
                elif token[1] == ',':
                    self.add_token('COMA', token[1], 13)
                elif token[1] == '(':
                    self.add_token('PARENTESIS_A', token[1], 14)
                elif token[1] == ')':
                    self.add_token('PARENTESIS_C', token[1], 15)
                elif token[1] == '{':
                    self.add_token('LLAVE_A', token[1], 16)
                elif token[1] == '}':
                    self.add_token('LLAVE_C', token[1], 17)
            elif token[0] == 'IDENTIFIER':
                if es_cadena(token[1]):
                    self.add_token('STRING', token[1], 3)
                elif token[1] == '$':
                    self.add_token('FIN', token[1], 23)
                else:
                    self.add_token('IDENTIFIER', token[1], 0)
            elif token[0] == 'INTEGER':
                self.add_token('INTEGER', token[1], 1)
            elif token[0] == 'FLOAT':
                self.add_token('FLOAT', token[1], 2)
    
    def return_tokens(self):
        return [token.return_token() for token in self.tokens_objects]

#Definimos la interfaz grafica   
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle("Analizador Léxico")
        self.setGeometry(100, 100, 800, 600)

        # Layouts
        layout = QHBoxLayout()
        leftLayout = QVBoxLayout()
        rightLayout = QVBoxLayout()

        # Componentes
        self.textEdit = QTextEdit()
        self.analyzeButton = QPushButton("Analizar")
        self.analyzeButton.clicked.connect(self.analyzeText) # Conectar el evento click del botón con el método analyzeText

        self.tokensTable = QTableWidget()
        self.tokensTable.setColumnCount(3)
        self.tokensTable.setHorizontalHeaderLabels([" ", "Valor", "Tipo"])

        # Añadir componentes a los layouts
        leftLayout.addWidget(self.textEdit)
        leftLayout.addWidget(self.analyzeButton)

        rightLayout.addWidget(self.tokensTable)

        layout.addLayout(leftLayout)
        layout.addLayout(rightLayout)

        # Contenedor central
        centralWidget = QWidget()
        centralWidget.setLayout(layout)
        self.setCentralWidget(centralWidget)

    def analyzeText(self):
        """
        Analiza el texto ingresado en el widget de texto y muestra los tokens en una tabla.
        """
        text = self.textEdit.toPlainText() # Obtenemos el texto del widget de texto
        analizador = Tokenizer(text)
        analizador.obtener_tokens()
        tokens =  analizador.return_tokens()

        self.tokensTable.setRowCount(len(tokens))

        # Mostramos los tokens en la tabla
        for i, token in enumerate(tokens):
            tipo = QTableWidgetItem(token[0])
            valor = QTableWidgetItem(token[1])
            _id = QTableWidgetItem(str(token[2]))

            self.tokensTable.setItem(i, 0, tipo)
            self.tokensTable.setItem(i, 1, valor)
            self.tokensTable.setItem(i, 2, _id)

#Ejecutamos la interfaz grafica
if __name__ == '__main__':
    app = QApplication(sys.argv)
    mainWin = MainWindow()
    mainWin.show()
    sys.exit(app.exec_())
