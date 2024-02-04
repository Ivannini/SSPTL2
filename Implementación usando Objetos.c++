#include <iostream>
#include <list>
#include <string>

using namespace std;

// Clase base ElementoPila
class ElementoPila {
public:
    virtual ~ElementoPila() {}  // Destructor virtual
    virtual void muestra() = 0;  // Función virtual pura
};

// Clase Terminal hereda de ElementoPila
class Terminal : public ElementoPila {
protected:
    string nombre;
public:
    Terminal(string nombre) : nombre(nombre) {}

    void muestra() override {
        cout << "Terminal: " << nombre << endl;
    }
};

// Clase NoTerminal hereda de ElementoPila
class NoTerminal : public ElementoPila {
protected:
    string nombre;
public:
    NoTerminal(string nombre) : nombre(nombre) {}

    void muestra() override {
        cout << "No Terminal: " << nombre << endl;
    }
};

// Clase Estado hereda de ElementoPila
class Estado : public ElementoPila {
protected:
    string nombre;
public:
    Estado(string nombre) : nombre(nombre) {}

    void muestra() override {
        cout << "Estado: " << nombre << endl;
    }
};

// Clase Alumno (base para Bachillerato y Licenciatura)
class Alumno : public ElementoPila {
protected:
    string codigo;
public:
    Alumno(string codigo) : codigo(codigo) {}

    virtual ~Alumno() {}  // Destructor virtual
    virtual void muestra() override {}
};

// Clase Bachillerato hereda de Alumno
class Bachillerato : public Alumno {
protected:
    string preparatoria;
public:
    Bachillerato(string codigo, string preparatoria) : Alumno(codigo), preparatoria(preparatoria) {}

    void muestra() override {
        cout << "Alumno Bachillerato" << endl;
        cout << "Codigo: " << codigo << endl;
        cout << "Preparatoria: " << preparatoria << endl << endl;
    }
};

// Clase Licenciatura hereda de Alumno
class Licenciatura : public Alumno {
protected:
    string carrera;
    int creditos;
public:
    Licenciatura(string codigo, string carrera, int creditos) : Alumno(codigo), carrera(carrera), creditos(creditos) {}

    void muestra() override {
        cout << "Alumno Licenciatura" << endl;
        cout << "Codigo: " << codigo << endl;
        cout << "Carrera: " << carrera << endl;
        cout << "Creditos: " << creditos << endl << endl;
    }
};

// Clase Pila modificada para usar ElementoPila*
class Pila {
private:
    list<ElementoPila*> lista;
public:
    ~Pila() {
        // Liberar la memoria de los elementos de la pila
        for (ElementoPila* elemento : lista) {
            delete elemento;
        }
    }

    void push(ElementoPila *x) {
        lista.push_front(x);
    }

    ElementoPila* pop() {
        ElementoPila* x = *lista.begin();
        lista.erase(lista.begin());
        return x;
    }

    ElementoPila* top() {
        return *lista.begin();
    }

    void muestra() {
        list<ElementoPila*>::reverse_iterator it;
        ElementoPila *x;
        cout << "Pila: ";
        for (it = lista.rbegin(); it != lista.rend(); it++) {
            x = *it;
            x->muestra();
        }
        cout << endl;
    }
};

// Función de ejemplo
void ejemplo() {
    Pila pila;
    pila.push(new Licenciatura("345678", "Computacion", 200));
    pila.push(new Bachillerato("456789", "Preparatoria 12"));
    pila.push(new Licenciatura("456789", "Informatica", 50));
    pila.muestra();
    cout << "*********************************" << endl;
    pila.pop();
    pila.muestra();
}

int main() {
    ejemplo();
    return 0;
}
