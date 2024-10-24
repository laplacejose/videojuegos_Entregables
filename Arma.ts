import { Arquero } from "./Arquero";

export class Arma {
    protected nombrePersonaje:string
    private tipoArma:string;

    contructor (nombrePersonaje:string):void{
        this.nombrePersonaje=nombrePersonaje;

    }
public setArma(nombrePersonaje:string):string{
    if (nombrePersonaje==="Arquero"){
        this.tipoArma="Arco magico";
    }else 
    if(nombrePersonaje==="Ninja"){
        this.tipoArma="Sable magico";
    }else 
    if (nombrePersonaje==="Mago"){
        this.tipoArma="Naipe magico";
    }else 
    if (nombrePersonaje="Empoderado")
        {this.tipoArma="Personaje con arma de maximo poder destructivo"}
    else{ this.tipoArma="No se reconoce el tipo de personaje"}
    return this.tipoArma
}




}