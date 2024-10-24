"use strict";
//Ejercicio videojuego
/*   Crear un sistema de personajes de un videojuego RPG utilizando herencia y
polimorfismo. Los personajes tendrán características y habilidades únicas, y
algunos podrán evolucionar a versiones mejoradas con nuevas habilidades        */
Object.defineProperty(exports, "__esModule", { value: true });
var El_Ninja_1 = require("./El_Ninja");
var Arquero_1 = require("./Arquero");
// crear personajes
var arquero1 = new Arquero_1.Arquero("Arquero", 10, 25, "Arquero");
console.log(arquero1);
console.log(arquero1.habilidades());
arquero1.setNombre("Dibu");
console.log(arquero1.getNombre());
arquero1.setVida(33);
console.log(arquero1.getVida());
var Ninja1 = new El_Ninja_1.El_Ninja("Ninja", 10, 25, "Ninja");
console.log(Ninja1);
console.log(Ninja1.habilidades());
