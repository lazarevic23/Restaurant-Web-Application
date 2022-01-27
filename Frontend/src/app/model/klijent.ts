export class Klijent {
   id: number;
   imeIPrezime: string;
	email: string;
	lozinka: string;
   vrstaKlijenta: string ;

     constructor(){
        this.id = 0;
        this.imeIPrezime = "";
        this.email = "";
        this.lozinka = "";
        this.vrstaKlijenta = "" ;

     }
}