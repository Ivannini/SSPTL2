import { Pila } from './pila.js';
import * as genR from './Tree/generadorReglas.js';
import { Nodo, Arbol } from './Tree/arbol.js';

class Sintactico {
    
    constructor() {
        this.pila = new Pila();
        this.fila = 0;
        this.columna = 0;
        this.accion = 0;
        this.idReglas = [];
        this.lonReglas = [];
        this.simReglas = [];
        this.tablaLR = [];
        this.arbol = new Arbol();


        fetch('/GramaticaCompilador/compilador.lr').then(res => res.text())
        .then(content => {
            let lines = content.split(/\n/);
            let numReglas = parseInt(lines.shift());
            for (let i = 0; i < numReglas; i++) {
                lines[i] = lines[i].replace("\r", "");
                let regla = lines[i].split("\t");
                this.idReglas.push(regla[0]);
                this.lonReglas.push(regla[1]);
                this.simReglas.push(regla[2]);
            }
            
            let numFila = parseInt(lines[numReglas].split("\t").shift());
            numReglas++;
            for (let i = numReglas; i < numReglas + numFila; i++) {
                lines[i] = lines[i].replace("\r", "");
                let fila = lines[i].split("\t");
                this.tablaLR.push(fila);
            }
        });
    }

    inicializarPila() {
        this.pila.vaciar();
        this.pila.push("$", 1);
        this.pila.push(0, 3);
    }

    inicializarArbol() {
        this.arbol = new Arbol();
    }

    sigEntrada(tipo) {
        this.fila = this.pila.front();
        this.columna = tipo;
        this.accion = this.tablaLR[this.fila][this.columna];
    }

    sigAccion(simbolo) {
        if(this.accion > 0){
            this.pila.push(simbolo, 1);
            this.pila.push(this.accion, 3);
            return 1;

        } else if (this.accion < 0) {
            if(this.accion == -1) {
                return 4;
            }

            let idRegla = Math.abs(this.accion) -2;

            this.arbol.raiz.push(genR.determinarRegla(idRegla + 1, this.pila, this.arbol.raiz));

            /*for (let i = 0; i < this.lonReglas[idRegla]*2; i++) {
                this.pila.pop();
            }*/

            this.fila = this.pila.front();
            this.columna = this.idReglas[idRegla];
            this.accion = this.tablaLR[this.fila][this.columna];

            this.pila.push(this.simReglas[idRegla], 2);
            this.pila.push(this.accion, 3);
            return 2;
            
        } else {
            return 3;
        }
    }

    vaciar() {
        this.pila = [];
    }

}

export { Sintactico };