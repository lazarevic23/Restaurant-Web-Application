import { Component, OnInit } from '@angular/core';
import { Restoran } from 'app/model/restoran';
import { RestoraniService } from 'app/service/restorani.service';
import { Router } from '@angular/router';
import { Klijent } from 'app/model/klijent';
import { OcenaService } from 'app/service/ocena.service';
import { Ocena } from 'app/model/ocena';

@Component({
  selector: 'app-prikaz-restorana',
  templateUrl: './prikaz-restorana.component.html',
  styleUrls: ['./prikaz-restorana.component.css']
})
export class PrikazRestoranaComponent implements OnInit {

  restorani: Restoran[] = [];
  temp: number = 3.5;
  vidiAdmin: boolean = false;
  vidiRegistrovani: boolean = false;
  klijent: Klijent;
  listaOcena: Ocena[] = [];
  constructor(private restoraniService : RestoraniService, private ocenaService : OcenaService, private router: Router ) { 
    this.klijent = JSON.parse(localStorage.getItem('korisnik'));
    if(this.klijent != null ){
      if(this.klijent.vrstaKlijenta == "Admin"){
        this.vidiAdmin = true;
      }
      if(this.klijent.vrstaKlijenta == "Registrovani"){
        this.vidiRegistrovani = true;
      }
    }
  }

  ngOnInit() {
    //this.restoran.adresa = "neka adresa";
    //this.restoran.naziv = "naziv";


    //alert(this.restoran.adresa + "iz inita");

    this.vratiSve();

  }

  vratiSve(){
    this.restoraniService.findAll().subscribe(
      succ => {
        this.restorani = succ;
        this.restorani.forEach(element => {
          this.listaOcena.push(new Ocena());
        });
      },
      err => {
        alert('desio se error kod loadovanja restorana');
      }
    )
  }

  VidiStolove(id: number) {
    this.router.navigate(['prikazStolova/'+ id]);
  }

  IzmeniRestoran(id: number){
    this.router.navigate(['dodavanjeRestorana/' + id]);
  }

  ObrisiRestoran(id: number) {
    //provera prvo
    var txt;
    var r = confirm("Da li ste sigurni da želite da obrišete restoran?");
    if (r == true) {
      txt = "You pressed OK!";
      this.restoraniService.delete(id).subscribe(
        succ => {
          this.vratiSve();
        },
        err => {
          alert('error');
        }
      )
    } else {
      txt = "You pressed Cancel!";
    }
  }

  kreirajSto(restoranId: number){
    this.router.navigate(['dodavanjeStolova/' + restoranId + '/stolovi']);
  }
    
  oceniServis(restoran: Restoran, ocena: Ocena){
    //popunis
   ocena.klijent = this.klijent;
   ocena.restoran = restoran;
    //pozoves metodu
    this.ocenaService.create(ocena).subscribe(
      s => {
      }
    )
  }

}
