import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Klijent } from 'app/model/klijent';
import { KlijentService } from 'app/service/klijent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  klijent: Klijent = new Klijent();
 routes = [];
 lozinka: string = "";
 email: string = "";

  constructor(private klijentServis: KlijentService, private router: Router) { 
  }

  ngOnInit() {
  }

 login(){

  console.log(this.email);
  console.log(this.lozinka);
  // var k = new Klijent();
  // k.email = "peraperic@gmail.com";
  // k.imeIPrezime = "pera peric";
  // k.id = 1;
  // k.lozinka = "peraperic";
  // k.vrstaKlijenta = "Admin";
  // localStorage.setItem('korisnik', JSON.stringify(k));
  this.klijentServis.logovanje(this.email, this.lozinka).subscribe(
    s => {
      this.klijent = s;
      localStorage.setItem('korisnik', JSON.stringify(this.klijent));
      this.router.navigate(['restorani']);
    }
  )
  
  }

}
