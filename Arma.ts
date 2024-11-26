import { Arquero } from "./Arquero";

export class Arma {

    nombreArma: string;
    nivelDanio: number;

    constructor(nombre: string, danio: number) {
        this.nombreArma = nombre;
        this.nivelDanio = danio;
    }
    protected setnombreArma(nombreArma):void {

        this.nombreArma = nombreArma;
    }

protected getnombreArma(): string {
        return this.nombreArma;
    }
 protected setnivelDanio(nivelDanio):void {

        this.nivelDanio = nivelDanio;
    }

    protected getnivelDanio(): number {
        return this.nivelDanio;
    }



}