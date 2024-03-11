class Lexico {
    
    constructor(fuente) {
        this.fuente = fuente || "$";
        this.indice = 0;
        this.continua = true;
        this.caracter = "";
        this.simbolo = "";
        this.tipo = 404;
        this.tipoS = "";
        this.estado = 0;
    }

    reiniciar(fuente) {
        this.indice = 0;
        this.fuente = fuente;
        this.estado = 0;
    }
    
    //Automata
    obtenerSimbolo() {
        this.simbolo = "";
        this.continua = true;
        this.tipo = 404;
        this.tipoS = "";
        this.estado = 0;

        while(this.continua) {
            this.caracter = this.sigCaracter();
            switch (this.estado) {
                case 0:
                    if(this.esLetra()) {
                        this.estado = 1;
                        this.simbolo += this.caracter;
                        break;
                    }

                    if(this.esDigito()) {
                        this.estado = 2;
                        this.simbolo += this.caracter;
                        break;
                    }

                    if(this.esOpSum()) {
                        this.estado = 5;
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    }

                    if(this.esOpMul()) {
                        this.estado = 6;
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    }

                    if(this.esOpRel()) {
                        this.estado = 7;
                        this.simbolo += this.caracter;
                        break;
                    }

                    if(this.caracter == "|") {
                        this.estado = 8;
                        this.simbolo += this.caracter;
                        break;
                    }

                    if(this.caracter == "&") {
                        this.estado = 9;
                        this.simbolo += this.caracter;
                        break;
                    }

                    if(this.caracter == "!") {
                        this.estado = 10;
                        this.simbolo += this.caracter;
                        break;
                    }

                    if(this.caracter == "=") {
                        this.estado = 18;
                        this.simbolo += this.caracter;
                        break;
                    }

                    if(this.caracter == ";") {
                        this.estado = 12;
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    }

                    if(this.caracter == ",") {
                        this.estado = 13;
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    }

                    if(this.caracter == "(") {
                        this.estado = 14;
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    }

                    if(this.caracter == ")") {
                        this.estado = 15;
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    }

                    if(this.caracter == "{") {
                        this.estado = 16;
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    }

                    if(this.caracter == "}") {
                        this.estado = 17;
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    }

                    if(this.caracter == "$") {
                        this.estado = 23;
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    }

                    if(this.espacio()) {
                        break;
                    }

                    if(this.termina()) {
                        this.aceptacion(this.estado);
                        this.simbolo += this.caracter;
                        break;
                    }

                    this.simbolo += this.caracter;
                    this.estado = 404;
                    this.aceptacion(this.estado);

                    break;

                case 1: 
                    if(this.esLetra() || this.esDigito()) {
                        this.simbolo += this.caracter;
                        break;
                    } else {
                        this.estado = this.esReservada();
                        this.regresa();
                        this.aceptacion(this.estado);
                        break;
                    }

                case 2: 
                    if(this.esDigito()) {
                        this.simbolo += this.caracter;
                        break;
                    } else if (this.caracter == "."){
                        this.estado = 3;
                        this.simbolo += this.caracter;
                        break;
                    } else {
                        this.regresa();
                        this.aceptacion(this.estado);
                        break;
                    }

                case 3:
                    let num; 
                    if(this.esDigito()) {
                        this.simbolo += this.caracter;
                        break;
                    }
                    else if(this.termina()) {
                        num = this.indice - 1;
                    }
                    else {
                        num = this.indice -2;
                    }
                    
                    if(this.fuente[num] == ".") {
                        this.estado = 404;
                    }
                    this.regresa();
                    this.aceptacion(this.estado);
                    break;

                case 7:
                    if(this.caracter == "=") {
                        this.simbolo += this.caracter;
                        this.aceptacion(this.estado);
                        break;
                    } else {
                        this.regresa();
                        this.aceptacion(this.estado);
                    }
                    break;

                case 8:
                    if(this.caracter == "|") {
                        this.simbolo += this.caracter;
                    } else {
                        this.estado = 404;
                        this.regresa();
                    }
                    this.aceptacion(this.estado);
                    break;

                case 9:
                    if(this.caracter == "&") {
                        this.simbolo += this.caracter;
                    } else {
                        this.estado = 404;
                        this.regresa();
                    }
                    this.aceptacion(this.estado);
                    break;

                case 10:
                    if(this.caracter == "=") {
                        this.simbolo += this.caracter;
                        this.estado = 11;
                    } else {
                        this.regresa();
                    }
                    this.aceptacion(this.estado);
                    break;

                case 18:
                    if(this.caracter == "=") {
                        this.simbolo += this.caracter;
                        this.estado = 11;
                    } else {
                        this.regresa();
                    }
                    this.aceptacion(this.estado);
                    break;

                default:
                    break;
            }
        }

        switch (this.estado) {
            case 404:
                this.tipo = 404;
                this.tipoS = "Error"
                break;

            case 0:
                this.tipo = 100;
                this.tipoS = "Vacio";
                break;

            case 1:
                this.tipo = 0;
                this.tipoS = "Id";
                break;

            case 2:
                this.tipo = 1;
                this.tipoS = "Entero";
                break;

            case 3:
                this.tipo = 2;
                this.tipoS = "Real";
                break;
            
            case 4:
                this.tipo = 4;
                this.tipoS = "Tipo";
                break;

            case 5:
                this.tipo = 5;
                this.tipoS = "OpSum";
                break;

            case 6:
                this.tipo = 6;
                this.tipoS = "OpMul";
                break;
            
            case 7:
                this.tipo = 7;
                this.tipoS = "OpRelac";
                break;

            case 8:
                this.tipo = 8;
                this.tipoS = "OpOr";
                break;

            case 9:
                this.tipo = 9;
                this.tipoS = "OpAnd";
                break;

            case 10:
                this.tipo = 10;
                this.tipoS = "OpNot";
                break;

            case 11:
                this.tipo = 11;
                this.tipoS = "OpIgualdad";
                break;

            case 18:
                this.tipo = 18;
                this.tipoS = "=";
                break;

            case 12:
                this.tipo = 12;
                this.tipoS = ";";
                break;

            case 13:
                this.tipo = 13;
                this.tipoS = ",";
                break;
            
            case 14:
                this.tipo = 14;
                this.tipoS = "(";
                break;

            case 15:
                this.tipo = 15;
                this.tipoS = ")";
                break;

            case 16:
                this.tipo = 16;
                this.tipoS = "{";
                break;

            case 17:
                this.tipo = 17;
                this.tipoS = "}";
                break;

            case 19:
                this.tipo = 19;
                this.tipoS = "if";
                break;

            case 20:
                this.tipo = 20;
                this.tipoS = "while";
                break;

            case 21:
                this.tipo = 21;
                this.tipoS = "return";
                break;

            case 22:
                this.tipo = 22;
                this.tipoS = "else";
                break;

            case 23:
                this.tipo = 23;
                this.tipoS = "$";
                break;
        
            default:
                break;
        }
    }

    sigCaracter () {
        if(this.indice == this.fuente.length) {
            return "$";
        }      
        return this.fuente[this.indice++];
    }

    regresa() {
        if (this.caracter != "$" && !this.espacio()) {
            this.indice--;
        }
        if(this.caracter == "$") {
            this.caracter = "";
        }
    }


    esLetra() {
        if (this.caracter.match(/[a-z]/i)) {
            return true;
        }
        return false;
    }

    esDigito() {
        if (this.caracter.match(/[0-9]/)) {
            return true;
        }
        return false;
    }

    esReservada() {
        if (this.simbolo == "int" || this.simbolo == "float" || this.simbolo == "void") {
            return 4;
        } else if(this.simbolo == "if") {
            return 19;
        } else if(this.simbolo == "while") {
            return 20;
        } else if(this.simbolo == "return") {
            return 21;
        } else if(this.simbolo == "else") {
            return 22;
        }
        return 1;
    }

    esOpSum() {
        if (this.caracter.match(/[+-]/)) {
            return true;
        }
        return false;
    }

    esOpMul() {
    if (this.caracter.match(/[*/]/)) {
            return true;
        }
        return false;
    }

    esOpRel() {
    if (this.caracter.match(/[<>]/)) {
            return true;
        }
        return false;
    }

    espacio() {
        return this.caracter == " " || this.caracter == "\n";
    }

    termina() {  
        return this.caracter == "$";
    }

    aceptacion(estado) {
        this.continua = false;
    }

}

export {Lexico};