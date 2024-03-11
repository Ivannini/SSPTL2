import * as RClass from "./reglasClasses.js"

export const determinarRegla = (numRegla, pila, ramas) => {

    switch (numRegla) {
        case 1:
            return new RClass.R1(pila, ramas);
        
        case 2:
            return new RClass.R2();
            
        case 3:
            return new RClass.R3(pila, ramas);

        case 4:
            return new RClass.R4(pila, ramas);

        case 5:
            return new RClass.R5(pila, ramas);

        case 6:
            return new RClass.R6(pila, ramas);

        case 7:
            return new RClass.R7();

        case 8:
            return new RClass.R8(pila, ramas);

        case 9:
            return new RClass.R9(pila, ramas);

        case 10:
            return new RClass.R10();

        case 11:
            return new RClass.R11(pila, ramas);
            
        case 12:
            return new RClass.R12();

        case 13:
            return new RClass.R13(pila, ramas);

        case 14:
            return new RClass.R14(pila, ramas);

        case 15:
            return new RClass.R15();

        case 16:
            return new RClass.R16(pila, ramas);

        case 17:
            return new RClass.R17(pila, ramas);

        case 18:
            return new RClass.R18(pila, ramas);

        case 19:
            return new RClass.R19();

        case 20:
            return new RClass.R20(pila, ramas);

        case 21:
            return new RClass.R21(pila, ramas);

        case 22:
            return new RClass.R22(pila, ramas);

        case 23:
            return new RClass.R23(pila, ramas);

        case 24:
            return new RClass.R24(pila, ramas);

        case 25:
            return new RClass.R25(pila, ramas);
        
        case 26:
            return new RClass.R26();

        case 27:
            return new RClass.R27(pila, ramas);

        case 28:
            return new RClass.R28(pila, ramas);

        case 29:
            return new RClass.R29();

        case 30:
            return new RClass.R30(pila, ramas);
        
        case 31:
            return new RClass.R31();

        case 32:
            return new RClass.R32(pila, ramas);

        case 33:
            return new RClass.R33();

        case 34:
            return new RClass.R34(pila, ramas);

        case 35:
            return new RClass.R35(pila, ramas);

        case 36:
            return new RClass.R36(pila);

        case 37:
            return new RClass.R37(pila);

        case 38:
            return new RClass.R38(pila);

        case 39:
            return new RClass.R39(pila);

        case 40:
            return new RClass.R40(pila, ramas);

        case 41:
            return new RClass.R41(pila, ramas);

        case 42:
            return new RClass.R42(pila, ramas);

        case 43:
            return new RClass.R43(pila, ramas);

        case 44:
            return new RClass.R44(pila, ramas);

        case 45:
            return new RClass.R45(pila, ramas);

        case 46:
            return new RClass.R46(pila, ramas);

        case 47:
            return new RClass.R47(pila, ramas);

        case 48:
            return new RClass.R48(pila, ramas);

        case 49:
            return new RClass.R49(pila, ramas);

        case 50:
            return new RClass.R50(pila, ramas);

        case 51:
            return new RClass.R51(pila, ramas);

        case 52:
            return new RClass.R52(pila, ramas);
    }
}
