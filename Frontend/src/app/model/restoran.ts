import { Sto } from "./sto";

export class Restoran{

    public id: number;
    public naziv: string;
    public adresa: string;
    public kontakt: string;
    public stolovi: Sto[];

    constructor(){
        this.id = 0;
        this.naziv = "";
        this.adresa = "";
        this.kontakt = "";
        this.stolovi = [];
    }
}