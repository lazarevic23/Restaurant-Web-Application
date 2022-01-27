import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatingModule } from "ngx-rating";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HInterceptorService } from './h-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { PrikazRestoranaComponent } from './component/prikaz-restorana/prikaz-restorana.component';
import { RestoraniService } from './service/restorani.service';
import { KreiranjeIazuriranjeRestoranaComponent } from './component/kreiranje-iazuriranje-restorana/kreiranje-iazuriranje-restorana.component';
import { PrikazStolovaComponent } from './component/prikaz-stolova/prikaz-stolova.component';
import { KreiranjeIazuriranjeStolovaComponent } from './component/kreiranje-iazuriranje-stolova/kreiranje-iazuriranje-stolova.component';
import { StoService } from './service/sto.service';
import { RegistracijaComponent } from './component/registracija/registracija.component';
import { KlijentService } from './service/klijent.service';
import { MeniBarComponent } from './component/meni-bar/meni-bar.component';
import { OcenaService } from './service/ocena.service';
import { RezervacijaComponent } from './component/rezervacija/rezervacija.component';
import { RezervacijaService } from './service/rezervacija.service';
import { OtkazivanjeRezervacijeComponent } from './component/otkazivanje-rezervacije/otkazivanje-rezervacije.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },


  { path: 'restorani', component: PrikazRestoranaComponent },
  { path: 'dodavanjeRestorana', component: KreiranjeIazuriranjeRestoranaComponent }, //kreiranje
  { path: 'dodavanjeRestorana/:id', component: KreiranjeIazuriranjeRestoranaComponent },  //azuriranje
  { path: 'prikazStolova/:id', component: PrikazStolovaComponent },
  { path: 'dodavanjeStolova/:restoranId/stolovi', component: KreiranjeIazuriranjeStolovaComponent }, //kreiranje
  { path: 'dodavanjeStolova/:restoranId/stolovi/:id', component: KreiranjeIazuriranjeStolovaComponent }, //azuriranje
  
  { path: 'login', component: LoginComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'rezervacija/:restoranId/sto/:id', component: RezervacijaComponent}, 
  { path: 'otkazivanje', component: OtkazivanjeRezervacijeComponent}, 

  
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    PrikazRestoranaComponent,
    KreiranjeIazuriranjeRestoranaComponent,
    PrikazStolovaComponent,
    KreiranjeIazuriranjeStolovaComponent,
    RegistracijaComponent,
    MeniBarComponent,
    RezervacijaComponent,
    OtkazivanjeRezervacijeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    RatingModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ //registrujem servise obaveznoo!!!!!!
    RestoraniService,
    StoService,
    OcenaService,
    KlijentService,
    RezervacijaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
