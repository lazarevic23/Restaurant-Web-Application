import { Restoran } from "./restoran";

export class Sto{
      id: number;
     brojStola: number;
     brojMesta: number;
     restoran: Restoran ;
    
    constructor(){
        this.id = 0;
        this.brojStola = 0;
        this.brojMesta = 0;
        this.restoran = new Restoran();

    }
}