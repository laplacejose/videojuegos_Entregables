

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
let espadalarga:Arma=new Arma("espada extra larga", 80);
let ArcoMagico:Arma=new Arma("Arco Magico", 50);
let trucoArma1:Arma=new Arma("Se transforma en objetos ",5); 
// crear personajes
console.log("Se instancia un pesonaje de cada uno")
let ninja1:El_Ninja= new El_Ninja("NinjaRojo",10,25,espadalarga);
let arquero1:Arquero= new Arquero("ArqueroClasico",10,25,ArcoMagico);
let mago1:Mago=new Mago("MagoNegro",50,30,trucoArma1);

console.log("demostrar Habilidades..")

console.log("Habilidad Ninja");
console.log(ninja1.habilidad());

console.log("Habilidad Arquero");
console.log(arquero1.habilidad());


arquero1.setArma("Flecha Plata");    // cambio de arma..
arquero1.setdanio(36);               // cambio nivel de daño
console.log(arquero1.habilidad());

console.log("Habilidad Mago");
console.log(mago1.habilidad());

console.log("vida Ninja ?");
console.log(`La vida de ${ninja1.getNombre()} es ${ninja1.getVida()}`);

console.log(`el arquero tiene escudo ${arquero1.getTieneEscudo()}`);
arquero1.setTieneEscudo();//se soloca escudo al arquero..
console.log(`el arquero tiene escudo ${arquero1.getTieneEscudo()}`);


