"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.El_Ninja = void 0;
var Personaje_1 = require("./Personaje");
var El_Ninja = /** @class */ (function (_super) {
    __extends(El_Ninja, _super);
    function El_Ninja(nombre, vida, fuerza, arma) {
        return _super.call(this, nombre, vida, fuerza) || this;
    }
    El_Ninja.prototype.habilidades = function () {
        this.habilidadPersonaje = "Agil y buen manejo de sable ";
        return this.habilidadPersonaje;
    };
    return El_Ninja;
}(Personaje_1.Personaje));
exports.El_Ninja = El_Ninja;
