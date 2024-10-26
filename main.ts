

//Ejercicio videojuego
/*   Crear un sistema de personajes de un videojuego RPG utilizando herencia y 
polimorfismo. Los personajes tendrán características y habilidades únicas, y 
algunos podrán evolucionar a versiones mejoradas con nuevas habilidades        */

//polimorfismo con clases que tienen metodos abtractos 
import { Personaje } from "./Personaje";
import { Mago } from "./Mago";
import { El_Ninja } from "./El_Ninja";
import { Arquero } from "./Arquero";
import { Arma } from "./Arma";

// crear personajes
let armaArqueros:Arma=new Arma();
armaArqueros.setArma("Arquero");
let arquero1:Arquero= new Arquero("Arquero",10,25,"Arquero");
console.log(armaArqueros);
console.log(arquero1);
console.log(arquero1.habilidades());
arquero1.setNombre("Dibu");
console.log(arquero1.getNombre());
arquero1.setVida(33);
console.log(arquero1.getVida());

let Ninja1:El_Ninja= new El_Ninja("Ninja",10,25,"Ninja");

console.log(Ninja1);
console.log(Ninja1.habilidades());

