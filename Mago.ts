import { Arma } from "./Arma";
import { Personaje } from "./Personaje";

export class Mago extends Personaje{
    private habilidadPersonaje:string;
    private armaTrucos:Arma;

    constructor(nombre:string,vida:number,fuerza:number , armaMago:Arma){
        super(nombre,vida,fuerza);
       this.armaTrucos=armaMago;
    

    }

    public habilidad(): string {

        this.habilidadPersonaje="Puede convertirce magicamente en objetos para no ser visto "
        return this.habilidadPersonaje;
        
    }
    


}