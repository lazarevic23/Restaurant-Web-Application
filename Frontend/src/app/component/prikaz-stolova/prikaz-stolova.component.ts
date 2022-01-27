import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoraniService } from 'app/service/restorani.service';
import { Sto } from 'app/model/sto';
import { StoService } from 'app/service/sto.service';
import { Klijent } from 'app/model/klijent';


@Component({
  selector: 'app-prikaz-stolova',
  templateUrl: './prikaz-stolova.component.html',
  styleUrls: ['./prikaz-stolova.component.css']
})
export class PrikazStolovaComponent implements OnInit {

  
  id: number;
  postojiDugme: boolean = true;
  private sub: any;
  isDataAvailable: boolean;
  listaStolova: Sto[] = [];
  vidiAdmin: boolean = false;
  vidiRegistrovani: boolean = false;
  klijent: Klijent; 

  constructor(private restoraniService : RestoraniService,  private route: ActivatedRoute, private router: Router, private stoService : StoService) { 
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
    this.sub = this.route.params.subscribe(params => {
      this.isDataAvailable = false;
      if(params['id'] != null){
        this.id = +params['id']; // (+) konvertuje string 'id' u broj
        //id postavljamo kao path parametar pomocu interpolacije stringa
        if(this.id != null )
        { 
          this.restoraniService.nadjiStolove(this.id).subscribe(
            s => {
              this.listaStolova = s;
            }
          )
        }
      }
   });
  }

  IzmeniSto(idSto: number){
    
    this.router.navigate(['dodavanjeStolova/' + this.id + '/stolovi/' + idSto]);
  }

  ObrisiSto(idSto: number){
    var txt;
    var r = confirm("Da li ste sigurni da želite da obrišete sto?");
    if (r == true) {
      txt = "You pressed OK!";
    this.stoService.delete(idSto).subscribe(
      s => {
        this.router.navigate(['restorani']);
      }, 
      err => {
        alert('error');
      }
    )
  } else {
    txt = "You pressed Cancel!"
  }
  
  }

  RezervisiSto(idSto: number){
    //rezervacija/:restoranId/sto/:id
    this.router.navigate(['rezervacija/' + this.id + '/sto/' + idSto]);
  }

 
  
}
