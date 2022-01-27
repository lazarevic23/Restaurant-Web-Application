import { Klijent } from "./klijent";
import { Restoran } from "./restoran";

export class Ocena{
    id: number;
	klijent: Klijent;
	ocena: number;
    restoran: Restoran;
    
    constructor(){
        this.id = 0;
        this.klijent = new Klijent();
        this.ocena = 0;
        this.restoran = new Restoran();
        

     }
}
