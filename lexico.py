class TipoCadena:
    def __init__(self):
        self.ERROR = -1
        self.IDENTIFICADOR = 0
        self.ENTERO = 1
        self.REAL = 2
        self.CADENA = 3
        self.TIPO = 4
        self.OPSUMA = 5
        self.OPRESTA = 6
        self.OPMULTIPLICACION = 7
        self.OPDIVISION = 8
        self.PESO = 9
        self.INT = 12
        self.FLOAT = 13
        
class AnalizadorLexico(TipoCadena):
    def __init__(self, cadena, indice = 0, continua = True, caracter = "", estado = 1, simbolo = "", tipo = -1, tipoCadenaMensaje = ""): 
        self.cadena = cadena

        self.indice = indice
        self.continua = continua
        self.caracter = caracter
        self.estado = estado

        self.simbolo = simbolo
        self.tipo = tipo

        self.tipoCadenaMensaje = tipoCadenaMensaje

        TipoCadena.__init__(self)

    def tipoCadena(self, tipo):
        self.tipoCadenaMensaje = ""

        switch = {
            self.ERROR: self.m_ERROR,
            self.IDENTIFICADOR: self.m_IDENTIFICADOR,
            self.ENTERO: self.m_ENTERO,
            self.REAL: self.m_REAL,
            self.CADENA: self.m_CADENA,
            self.OPSUMA: self.m_OPMAS,
            self.OPRESTA: self.m_OPMENOS,
            self.OPMULTIPLICACION: self.m_OPMULTI,
            self.OPDIVISION: self.m_OPDIV,
            self.INT: self.m_INT,
            self.FLOAT: self.m_FLOAT,
            self.PESO: self.m_PESO
        }

        switch[tipo]()

        return self.tipoCadenaMensaje

        

    def siguienteSimbolo(self):
        self.estado = 1
        self.continua = True
        self.simbolo = ""
        self.tipo = -1

        while self.continua:
            self.caracter = self.siguienteCaracter()

            switch = {
                0: self.estado00,
                1: self.estado01,
                2: self.estado02,
                3: self.estado03,
                4: self.estado04,
                5: self.estado05,
                6: self.estado06,
                7: self.estado07,
                8: self.estado08,
                9: self.estado09,
                10: self.estado10,
                11: self.estado11,
                
            }

            switch.get(self.estado, self.error)()

        if self.tipo < 11:

            switch = {
                -1: self.error, # ERROR
                2: self.tipo00, # Identificador
                3: self.tipo01, # Entero
                5: self.tipo02, # Real
                7: self.tipo03, # Cadena
                8: self.tipo05, # Suma
                9: self.tipo06, # Resta
                10: self.tipo07, # Multiplicacion
                11: self.tipo08, # Division
                12: self.tipo09 # Peso
            }

            switch.get(self.estado, self.error)()

    def verificarPalabraReservada(self, simbolo):
        palabrasReservadas = {
            "int": self.INT,
            "float": self.FLOAT
        }
        self.tipo = palabrasReservadas.get(simbolo, self.tipo)

    def siguienteCaracter(self):
        if self.terminado():
            return "$"
        caracter = self.cadena[self.indice]
        self.indice += 1
        return caracter

    def siguienteEstado(self, estado):      
        self.estado = estado
        self.simbolo += self.caracter

        
    def retroceso(self):
        if not self.esPeso(self.caracter):
            self.indice -= 1
        self.continua = False
        self.verificarPalabraReservada(self.simbolo)

    def terminado(self):
        return self.indice >= len(self.cadena)

    def esPeso(self, caracter):
        return caracter == "$"

    def esEspacio(self, caracter):
        return caracter == " "

    def esCaracter(self, caracter):
        return ord(caracter) == 32 or ord(caracter) == 33 or ord(caracter) >= 35 and ord(caracter) <= 126

    def esLetra(self, caracter):
        return caracter.isalpha() or caracter == "_"

    def esNumero(self, caracter):
        return caracter.isdigit()

    def esPunto(self, caracter):
        return caracter == "."
    
    def esComilla(self, caracter):
        return caracter == "\""
        
    def esSuma(self, caracter):
        return caracter == "+"

    def esResta(self, caracter):
        return caracter == "-"

    def esMultiplicacion(self, caracter):
        return caracter == "*"

    def esDivision(self, caracter):
        return caracter == "/"
   
    # Definimos todos los estados

    def estado00(self):
        self.continua = False

    def estado01(self):
        if self.esPeso(self.caracter):
            self.siguienteEstado(0)
        elif self.esLetra(self.caracter):
            self.siguienteEstado(2)
        elif self.esNumero(self.caracter):
            self.siguienteEstado(3)
        elif self.esSuma(self.caracter):
            self.siguienteEstado(8)
        elif self.esResta(self.caracter):
            self.siguienteEstado(9)
        elif self.esMultiplicacion(self.caracter):
            self.siguienteEstado(10)
        elif self.esDivision(self.caracter):
            self.siguienteEstado(11)
        elif self.esEspacio(self.caracter):
            self.estado = 1
        else:
            self.simbolo += self.caracter
            self.continua = False

    def estado02(self):
        if self.esLetra(self.caracter):
            self.siguienteEstado(2)
        elif self.esNumero(self.caracter):
            self.siguienteEstado(2)
        elif self.esEspacio(self.caracter):
            self.continua = False
            self.verificarPalabraReservada(self.simbolo)
        else:
            self.retroceso()

    def estado03(self):
        if self.esNumero(self.caracter):
            self.siguienteEstado(3)
        elif self.esPunto(self.caracter):
            self.tipo = -1
            self.siguienteEstado(4)
        elif self.esEspacio(self.caracter):
            self.continua = False
        else:
            self.retroceso()

    def estado04(self):
        if self.esNumero(self.caracter):
            self.siguienteEstado(5)
        else:
            self.retroceso()

    def estado05(self):
        if self.esNumero(self.caracter):
            self.siguienteEstado(5)
        elif self.esEspacio(self.caracter):
            self.continua = False
        else:
            self.retroceso()

    def estado06(self):
        if self.esComilla(self.caracter):
            self.siguienteEstado(7)
        elif self.esCaracter(self.caracter):
            self.siguienteEstado(6)
        else:
            self.retroceso()
    
    def estado07(self):
        self.retroceso()

    def estado08(self):
        self.retroceso()

    def estado09(self):
        self.retroceso()

    def estado10(self):
        self.retroceso()

    def estado11(self):
        self.retroceso()
    # Definimos todos los tipos validos

    def error(self):
        self.tipo = self.ERROR

    def tipo00(self):
        self.tipo = self.IDENTIFICADOR

    def tipo01(self):
        self.tipo = self.ENTERO
    
    def tipo02(self):
        self.tipo = self.REAL
    
    def tipo03(self):
        self.tipo = self.CADENA

    def tipo04(self):
        self.tipo = self.TIPO

    def tipo05(self):
        self.tipo = self.OPSUMA

    def tipo06(self):
        self.tipo = self.OPRESTA

    def tipo07(self):
        self.tipo = self.OPMULTIPLICACION

    def tipo08(self):
        self.tipo = self.OPDIVISION

    def tipo09(self):
        self.tipo = self.PESO

    
    # Definimos los mensajes de tipos
    
    def m_PESO(self):
        self.tipoCadenaMensaje = "Fin de Cadena"

    def m_ERROR(self):
        self.tipoCadenaMensaje = "No esta definido"
    
    def m_IDENTIFICADOR(self):
        self.tipoCadenaMensaje = "Identificador"

    def m_ENTERO(self):
        self.tipoCadenaMensaje = "Entero"

    def m_REAL(self):
        self.tipoCadenaMensaje = "Real"

    def m_CADENA(self):
        self.tipoCadenaMensaje = "Cadena"

    def m_OPMAS(self):
        self.tipoCadenaMensaje = "Mas"

    def m_OPMENOS(self):
        self.tipoCadenaMensaje = "Menos"

    def m_OPMULTI(self):
        self.tipoCadenaMensaje = "Multiplicacion"

    def m_OPDIV(self):
        self.tipoCadenaMensaje = "Division"

    def m_INT(self):
        self.tipoCadenaMensaje = "Int"

    def m_FLOAT(self):
        self.tipoCadenaMensaje = "Float"
