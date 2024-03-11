export class ElementoPila {
    constructor() { }

    string() {}
    value() {}
}

export class Estado extends ElementoPila {

    constructor (elemento) {
        super();
        this.elemento = elemento || 0;
    }

    string() {
        return this.elemento.toString();
    }

    value() {
        return this.elemento;
    }
}

export class NoTerminal extends ElementoPila {

    constructor (elemento) {
        super();
        this.elemento = elemento || "";
    }

    string() {
        return this.elemento;
    }

    value() {
        return this.elemento;
    }
}

export class Terminal extends ElementoPila {

    constructor (elemento) {
        super();
        this.elemento = elemento || "";
    }

    string() {
        return this.elemento;
    }

    value() {
        return this.elemento;
    }
}