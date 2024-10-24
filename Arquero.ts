import { Arma } from "./Arma";
import { Personaje } from "./Personaje";

export class Arquero extends Personaje{

    private arma:Arma;
    private habilidadPersonaje:string;

    constructor(nombre:string,vida:number,fuerza:number , arma:string){
        super(nombre,vida,fuerza);
        
    }
public habilidades(): string{

    this.habilidadPersonaje="Agil y buena punteria "
    return this.habilidadPersonaje
}

}