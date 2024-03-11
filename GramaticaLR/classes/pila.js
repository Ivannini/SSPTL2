import * as pilaElem from "./elementoPila.js";

class Pila {

    constructor() {
        this.pila = [];
    }

    push(element, tipo) {
        let elemento;
        switch(tipo) {
            case 1:
                elemento = new pilaElem.Terminal(element);
                break;
            
            case 2:
                elemento = new pilaElem.NoTerminal(element);
                break;
            
            case 3:
                elemento = new pilaElem.Estado(element);
                break;
        }
        this.pila.push(elemento);
    }

    front() {
        return this.pila[this.pila.length -1].value();
    }

    pop() {
        return this.pila.pop();
    }

    vaciar() {
        this.pila = [];
    }

    toString() {
        let string = "";
        this.pila.forEach(element => {
            string += element.string();
        });
        return string;
    }
}

export {Pila};