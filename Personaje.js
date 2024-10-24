"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(suNombre, suVida, suFuerza) {
        this.nombre = suNombre;
        this.vida = suVida + 25;
        this.fuerza = suFuerza;
    }
    // Metodos Seters..
    Personaje.prototype.setNombre = function (nombrePersonaje) {
        this.nombre = nombrePersonaje;
    };
    Personaje.prototype.setVida = function (puntosVida) {
        this.vida = puntosVida;
    };
    Personaje.prototype.setFuerza = function (puntosFuerza) {
        this.fuerza = puntosFuerza;
    };
    //  Metodos Geters...
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.getFuerza = function () {
        return this.fuerza;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
