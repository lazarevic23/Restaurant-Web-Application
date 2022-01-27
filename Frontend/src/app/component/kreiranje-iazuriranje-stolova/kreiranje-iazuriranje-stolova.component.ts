import { Component, OnInit } from '@angular/core';
import { Sto } from 'app/model/sto';
import { ActivatedRoute, Router } from '@angular/router';
import { StoService } from 'app/service/sto.service';

@Component({
  selector: 'app-kreiranje-iazuriranje-stolova',
  templateUrl: './kreiranje-iazuriranje-stolova.component.html',
  styleUrls: ['./kreiranje-iazuriranje-stolova.component.css']
})
export class KreiranjeIazuriranjeStolovaComponent implements OnInit {

  newSto: Sto = new Sto();
  id: number;
  idRestorana: number;
  postojiDugme: boolean = true;
  private sub: any;
  isDataAvailable: boolean;
  
  constructor(private stoService : StoService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.isDataAvailable = false;
      this.idRestorana = +params['restoranId'];
      if(params['id'] != null){
        this.id = +params['id']; // (+) konvertuje string 'id' u broj
        //id postavljamo kao path parametar pomocu interpolacije stringa
        if(this.id != null )
        { 
          this.postojiDugme = false; //znaci da hoce da azurira
          this.stoService.findOne(this.id).subscribe(
            s => {
              this.newSto = s;
            }
          )
        }
      }
   });
  }
  
  add(){
    //alert('dodajem')
    this.stoService.add(this.newSto, this.idRestorana).subscribe(
      s => {
        this.newSto = s;
        this.router.navigate(['restorani']);
  
      }
    );
  }
  
  update(){ 
   this.stoService.update(this.id, this.newSto, this.idRestorana).subscribe(
     s => {
      this.newSto = s;
      this.router.navigate(['restorani']);
     }
   );
  }
  
  goBack(){
    
    this.router.navigate(['restorani']);
  }
  
  }
  
