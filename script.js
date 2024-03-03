import {Lexico} from './classes/lexico.js';
import { Semantico } from './classes/semantico.js';
import { Sintactico } from './classes/sintactico.js';
import { GenCode } from './classes/genCode.js';
import {Nodo, Arbol} from './classes/Tree/arbol.js';

let sint = new Sintactico();

const botonlex1 = document.getElementById("boton");
botonlex1.addEventListener("click", () => {
    ejecutaranalizador(1);
});

const obtenerFuente = () => {
    const input = document.getElementById("input");
    let fuente = input.value;
    fuente = fuente.trim();
    return fuente;
}

const imprimirRubros = (columna1, columna2, columna3) => {
    for (let i = columna1.length; i < 30; i++) {
        columna1 += " ";
    }

    for (let i = columna2.length; i < 20; i++) {
        columna2 += " ";
    }

    console.log(columna1 + columna2 + columna3);
}

const generarFilasTabla = (columna1, columna2, columna3) => {
    let resultado = document.getElementById("resultado");
    let tabla = resultado.firstElementChild;

    let row = document.createElement("DIV");

    let column1 = document.createElement("DIV");
    let span1 = document.createElement("SPAN");
    column1.classList.add("column");
    span1.textContent = columna1;
    column1.appendChild(span1);
    row.appendChild(column1);

    let column2 = document.createElement("DIV");
    let span2 = document.createElement("SPAN");
    column2.classList.add("column");
    span2.textContent = columna2;
    column2.appendChild(span2);
    row.appendChild(column2);

    let column3 = document.createElement("DIV");
    let span3 = document.createElement("SPAN");
    column3.classList.add("column");
    span3.textContent = columna3;
    column3.appendChild(span3);
    row.appendChild(column3);

    row.classList.add("row", "row-content");

    tabla.appendChild(row);
}

const reiniciaTabla = () => {
    //let resultado = document.getElementById("resultado");
    //let tabla = resultado.firstElementChild;
    let vacio = document.getElementById("vacio");
    let mensaje = document.getElementById("mensaje-resultado");
    vacio.classList.add("oculto");
    mensaje.classList.add("oculto");
    

    /*resultado.classList.remove("oculto");

    [...tabla.children].forEach(element => {
        if(element != tabla.firstElementChild) {
            tabla.removeChild(element);
        } 
    });*/
}

const reiniciarArbol = () => {
    let titulo = document.getElementById("titulo-arbol");
    let arbol = document.getElementById("arbol");
    let lista = arbol.firstElementChild;
    titulo.classList.add("oculto");
    arbol.classList.add("oculto");
    [...lista.children].forEach(element => {
        lista.removeChild(element);
    });
}

const entradaVaciaMsj = () => {
    /*let resultado = document.getElementById("resultado");
    resultado.classList.add("oculto");*/

    let aceptacion = document.getElementById("mensaje-resultado");
    aceptacion.classList.add("oculto");

    /*let titulo = document.getElementById("titulo-arbol");
    let arbol = document.getElementById("arbol");
    titulo.classList.add("oculto");
    arbol.classList.add("oculto");*/

    let vacio = document.getElementById("vacio");
    vacio.classList.remove("oculto");

    let botonDescarga = document.getElementById("archivo");
    botonDescarga.classList.add("oculto");
}

const resultadoMsj = (texto) => {
    let botonDescarga = document.getElementById("archivo");
    let aceptacion = document.getElementById("mensaje-resultado");
    aceptacion.classList.remove("oculto");
    botonDescarga.classList.add("oculto");
    aceptacion.firstElementChild.textContent = texto;
}

const imprimirArbol = (arbol) => {
    let tituloDom = document.getElementById("titulo-arbol");
    let arbolDom = document.getElementById("arbol");
    let listaDom = arbolDom.firstElementChild;
    arbolDom.classList.remove("oculto");
    tituloDom.classList.remove("oculto");

    let espacio = 0;
    let fragmento = new DocumentFragment();
    arbol.raiz.forEach(rama => {
        imprimirNodo(rama, espacio, fragmento);
    });
    listaDom.appendChild(fragmento);
}

const imprimirNodo = (rama, espacio, fragmento) => {
    let espaciado = "";
    for (let i = 0; i < espacio; i++) {
        espaciado += "__";
    }
    //console.log(espaciado + espacio + ". " + rama.simbolo);
    let ramaDom = document.createElement("li");
    ramaDom.textContent = espaciado + espacio + ". " + rama.simbolo;
    ramaDom.classList.add("parte-arbol");
    if(rama.ramas.length == 0) {
        ramaDom.classList.add("hoja");
    }
    fragmento.appendChild(ramaDom);
    rama.ramas.forEach(elemento => {
        imprimirNodo(elemento, espacio + 1, fragmento);
    });
}

const ejecutaranalizador = () => {
    let fuente = "";
    fuente = obtenerFuente();
    let lex = new Lexico(fuente);
    let seman;
    let genCode;

    //console.log("Resultado del analisis Sintactico");
    //console.log("Resultado del anlisis Lexico");
    //console.log("Arbol Sintactico");
    //console.log("Resultado del analisis Semantico")

    if(fuente.length != 0) {
        //console.log("Pila                       Entrada                Accion   ");
        reiniciaTabla();
        //reiniciarArbol();

        sint.inicializarPila();
        sint.inicializarArbol();
        let arbol = new Arbol();

        while(!lex.termina()) {
            lex.obtenerSimbolo();

            let opcion = 0;

            do {
                if(lex.tipo == 404) {
                    resultadoMsj("Error lexico");
                    console.log("Error lexico");
                    lex.caracter = "$";
                    break;
                }
                sint.sigEntrada(lex.tipo);

                //imprimirRubros(sint.pila.toString(), lex.simbolo, sint.accion);
                //generarFilasTabla(sint.pila.toString(), lex.simbolo, sint.accion);
    
                opcion = sint.sigAccion(lex.simbolo);
    
                if(opcion == 2) {
                    //imprimirRubros(sint.pila.toString(), lex.simbolo, sint.accion);
                    //generarFilasTabla(sint.pila.toString(), lex.simbolo, sint.accion);
    
                } else if(opcion == 3) {
                    resultadoMsj("Error sintactico");
                    console.log("Error sintactico");
                    lex.caracter = "$";
                    break;
    
                } else if(opcion == 4) {
                    resultadoMsj("Aceptacion sintactico");
                    console.log("Aceptacion sintactico");
                    arbol = sint.arbol;
                    //imprimirArbol(arbol);

                    seman = new Semantico(arbol);
                    seman.analisis();
                    if(seman.valido)
                    {
                        resultadoMsj("Aceptacion semantico");

                        genCode = new GenCode(arbol);
                        let blob = genCode.generarCodigo();

                        // Crear el enlace de descarga
                        let archivo = document.getElementById("archivo");
                        let enlace = archivo.firstElementChild;
                        let boton = enlace.firstElementChild;
                        boton.textContent = "Descargar Codigo";
                        enlace.download = 'codigo.asm';
                        enlace.href = URL.createObjectURL(blob);
                        archivo.classList.remove("oculto");
                    }
                    else
                        resultadoMsj("Error semantico\n" + seman.error);
                    break;
                }                
            } while(opcion == 2);
        }
    } else {
        console.log("Entrada vacia");
        entradaVaciaMsj();
    }
}

