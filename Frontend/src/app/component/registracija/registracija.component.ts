import { Component, OnInit } from '@angular/core';
import { Klijent } from 'app/model/klijent';
import { KlijentService } from 'app/service/klijent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  klijent: Klijent = new Klijent();
  constructor(private klijentServis: KlijentService, private router: Router) { }

  ngOnInit() {
  }

  registrovanje(){
    this.klijent.vrstaKlijenta = "Registrovani";
    this.klijentServis.registrovanje(this.klijent).subscribe(
      s => {
        this.klijent = s;
        this.router.navigate(['login']);
      }
    )
  }
}
