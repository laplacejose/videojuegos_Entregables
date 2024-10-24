
export abstract class Personaje {

      protected nombre:string;
      protected vida :number;
      protected fuerza:number;

    public constructor(suNombre:string, suVida:number,suFuerza:number) {
        this.nombre=suNombre;
        this.vida=suVida +25;
        this.fuerza=suFuerza;
    } 
    public abstract habilidades():string;
   // Metodos Seters..

    public setNombre(nombrePersonaje):void{
        this.nombre=nombrePersonaje;

    }
    public setVida(puntosVida):void{
         this.vida=puntosVida;
    }
    public setFuerza(puntosFuerza):void{
        this.fuerza=puntosFuerza;

    }

 //  Metodos Geters...
    public getNombre():string{
        return this.nombre;

    }
    public getVida():number{
        return this.vida;
        
    }
    public getFuerza():number{
        return this.fuerza
        
    }
}






