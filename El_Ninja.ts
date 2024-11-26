import { Arma } from "./Arma";
import { Personaje } from "./Personaje";

export class El_Ninja extends Personaje{

     private habilidadPersonaje:string;
     private espada:Arma;
     constructor(nombre:string,vida:number,fuerza:number, espada:Arma ){
        super(nombre,vida,fuerza);
        this.espada=espada;
        this.habilidadPersonaje=`fuerza inicial${this.fuerza}`;

     }
     

    public habilidad(): string {
        const duplicarFuerza:number=2*this.fuerza;
        console.log(`ahora ${this.getNombre()} duplicara su fuerza..actualmente es de ${this.fuerza} \n`)
        this.habilidadPersonaje=`El ${this.getNombre()} es agil y paso su fuerza de  ${this.fuerza} al doble ${duplicarFuerza} \n`;
        this.fuerza=duplicarFuerza;
        console.log(`ahora ${this.nombre} tiene una fuerza de ${this.fuerza}`);
        return this.habilidadPersonaje;
    } 
    

}