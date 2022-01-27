import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoraniService } from 'app/service/restorani.service';
import { Restoran } from 'app/model/restoran';

@Component({
  selector: 'app-kreiranje-iazuriranje-restorana',
  templateUrl: './kreiranje-iazuriranje-restorana.component.html',
  styleUrls: ['./kreiranje-iazuriranje-restorana.component.css']
})
export class KreiranjeIazuriranjeRestoranaComponent implements OnInit {

newRestoran: Restoran = new Restoran();
id: number;
postojiDugme: boolean = true;
private sub: any;
isDataAvailable: boolean;

constructor(private restoraniService : RestoraniService, private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    this.isDataAvailable = false;
    if(params['id'] != null){
      this.id = +params['id']; // (+) konvertuje string 'id' u broj
      //id postavljamo kao path parametar pomocu interpolacije stringa
      if(this.id != null )
      { 
        this.postojiDugme = false; //znaci da hoce da azurira
        this.restoraniService.findOne(this.id).subscribe(
          s => {
            this.newRestoran = s;
          }
        )
      }
    }
 });
}

add(){
  //alert('dodajem')
  this.restoraniService.add(this.newRestoran).subscribe(
    s => {
      this.newRestoran = s;
      this.router.navigate(['restorani']);

    }
  );
}

update(){ 
 this.restoraniService.update(this.id, this.newRestoran).subscribe(
   s => {
    this.newRestoran = s;
    this.router.navigate(['restorani']);
   }
 );
}

goBack(){
  this.router.navigate(['restorani']);
}

}
