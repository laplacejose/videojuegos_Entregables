import { Arma } from "./Arma";
import { Personaje } from "./Personaje";

export class Mago extends Personaje{
    private habilidadPersonaje:string;
    private arma:Arma;

    constructor(nombre:string,vida:number,fuerza:number , arma:string){
        super(nombre,vida,fuerza);
    

    }

    public habilidades(): string {

        this.habilidadPersonaje="Puede convertirce magicamente en objetos para no ser visto "
        return this.habilidadPersonaje;
        
    }
    


}