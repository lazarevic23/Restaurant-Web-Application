import { Component, OnInit } from '@angular/core';
import { RezervacijaService } from 'app/service/rezervacija.service';
import { Rezervacija } from 'app/model/rezervacija';
import { ActivatedRoute, Router } from '@angular/router';
import { Klijent } from 'app/model/klijent';


@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {

  newRezervacija: Rezervacija = new Rezervacija();
  idSto: number; 
  idRestorana: number;
  postojiDugme: boolean = true; 
  private sub: any; 
  isDataAvailable: boolean; 
  klijent: Klijent;
 
  constructor(private rezervacijaService : RezervacijaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.isDataAvailable = false;
      this.idRestorana = +params['restoranId'];
      this.idSto = +params['id'];

      this.klijent = JSON.parse(localStorage.getItem('korisnik'));
    if(this.klijent != null ){
    }

      // if(params['id'] != null){
      //   this.id = +params['id']; // (+) konvertuje string 'id' u broj
      //   //id postavljamo kao path parametar pomocu interpolacije stringa
      //   if(this.id != null )
      //   { 
      //     this.postojiDugme = false; //znaci da hoce da azurira
      //     this.rezervacijaService.add(this.newRezervacija).subscribe(
      //       s => {
      //         this.newRezervacija = s;
      //       }
      //     )
      //   }
      // }
   });
    
  }

  add(id: number){
    //popuniti podatke
    this.newRezervacija.restoran.id = this.idRestorana;
    this.newRezervacija.rezervisanSto.id = this.idSto;
    this.newRezervacija.klijent= this.klijent;
    this.rezervacijaService.add(this.newRezervacija).subscribe(
      s => {
        this.newRezervacija = s;
        this.router.navigate(['prikazStolova/' + this.idRestorana]);
  
      }
    );
  }

  

  goBack(){
    //prikazStolova/:id
    this.router.navigate(['prikazStolova/' + this.idRestorana]);
  }
}
