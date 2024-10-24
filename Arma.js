"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arma = void 0;
var Arma = /** @class */ (function () {
    function Arma() {
    }
    Arma.prototype.contructor = function (nombrePersonaje) {
        this.nombrePersonaje = nombrePersonaje;
    };
    Arma.prototype.setArma = function (nombrePersonaje) {
        if (nombrePersonaje === "Arquero") {
            this.tipoArma = "Arco magico";
        }
        else if (nombrePersonaje === "Ninja") {
            this.tipoArma = "Sable magico";
        }
        else if (nombrePersonaje === "Mago") {
            this.tipoArma = "Naipe magico";
        }
        else if (nombrePersonaje = "Empoderado") {
            this.tipoArma = "Personaje con arma de maximo poder destructivo";
        }
        else {
            this.tipoArma = "No se reconoce el tipo de personaje";
        }
        return this.tipoArma;
    };
    return Arma;
}());
exports.Arma = Arma;
