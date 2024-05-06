#include <iostream>
#include <string>
#include <vector>

using namespace std;

// Clase ElementoTabla
class ElementoTabla {
public:
    string simbolo;
    string tipo;
    string ambito;
};

// Clase TablaSimbolos
class TablaSimbolos {
public:
    vector<ElementoTabla*> elementos;
    vector<string> errores;

    void muestra() {
        cout << "Tabla de Símbolos:" << endl;
        for (const auto& elem : elementos) {
            cout << "Símbolo: " << elem->simbolo << ", Tipo: " << elem->tipo << ", Ámbito: " << elem->ambito << endl;
        }
    }

    void agrega(ElementoTabla *elemento) {
        elementos.push_back(elemento);
    }

    bool varGlobalDefinida(string simbolo) {
        for (const auto& elem : elementos) {
            if (elem->simbolo == simbolo && elem->ambito == "global") {
                return true;
            }
        }
        return false;
    }

    bool funcionDefinida(string simbolo) {
        for (const auto& elem : elementos) {
            if (elem->simbolo == simbolo && elem->tipo == "funcion") {
                return true;
            }
        }
        return false;
    }

    bool varLocalDefinida(string variable, string funcion) {
        for (const auto& elem : elementos) {
            if (elem->simbolo == variable && elem->ambito == funcion) {
                return true;
            }
        }
        return false;
    }

    void buscaIdentificador(string simbolo) {
        for (const auto& elem : elementos) {
            if (elem->simbolo == simbolo) {
                cout << "Símbolo encontrado: " << elem->simbolo << ", Tipo: " << elem->tipo << ", Ámbito: " << elem->ambito << endl;
                return;
            }
        }
        cout << "Símbolo no encontrado: " << simbolo << endl;
    }

    void buscaFuncion(string simbolo) {
        for (const auto& elem : elementos) {
            if (elem->simbolo == simbolo && elem->tipo == "funcion") {
                cout << "Función encontrada: " << elem->simbolo << ", Tipo: " << elem->tipo << ", Ámbito: " << elem->ambito << endl;
                return;
            }
        }
        cout << "Función no encontrada: " << simbolo << endl;
    }

    // Implementación del resto de los métodos de búsqueda y validación según sea necesario

    // Método para verificar si una variable local está definida en una función
    bool varLocalDefinidaEnFuncion(string variable, string funcion) {
        for (const auto& elem : elementos) {
            if (elem->simbolo == variable && elem->ambito == funcion && elem->tipo != "funcion") {
                return true;
            }
        }
        return false;
    }

    // Método para agregar una definición de variable a la tabla de símbolos
    void agregaDefinicionVariable(string simbolo, string tipo, string ambito) {
        ElementoTabla *elemento = new ElementoTabla();
        elemento->simbolo = simbolo;
        elemento->tipo = tipo;
        elemento->ambito = ambito;
        agrega(elemento);
    }

    // Método para agregar una definición de función a la tabla de símbolos
    void agregaDefinicionFuncion(string simbolo, string ambito) {
        ElementoTabla *elemento = new ElementoTabla();
        elemento->simbolo = simbolo;
        elemento->tipo = "funcion";
        elemento->ambito = ambito;
        agrega(elemento);
    }

    // Método para manejar la redefinición de símbolos
    void manejaRedefinicion(string simbolo, string ambito) {
        if (varLocalDefinida(simbolo, ambito) || varGlobalDefinida(simbolo) || funcionDefinida(simbolo)) {
            errores.push_back("Error: Redefinición de símbolo '" + simbolo + "' en el ámbito '" + ambito + "'");
        }
    }
};

// Clase Nodo
class Nodo {
public:
    static TablaSimbolos *tablaSimbolos;
    static string ambito;

    virtual void validaTipos() {
        // Implementación por cada tipo de Nodo
    }
};

// Clase Semantico
class Semantico {
public:
    TablaSimbolos *tablaSimbolos;

    Semantico(TablaSimbolos *ts) : tablaSimbolos(ts) {}

    void analiza(Nodo *arbol) {
        arbol->validaTipos();
        tablaSimbolos->muestra();
        muestraErrores();
    }

    // Método para verificar si una variable local está definida en una función
    bool varLocalDefinidaEnFuncion(string variable, string funcion) {
        return tablaSimbolos->varLocalDefinidaEnFuncion(variable, funcion);
    }

    // Método para mostrar los errores encontrados durante el análisis semántico
    void muestraErrores() {
        cout << "Errores Semánticos:" << endl;
        for (const auto& error : tablaSimbolos->errores) {
            cout << error << endl;
        }
    }
};

// Clase Expresion
class Expresion : public Nodo {
public:
    char tipoDato;
    Expresion *izq;
    Expresion *der;

    void validaTipos() override {
        if (izq != nullptr && der != nullptr) {
            izq->validaTipos();
            der->validaTipos();
            if (izq->tipoDato == der->tipoDato) {
                tipoDato = izq->tipoDato;
            } else {
                tipoDato = 'u'; // 'u' para tipo desconocido
                cout << "Error: Los tipos de las expresiones no coinciden." << endl;
            }
        }
    }
};

// Función main
int main() {
    TablaSimbolos tablaSimbolos;

    // Agrega algunas variables a la tabla de símbolos
    tablaSimbolos.agregaDefinicionVariable("x", "int", "global");
    tablaSimbolos.agregaDefinicionVariable("y", "float", "global");

    // Agrega algunas funciones a la tabla de símbolos
    tablaSimbolos.agregaDefinicionFuncion("foo", "global");
    tablaSimbolos.agregaDefinicionFuncion("bar", "global");

    // Muestra la tabla de símbolos
    tablaSimbolos.muestra();

    // Ejemplo de uso del método de verificación de variable local en función
    Semantico semantico(&tablaSimbolos);
    string funcion = "foo";
    string variable = "x";
    if (semantico.varLocalDefinidaEnFuncion(variable, funcion)) {
        cout << "La variable '" << variable << "' está definida en la función '" << funcion << "'" << endl;
    } else {
        cout << "La variable '" << variable << "' no está definida en la función '" << funcion << "'" << endl;
    }

    return 0;
}
