import { Component, OnInit } from '@angular/core';
import { RezervacijaService } from 'app/service/rezervacija.service';
import { Klijent } from 'app/model/klijent';
import { Rezervacija } from 'app/model/rezervacija';
import { Restoran } from 'app/model/restoran';

@Component({
  selector: 'app-otkazivanje-rezervacije',
  templateUrl: './otkazivanje-rezervacije.component.html',
  styleUrls: ['./otkazivanje-rezervacije.component.css']
})
export class OtkazivanjeRezervacijeComponent implements OnInit {

  klijent: Klijent;
  listaRezervacija: Rezervacija[] = [];
  //restorani: Restoran[] = [];  
  constructor(private rezervacijaServis: RezervacijaService) { }

  ngOnInit() {
    this.klijent = JSON.parse(localStorage.getItem('korisnik'));
    if(this.klijent != null ){
      this.getAll();
    }
  }

  getAll(){
    this.rezervacijaServis.findAll(this.klijent.id).subscribe(
      s => {
        this.listaRezervacija = s;
        
      }
      
    )
  }

  Otkazi(id: number){
    var txt;
    var r = confirm("Da li ste sigurni da želite da otkažete rezervaciju?");
    if (r == true) {
      txt = "You pressed OK!";
    this.rezervacijaServis.delete(id).subscribe(
      s => {
        this.getAll();
      },
      err => {
        alert('error');
      }
    )
  } else {
    txt = "You pressed Cancel!"
  }
    
  
  }
}
