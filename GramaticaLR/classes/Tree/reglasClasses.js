import { Nodo } from "./arbol.js";

export class Tipo extends Nodo {
    constructor (tipo) {
        super();
        this.simbolo = tipo.value();
        this.valor = tipo;
    }
}

export class Identificador extends Nodo {
    constructor (id) {
        super();
        this.simbolo = id.value();
        this.valor = id;
    }
}

export class Delimitador extends Nodo {
    constructor (delimitador) {
        super();
        this.simbolo = delimitador.value();
        this.valor = delimitador;
    }
}

export class Entero extends Nodo {
    constructor (entero) {
        super();
        this.simbolo = entero.value();
        this.valor = entero;
    }
}

export class Real extends Nodo {
    constructor (real) {
        super();
        this.simbolo = real.value();
        this.valor = real;
    }
}

export class Cadena extends Nodo {
    constructor (cadena) {
        super();
        this.simbolo = cadena.value();
        this.valor = cadena;
    }
}

export class OpSum extends Nodo {
    constructor (opSum) {
        super();
        this.simbolo = opSum.value();
        this.valor = opSum;
    }
}

export class OpMul extends Nodo {
    constructor (opMul) {
        super();
        this.simbolo = opMul.value();
        this.valor = opMul;
    }
}

export class OpRelac extends Nodo {
    constructor (opRelac) {
        super();
        this.simbolo = opRelac.value();
        this.valor = opRelac;
    }
}

export class OpOr extends Nodo {
    constructor (opOr) {
        super();
        this.simbolo = opOr.value();
        this.valor = opOr;
    }
}

export class OpAnd extends Nodo {
    constructor (opAnd) {
        super();
        this.simbolo = opAnd.value();
        this.valor = opAnd;
    }
}

export class OpNot extends Nodo {
    constructor (opNot) {
        super();
        this.simbolo = opNot.value();
        this.valor = opNot;
    }
}

export class OpIgualdad extends Nodo {
    constructor (opIgualdad) {
        super();
        this.simbolo = opIgualdad.value();
        this.valor = opIgualdad;
    }
}

export class PClave extends Nodo {
    constructor (pClave) {
        super();
        this.simbolo = pClave.value();
        this.valor = pClave;
    }
}

export class Otro extends Nodo {
    constructor (otro) {
        super();
        this.simbolo = otro.value();
        this.valor = otro;
    }
}

export class R1 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "programa";
        this.ramas.unshift(ramas.pop());

        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R2 extends Nodo {

    constructor () {
        super();
        this.simbolo = "Definiciones";
    }
}

export class R3 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Definiciones";
        for (let i = 0; i < 2; i++) {
            this.ramas.unshift(ramas.pop());
        }

        for (let i = 0; i < 4; i++) {
            pila.pop();
        }
    }
}

export class R4 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Definicion";
        this.ramas.unshift(ramas.pop());

        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R5 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Definicion";
        this.ramas.unshift(ramas.pop());

        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R6 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "DefVar";

        pila.pop();
        this.ramas.unshift(new Otro(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Identificador(pila.pop()));
        pila.pop();
        this.ramas.unshift(new Tipo(pila.pop()));
    }
}

export class R7 extends Nodo {

    constructor () {
        super();
        this.simbolo = "ListaVar";
    }
}

export class R8 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "ListaVar";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Identificador(pila.pop()));
        pila.pop();
        this.ramas.unshift(new Otro(pila.pop()));
    }
}

export class R9 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "DefFunc";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
        pila.pop();
        this.ramas.unshift(new Identificador(pila.pop()));
        pila.pop();
        this.ramas.unshift(new Tipo(pila.pop()));
    }
}

export class R10 extends Nodo {

    constructor () {
        super();
        this.simbolo = "Parametros";
    }
}

export class R11 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Parametros";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Identificador(pila.pop()));
        pila.pop();
        this.ramas.unshift(new Tipo(pila.pop()));
    }
}

export class R12 extends Nodo {

    constructor () {
        super();
        this.simbolo = "ListaParam";
    }
}

export class R13 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "ListaParam";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        } 
        this.ramas.unshift(new Identificador(pila.pop()));
        pila.pop();
        this.ramas.unshift(new Tipo(pila.pop()));
        pila.pop();
        this.ramas.unshift(new Otro(pila.pop()));
    }
}

export class R14 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "BloqFunc";

        pila.pop();
        this.ramas.unshift(new Delimitador(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
    }
}

export class R15 extends Nodo {

    constructor () {
        super();
        this.simbolo = "DefLocales";
    }
}

export class R16 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "DefLocales";   
        for (let i = 0; i < 2; i++) {
            this.ramas.unshift(ramas.pop());
        }

        for (let i = 0; i < 4; i++) {
            pila.pop();
        }
    }
}

export class R17 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "DefLocal";   
        this.ramas.unshift(ramas.pop());
        
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R18 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "DefLocal";   
        this.ramas.unshift(ramas.pop());
        
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R19 extends Nodo {

    constructor () {
        super();
        this.simbolo = "Sentencias";
    }
}

export class R20 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Sentencias";   
        for (let i = 0; i < 2; i++) {
            this.ramas.unshift(ramas.pop());
        }

        for (let i = 0; i < 4; i++) {
            pila.pop();
        }
    }
}

export class R21 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Sentencia";

        pila.pop();
        this.ramas.unshift(new Otro(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Otro(pila.pop()));
        pila.pop();
        this.ramas.unshift(new Identificador(pila.pop()));
    }
}

export class R22 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Sentencia";

        for (let i = 0; i < 2; i++) {
            this.ramas.unshift(ramas.pop());
        }
        for (let i = 0; i < 5; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
        pila.pop();
        this.ramas.unshift(new PClave(pila.pop()));
    }
}

export class R23 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Sentencia";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
        pila.pop();
        this.ramas.unshift(new PClave(pila.pop()));
    }
}

export class R24 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Sentencia";

        pila.pop();
        this.ramas.unshift(new Otro(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new PClave(pila.pop()));
    }
}

export class R25 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Sentencia";

        pila.pop();
        this.ramas.unshift(new Otro(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R26 extends Nodo {

    constructor () {
        super();
        this.simbolo = "Otro";
    }
}

export class R27 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Otro";+

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new PClave(pila.pop()));
    }
}

export class R28 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Bloque";

        
        pila.pop();
        this.ramas.unshift(new Delimitador(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
    }
}

export class R29 extends Nodo {

    constructor () {
        super();
        this.simbolo = "ValorRegresa";
    }
}

export class R30 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "ValorRegresa";
        this.ramas.unshift(ramas.pop());

        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R31 extends Nodo {

    constructor () {
        super();
        this.simbolo = "Argumentos";
    }
}

export class R32 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Argumentos";
        for (let i = 0; i < 2; i++) {
            this.ramas.unshift(ramas.pop());
        }

        for (let i = 0; i < 4; i++) {
            pila.pop();
        }
    }
}

export class R33 extends Nodo {

    constructor () {
        super();
        this.simbolo = "ListaArgumentos";
    }
}

export class R34 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "ListaArgumentos";
        for (let i = 0; i < 2; i++) {
            this.ramas.unshift(ramas.pop());
        }

        for (let i = 0; i < 5; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Otro(pila.pop()));
    }
}

export class R35 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Termino";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R36 extends Nodo {

    constructor (pila) {
        super();
        this.simbolo = "Termino";

        pila.pop();
        this.ramas.unshift(new Identificador(pila.pop()));
    }
}

export class R37 extends Nodo {

    constructor (pila) {
        super();
        this.simbolo = "Termino";

        pila.pop();
        this.ramas.unshift(new Entero(pila.pop()));
    }
}

export class R38 extends Nodo {

    constructor (pila) {
        super();
        this.simbolo = "Termino";

        pila.pop();
        this.ramas.unshift(new Real(pila.pop()));
    }
}

export class R39 extends Nodo {

    constructor (pila) {
        super();
        this.simbolo = "Termino";

        pila.pop();
        this.ramas.unshift(new Cadena(pila.pop()));
    }
}

export class R40 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "LlamadaFunc";

        pila.pop();
        this.ramas.unshift(new Delimitador(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
        pila.pop();
        this.ramas.unshift(new Identificador(pila.pop()));
    }
}

export class R41 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "SentenciaBloque";
        this.ramas.unshift(ramas.pop());

        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R42 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "SentenciaBloque";
        this.ramas.unshift(ramas.pop());

        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R43 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";

        pila.pop();
        this.ramas.unshift(new Delimitador(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new Delimitador(pila.pop()));
    }
}

export class R44 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";
        this.ramas.unshift(ramas.pop());

        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new OpSum(pila.pop()));
    }
}

export class R45 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";
        this.ramas.unshift(ramas.pop());

        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new OpNot(pila.pop()));
    }
}

export class R46 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new OpMul(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R47 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new OpSum(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R48 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new OpRelac(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R49 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new OpIgualdad(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R50 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new OpAnd(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R51 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";

        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 3; i++) {
            pila.pop();
        }
        this.ramas.unshift(new OpOr(pila.pop()));
        this.ramas.unshift(ramas.pop());
        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}

export class R52 extends Nodo {

    constructor (pila, ramas) {
        super();
        this.simbolo = "Expresion";
        this.ramas.unshift(ramas.pop());

        for (let i = 0; i < 2; i++) {
            pila.pop();
        }
    }
}