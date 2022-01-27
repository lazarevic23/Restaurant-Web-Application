import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Klijent } from 'app/model/klijent';

@Component({
  selector: 'app-meni-bar',
  templateUrl: './meni-bar.component.html',
  styleUrls: ['./meni-bar.component.css']
})
export class MeniBarComponent implements OnInit {
  menubarPrikazan = false; 
  klijent: Klijent;
  vidiAdmin: boolean = false;
  sakrijOdjavise: boolean = true;
  vidiRegistrovani: boolean = false;

  constructor(private router: Router){
    this.klijent = JSON.parse(localStorage.getItem('korisnik'));
    if(this.klijent != null ){
      if(this.klijent.vrstaKlijenta == "Admin"){
        this.vidiAdmin = true;
      }

      if(this.klijent.vrstaKlijenta == "Registrovani"){
        this.vidiRegistrovani = true;
      }
    }
    else{
      this.sakrijOdjavise = false;
    }
    
  }

  ngOnInit() {
  }

  prebaciMeNaRestorane(){
    this.router.navigate(['restorani']);
  }

  kreirajNoviRestoran(){
    this.router.navigate(['dodavanjeRestorana']);
  }

  // oceniRestoran(){
  //  //this.router.navigate(['restorani']);
  // }

  kreirajSto(){
    this.router.navigate(['dodavanjeStolova']);
  }

  odjaviSe(){
    localStorage.removeItem('korisnik');
    this.router.navigate(['login']);
  }

  toggleMenubar(){
    this.menubarPrikazan = !this.menubarPrikazan;
  }

}
