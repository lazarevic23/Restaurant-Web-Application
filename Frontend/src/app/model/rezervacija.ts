import { Restoran } from "./restoran";
import { Sto } from "./sto";
import { Klijent } from "./klijent";

export class Rezervacija{

    id: number;
    rezervisanSto: Sto;
	klijent: Klijent;
    vremeRezervacije: string;
    restoran: Restoran;
    
    constructor(){
        this.id = 0;
        this.rezervisanSto = new Sto();
        this.klijent = new Klijent();
        this.vremeRezervacije = "";
        this.restoran = new Restoran();

     }
}

