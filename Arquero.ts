import { Arma } from "./Arma";
import { Personaje } from "./Personaje";

export class Arquero extends Personaje {

    private arma: Arma;
    private tieneEscudo: boolean;

    constructor(nombre: string, vida: number, fuerza: number, arma:Arma) {
        super(nombre, vida, fuerza);
        this.arma=arma;
        this.tieneEscudo = false;// los creo sin escudo inicial..

    }

    public setArma(arma:string){
        this.arma.nombreArma=arma;
    }
    public setdanio(danio:number){
        this.arma.nivelDanio=danio;
    }

    public setTieneEscudo(): void {
        if (this.tieneEscudo) {
            this.tieneEscudo = false
        }
        this.tieneEscudo = true;
    }
    public getTieneEscudo(): boolean {
        return this.tieneEscudo;
    }



    public habilidad(): string {
        let habilidadArquero: string = "";

        if (this.arma != undefined) {
            habilidadArquero = `Gran habilidadad utilizando ${this.arma.nombreArma}`;
        } else console.log("Definir un arma para el arquero..\n");

        return habilidadArquero;
    }




}