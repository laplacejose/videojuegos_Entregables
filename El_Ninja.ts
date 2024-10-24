import { Personaje } from "./Personaje";

export class El_Ninja extends Personaje{

     private habilidadPersonaje:string;

     constructor(nombre:string,vida:number,fuerza:number , arma:string){
        super(nombre,vida,fuerza);

     }

    public habilidades(): string {

        this.habilidadPersonaje="Agil y buen manejo de sable ";
        return this.habilidadPersonaje;
    } 
    

}