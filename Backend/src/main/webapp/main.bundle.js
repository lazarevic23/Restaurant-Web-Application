webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ngx_pagination_1 = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
var ngx_rating_1 = __webpack_require__("./node_modules/ngx-rating/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var h_interceptor_service_1 = __webpack_require__("./src/app/h-interceptor.service.ts");
var http_3 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var login_component_1 = __webpack_require__("./src/app/component/login/login.component.ts");
var prikaz_restorana_component_1 = __webpack_require__("./src/app/component/prikaz-restorana/prikaz-restorana.component.ts");
var restorani_service_1 = __webpack_require__("./src/app/service/restorani.service.ts");
var kreiranje_iazuriranje_restorana_component_1 = __webpack_require__("./src/app/component/kreiranje-iazuriranje-restorana/kreiranje-iazuriranje-restorana.component.ts");
var prikaz_stolova_component_1 = __webpack_require__("./src/app/component/prikaz-stolova/prikaz-stolova.component.ts");
var kreiranje_iazuriranje_stolova_component_1 = __webpack_require__("./src/app/component/kreiranje-iazuriranje-stolova/kreiranje-iazuriranje-stolova.component.ts");
var sto_service_1 = __webpack_require__("./src/app/service/sto.service.ts");
var registracija_component_1 = __webpack_require__("./src/app/component/registracija/registracija.component.ts");
var klijent_service_1 = __webpack_require__("./src/app/service/klijent.service.ts");
var meni_bar_component_1 = __webpack_require__("./src/app/component/meni-bar/meni-bar.component.ts");
var ocena_service_1 = __webpack_require__("./src/app/service/ocena.service.ts");
var rezervacija_component_1 = __webpack_require__("./src/app/component/rezervacija/rezervacija.component.ts");
var rezervacija_service_1 = __webpack_require__("./src/app/service/rezervacija.service.ts");
var otkazivanje_rezervacije_component_1 = __webpack_require__("./src/app/component/otkazivanje-rezervacije/otkazivanje-rezervacije.component.ts");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'restorani', component: prikaz_restorana_component_1.PrikazRestoranaComponent },
    { path: 'dodavanjeRestorana', component: kreiranje_iazuriranje_restorana_component_1.KreiranjeIazuriranjeRestoranaComponent },
    { path: 'dodavanjeRestorana/:id', component: kreiranje_iazuriranje_restorana_component_1.KreiranjeIazuriranjeRestoranaComponent },
    { path: 'prikazStolova/:id', component: prikaz_stolova_component_1.PrikazStolovaComponent },
    { path: 'dodavanjeStolova/:restoranId/stolovi', component: kreiranje_iazuriranje_stolova_component_1.KreiranjeIazuriranjeStolovaComponent },
    { path: 'dodavanjeStolova/:restoranId/stolovi/:id', component: kreiranje_iazuriranje_stolova_component_1.KreiranjeIazuriranjeStolovaComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registracija', component: registracija_component_1.RegistracijaComponent },
    { path: 'rezervacija/:restoranId/sto/:id', component: rezervacija_component_1.RezervacijaComponent },
    { path: 'otkazivanje', component: otkazivanje_rezervacije_component_1.OtkazivanjeRezervacijeComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.PageNotFoundComponent,
                login_component_1.LoginComponent,
                prikaz_restorana_component_1.PrikazRestoranaComponent,
                kreiranje_iazuriranje_restorana_component_1.KreiranjeIazuriranjeRestoranaComponent,
                prikaz_stolova_component_1.PrikazStolovaComponent,
                kreiranje_iazuriranje_stolova_component_1.KreiranjeIazuriranjeStolovaComponent,
                registracija_component_1.RegistracijaComponent,
                meni_bar_component_1.MeniBarComponent,
                rezervacija_component_1.RezervacijaComponent,
                otkazivanje_rezervacije_component_1.OtkazivanjeRezervacijeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                ngx_pagination_1.NgxPaginationModule,
                ngx_rating_1.RatingModule,
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [
                restorani_service_1.RestoraniService,
                sto_service_1.StoService,
                ocena_service_1.OcenaService,
                klijent_service_1.KlijentService,
                rezervacija_service_1.RezervacijaService,
                {
                    provide: http_3.HTTP_INTERCEPTORS,
                    useClass: h_interceptor_service_1.HInterceptorService,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/component/kreiranje-iazuriranje-restorana/kreiranje-iazuriranje-restorana.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/kreiranje-iazuriranje-restorana/kreiranje-iazuriranje-restorana.component.html":
/***/ (function(module, exports) {

module.exports = "<app-meni-bar></app-meni-bar>\n\n<div class=\"container\" style=\"display: flex; justify-content: center;\">\n  <div class=\"col-md-5 form\">\n      <div class=\"form-area\">  \n          <form role=\"form\"  #formPredmet=\"ngForm\">\n          <br style=\"clear:both\">\n                      <h3 style=\"margin-bottom: 25px; text-align: center;\">Restoran</h3>\n              <div class=\"form-group\">\n              <label>Naziv restorana: </label>\n            \n              <input type=\"text\" class=\"form-control\"  minlength=\"3\"  maxlength=\"30\" id=\"naziv\" name=\"naziv\" placeholder=\"Naziv restorana\" required [(ngModel)] = \"newRestoran.naziv\">\n            </div>\n            <div class=\"form-group\">\n              <label>Adresa restorana: </label>\n              <input type=\"text\" class=\"form-control\" minlength=\"3\" maxlength=\"30\" id=\"adresa\" name=\"adresa\" placeholder=\"Adresa restorana\" required [(ngModel)] = \"newRestoran.adresa\">\n            </div>\n            <div class=\"form-group\">\n                <label>Kontakt restorana: </label>\n                <input type=\"text\" class=\"form-control\"  minlength=\"3\"  maxlength=\"30\" id=\"kontakt\" name=\"kontakt\" placeholder=\"Kontakt restorana\" required [(ngModel)] = \"newRestoran.kontakt\">\n              </div>\n            <button  *ngIf=\"postojiDugme\" type=\"button\" [disabled]=\"!formPredmet.valid\" id=\"submit\" name=\"submit\" class=\"btn btn-success pull-right\" (click)=\"add()\">Dodaj</button>\n            <button *ngIf=\"!postojiDugme\" type=\"button\" [disabled]=\"!formPredmet.valid\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"update()\">Azuriraj</button>\n            <button type=\"button\" id=\"submit\" name=\"submit\" (click)=\"goBack() \" class=\"btn btn-danger\" >Odustani</button>\n          </form>\n\n      </div>\n  </div>  \n  </div>"

/***/ }),

/***/ "./src/app/component/kreiranje-iazuriranje-restorana/kreiranje-iazuriranje-restorana.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var restorani_service_1 = __webpack_require__("./src/app/service/restorani.service.ts");
var restoran_1 = __webpack_require__("./src/app/model/restoran.ts");
var KreiranjeIazuriranjeRestoranaComponent = /** @class */ (function () {
    function KreiranjeIazuriranjeRestoranaComponent(restoraniService, route, router) {
        this.restoraniService = restoraniService;
        this.route = route;
        this.router = router;
        this.newRestoran = new restoran_1.Restoran();
        this.postojiDugme = true;
    }
    KreiranjeIazuriranjeRestoranaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.isDataAvailable = false;
            if (params['id'] != null) {
                _this.id = +params['id']; // (+) konvertuje string 'id' u broj
                //id postavljamo kao path parametar pomocu interpolacije stringa
                if (_this.id != null) {
                    _this.postojiDugme = false; //znaci da hoce da azurira
                    _this.restoraniService.findOne(_this.id).subscribe(function (s) {
                        _this.newRestoran = s;
                    });
                }
            }
        });
    };
    KreiranjeIazuriranjeRestoranaComponent.prototype.add = function () {
        var _this = this;
        //alert('dodajem')
        this.restoraniService.add(this.newRestoran).subscribe(function (s) {
            _this.newRestoran = s;
            _this.router.navigate(['restorani']);
        });
    };
    KreiranjeIazuriranjeRestoranaComponent.prototype.update = function () {
        var _this = this;
        this.restoraniService.update(this.id, this.newRestoran).subscribe(function (s) {
            _this.newRestoran = s;
            _this.router.navigate(['restorani']);
        });
    };
    KreiranjeIazuriranjeRestoranaComponent.prototype.goBack = function () {
        this.router.navigate(['restorani']);
    };
    KreiranjeIazuriranjeRestoranaComponent = __decorate([
        core_1.Component({
            selector: 'app-kreiranje-iazuriranje-restorana',
            template: __webpack_require__("./src/app/component/kreiranje-iazuriranje-restorana/kreiranje-iazuriranje-restorana.component.html"),
            styles: [__webpack_require__("./src/app/component/kreiranje-iazuriranje-restorana/kreiranje-iazuriranje-restorana.component.css")]
        }),
        __metadata("design:paramtypes", [restorani_service_1.RestoraniService, router_1.ActivatedRoute, router_1.Router])
    ], KreiranjeIazuriranjeRestoranaComponent);
    return KreiranjeIazuriranjeRestoranaComponent;
}());
exports.KreiranjeIazuriranjeRestoranaComponent = KreiranjeIazuriranjeRestoranaComponent;


/***/ }),

/***/ "./src/app/component/kreiranje-iazuriranje-stolova/kreiranje-iazuriranje-stolova.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/kreiranje-iazuriranje-stolova/kreiranje-iazuriranje-stolova.component.html":
/***/ (function(module, exports) {

module.exports = "<app-meni-bar></app-meni-bar>\n\n<div class=\"container\" style=\"display: flex; justify-content: center;\">\n  <div class=\"col-md-5 form\">\n      <div class=\"form-area\">  \n          <form role=\"form\"  #formPredmet=\"ngForm\">\n          <br style=\"clear:both\">\n                      <h3 style=\"margin-bottom: 25px; text-align: center;\">Sto</h3>\n              <div class=\"form-group\">\n              <label>Broj stola</label>\n              <input type=\"text\" class=\"form-control\"  id=\"brojStola\" name=\"brojStola\" placeholder=\"brojStola\" required [(ngModel)] = \"newSto.brojStola\">\n            </div>\n            <div class=\"form-group\">\n              <label>Broj mesta</label>\n              <input type=\"text\" class=\"form-control\"  id=\"brojMesta\" name=\"brojMesta\" placeholder=\"brojMesta\" required [(ngModel)] = \"newSto.brojMesta\">\n            </div>\n            <button  *ngIf=\"postojiDugme\" type=\"button\" [disabled]=\"!formPredmet.valid\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"add()\">Dodaj</button>\n            <button *ngIf=\"!postojiDugme\" type=\"button\" [disabled]=\"!formPredmet.valid\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"update()\">Azuriraj</button>\n            <button type=\"button\" id=\"submit\" name=\"submit\" (click)=\"goBack()\">Odustani</button>\n          </form>\n\n      </div>\n  </div>  \n  </div>\n"

/***/ }),

/***/ "./src/app/component/kreiranje-iazuriranje-stolova/kreiranje-iazuriranje-stolova.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var sto_1 = __webpack_require__("./src/app/model/sto.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var sto_service_1 = __webpack_require__("./src/app/service/sto.service.ts");
var KreiranjeIazuriranjeStolovaComponent = /** @class */ (function () {
    function KreiranjeIazuriranjeStolovaComponent(stoService, route, router) {
        this.stoService = stoService;
        this.route = route;
        this.router = router;
        this.newSto = new sto_1.Sto();
        this.postojiDugme = true;
    }
    KreiranjeIazuriranjeStolovaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.idRestorana = +params['restoranId'];
            if (params['id'] != null) {
                _this.id = +params['id']; // (+) konvertuje string 'id' u broj
                //id postavljamo kao path parametar pomocu interpolacije stringa
                if (_this.id != null) {
                    _this.postojiDugme = false; //znaci da hoce da azurira
                    _this.stoService.findOne(_this.id).subscribe(function (s) {
                        _this.newSto = s;
                    });
                }
            }
        });
    };
    KreiranjeIazuriranjeStolovaComponent.prototype.add = function () {
        var _this = this;
        //alert('dodajem')
        this.stoService.add(this.newSto, this.idRestorana).subscribe(function (s) {
            _this.newSto = s;
            _this.router.navigate(['restorani']);
        });
    };
    KreiranjeIazuriranjeStolovaComponent.prototype.update = function () {
        var _this = this;
        this.stoService.update(this.id, this.newSto, this.idRestorana).subscribe(function (s) {
            _this.newSto = s;
            _this.router.navigate(['restorani']);
        });
    };
    KreiranjeIazuriranjeStolovaComponent.prototype.goBack = function () {
        this.router.navigate(['restorani']);
    };
    KreiranjeIazuriranjeStolovaComponent = __decorate([
        core_1.Component({
            selector: 'app-kreiranje-iazuriranje-stolova',
            template: __webpack_require__("./src/app/component/kreiranje-iazuriranje-stolova/kreiranje-iazuriranje-stolova.component.html"),
            styles: [__webpack_require__("./src/app/component/kreiranje-iazuriranje-stolova/kreiranje-iazuriranje-stolova.component.css")]
        }),
        __metadata("design:paramtypes", [sto_service_1.StoService, router_1.ActivatedRoute, router_1.Router])
    ], KreiranjeIazuriranjeStolovaComponent);
    return KreiranjeIazuriranjeStolovaComponent;
}());
exports.KreiranjeIazuriranjeStolovaComponent = KreiranjeIazuriranjeStolovaComponent;


/***/ }),

/***/ "./src/app/component/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-meni-bar></app-meni-bar>\n\n<div class=\"container\">\n\n  <form class=\"well form-horizontal\" action=\" \" method=\"post\"  id=\"contact_form\" (ngSubmit)=\"login()\">\n  <fieldset>\n\n  <!-- Form Name -->\n  <h2 style=\"margin-bottom: 25px; text-align: center;\" ><b> Prijava </b></h2><br>\n\n    <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Email:</label>  \n          <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n        <input name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email adresa\" class=\"form-control\"  type=\"text\">\n          </div>\n        </div>\n      </div>  \n      <!-- Text input-->\n      \n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" >Lozinka:</label> \n          <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n        <input name=\"user_password\" [(ngModel)]=\"lozinka\" placeholder=\"Lozinka\" class=\"form-control\"  type=\"password\">\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group text-center\">\n          <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n          <label for=\"remember\"> Zapamti me</label>\n        </div>\n    <!-- Button -->\n    <div class=\"form-group text-center\">\n      <label class=\"col-md-4 control-label\"></label>\n      <div class=\"col-md-4\"><br>\n      <input type=\"submit\" class=\"btn btn-warning\"  value=\"Prijavi se \">\n      </div>\n    </div>\n    </fieldset>\n    </form>\n</div>\n  <!-- </form>\n\n</div> -->\n"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var klijent_1 = __webpack_require__("./src/app/model/klijent.ts");
var klijent_service_1 = __webpack_require__("./src/app/service/klijent.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(klijentServis, router) {
        this.klijentServis = klijentServis;
        this.router = router;
        this.klijent = new klijent_1.Klijent();
        this.routes = [];
        this.lozinka = "";
        this.email = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.email);
        console.log(this.lozinka);
        this.klijentServis.logovanje(this.email, this.lozinka).subscribe(function (s) {
            _this.klijent = s;
            localStorage.setItem('korisnik', JSON.stringify(_this.klijent));
            _this.router.navigate(['restorani']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/component/login/login.component.html"),
            styles: [__webpack_require__("./src/app/component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [klijent_service_1.KlijentService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/component/meni-bar/meni-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/meni-bar/meni-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-inverse \">\n  <div class=\"container-fluid\">\n    <!-- <div class=\"navbar-header\">\n      <a  class=\"navbar-brand\" > </a> \n      \n    </div> -->\n    <ul class=\"nav navbar-nav\">\n      <!-- svi -->  <li class=\"active\"><a [routerLink] = \"['/restorani']\">Prikaži restorane</a></li>\n      <li class=\"active\" *ngIf = \"vidiAdmin\"><a [routerLink] = \"['/dodavanjeRestorana']\">Kreiraj restoran</a></li>\n      <li class=\"active\"*ngIf = \"vidiRegistrovani\" ><a [routerLink] = \"['/otkazivanje']\">Moje rezervacije</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n     <!-- svi --> <li class=\"active\"  ><a  [routerLink] = \"['/registracija']\"> <span class=\"glyphicon glyphicon-user\"></span> Registracija </a></li>\n      <!-- svi --> <li class=\"active\"><a [routerLink] = \"['/login']\" ><span class=\"glyphicon glyphicon-log-in\"></span> Prijava </a></li>\n      <li  *ngIf = \"sakrijOdjavise\" class=\"active\"><a (click)=\"odjaviSe()\"><span ></span> Odjava </a></li>\n    </ul>\n  </div>\n</nav> \n\n\n\n  \n \n  \n\n  \n  "

/***/ }),

/***/ "./src/app/component/meni-bar/meni-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var MeniBarComponent = /** @class */ (function () {
    function MeniBarComponent(router) {
        this.router = router;
        this.vidiAdmin = false;
        this.sakrijOdjavise = true;
        this.vidiRegistrovani = false;
        this.klijent = JSON.parse(localStorage.getItem('korisnik'));
        if (this.klijent != null) {
            if (this.klijent.vrstaKlijenta == "Admin") {
                this.vidiAdmin = true;
            }
            if (this.klijent.vrstaKlijenta == "Registrovani") {
                this.vidiRegistrovani = true;
            }
        }
        else {
            this.sakrijOdjavise = false;
        }
    }
    MeniBarComponent.prototype.ngOnInit = function () {
    };
    MeniBarComponent.prototype.prebaciMeNaRestorane = function () {
        this.router.navigate(['restorani']);
    };
    MeniBarComponent.prototype.kreirajNoviRestoran = function () {
        this.router.navigate(['dodavanjeRestorana']);
    };
    // oceniRestoran(){
    //  //this.router.navigate(['restorani']);
    // }
    MeniBarComponent.prototype.kreirajSto = function () {
        this.router.navigate(['dodavanjeStolova']);
    };
    MeniBarComponent.prototype.odjaviSe = function () {
        localStorage.removeItem('korisnik');
        this.router.navigate(['login']);
    };
    MeniBarComponent = __decorate([
        core_1.Component({
            selector: 'app-meni-bar',
            template: __webpack_require__("./src/app/component/meni-bar/meni-bar.component.html"),
            styles: [__webpack_require__("./src/app/component/meni-bar/meni-bar.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], MeniBarComponent);
    return MeniBarComponent;
}());
exports.MeniBarComponent = MeniBarComponent;


/***/ }),

/***/ "./src/app/component/otkazivanje-rezervacije/otkazivanje-rezervacije.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/otkazivanje-rezervacije/otkazivanje-rezervacije.component.html":
/***/ (function(module, exports) {

module.exports = "<app-meni-bar></app-meni-bar>\n\n\n<div   *ngFor = \"let i = index; let rezervacije of listaRezervacija\"> \n  \n  <h4 class=\"list-group-item-text\">Naziv restorana: {{rezervacije.restoran.naziv}}</h4> \n  <h4 class=\"list-group-item-text\">Broj stola: {{rezervacije.rezervisanSto.brojStola}}</h4>\n  \n<h4 class=\"list-group-item-text\">Vreme rezervacije: {{rezervacije.vremeRezervacije}}</h4>\n  <button  (click) = \"Otkazi(rezervacije.id)\"  class=\"btn btn-success\" > Otkaži rezervaciju</button>\n  \n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/component/otkazivanje-rezervacije/otkazivanje-rezervacije.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rezervacija_service_1 = __webpack_require__("./src/app/service/rezervacija.service.ts");
var OtkazivanjeRezervacijeComponent = /** @class */ (function () {
    //restorani: Restoran[] = [];  
    function OtkazivanjeRezervacijeComponent(rezervacijaServis) {
        this.rezervacijaServis = rezervacijaServis;
        this.listaRezervacija = [];
    }
    OtkazivanjeRezervacijeComponent.prototype.ngOnInit = function () {
        this.klijent = JSON.parse(localStorage.getItem('korisnik'));
        if (this.klijent != null) {
            this.getAll();
        }
    };
    OtkazivanjeRezervacijeComponent.prototype.getAll = function () {
        var _this = this;
        this.rezervacijaServis.findAll(this.klijent.id).subscribe(function (s) {
            _this.listaRezervacija = s;
        });
    };
    OtkazivanjeRezervacijeComponent.prototype.Otkazi = function (id) {
        var _this = this;
        var txt;
        var r = confirm("Da li ste sigurni da želite da otkažete rezervaciju?");
        if (r == true) {
            txt = "You pressed OK!";
            this.rezervacijaServis.delete(id).subscribe(function (s) {
                _this.getAll();
            }, function (err) {
                alert('error');
            });
        }
        else {
            txt = "You pressed Cancel!";
        }
    };
    OtkazivanjeRezervacijeComponent = __decorate([
        core_1.Component({
            selector: 'app-otkazivanje-rezervacije',
            template: __webpack_require__("./src/app/component/otkazivanje-rezervacije/otkazivanje-rezervacije.component.html"),
            styles: [__webpack_require__("./src/app/component/otkazivanje-rezervacije/otkazivanje-rezervacije.component.css")]
        }),
        __metadata("design:paramtypes", [rezervacija_service_1.RezervacijaService])
    ], OtkazivanjeRezervacijeComponent);
    return OtkazivanjeRezervacijeComponent;
}());
exports.OtkazivanjeRezervacijeComponent = OtkazivanjeRezervacijeComponent;


/***/ }),

/***/ "./src/app/component/prikaz-restorana/prikaz-restorana.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/prikaz-restorana/prikaz-restorana.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-meni-bar></app-meni-bar>\n\n\n\n<!-- \nrestoran{{i}}.jpg -->\n<div *ngFor = \"let i = index; let restorancic of restorani\"> \n  <h4 class=\"list-group-item-text\">Naziv restorana: {{restorancic.naziv}}</h4>\n  <h4 class=\"list-group-item-text\">Adresa restorana: {{restorancic.adresa}}</h4>\n  <h4 class=\"list-group-item-text\">Kontakt restorana: {{restorancic.kontakt}}</h4>\n  <img class=\"group list-group-image img-fluid\" style=\"width: 250px; height: 150px;\" src=\"assets/A{{i+1}}.jpg\" alt=\"nece\" />\n  <div>\n    <button  (click) = \"VidiStolove(restorancic.id)\"  class=\"btn btn-success\" > Prikazi stolove</button>\n    <button  *ngIf = \"vidiAdmin\" (click) = \"kreirajSto(restorancic.id)\" class=\"btn btn-success\" >Kreiraj sto</button>\n    <button *ngIf = \"vidiAdmin\" (click) =  \"ObrisiRestoran(restorancic.id)\" class=\"btn btn-success\" >Obriši restoran</button>\n    <button  *ngIf = \"vidiAdmin\" (click) = \"IzmeniRestoran(restorancic.id)\"  class=\"btn btn-success\"  >Izmeni restoran</button>\n  </div>\n\n  \n  <div><rating  *ngIf = \"vidiRegistrovani\" (click)=\"oceniServis(restorancic, listaOcena[i])\" [(ngModel)]=\"listaOcena[i].ocena\" ></rating>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/component/prikaz-restorana/prikaz-restorana.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var restorani_service_1 = __webpack_require__("./src/app/service/restorani.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ocena_service_1 = __webpack_require__("./src/app/service/ocena.service.ts");
var ocena_1 = __webpack_require__("./src/app/model/ocena.ts");
var PrikazRestoranaComponent = /** @class */ (function () {
    function PrikazRestoranaComponent(restoraniService, ocenaService, router) {
        this.restoraniService = restoraniService;
        this.ocenaService = ocenaService;
        this.router = router;
        this.restorani = [];
        this.temp = 3.5;
        this.vidiAdmin = false;
        this.vidiRegistrovani = false;
        this.listaOcena = [];
        this.klijent = JSON.parse(localStorage.getItem('korisnik'));
        if (this.klijent != null) {
            if (this.klijent.vrstaKlijenta == "Admin") {
                this.vidiAdmin = true;
            }
            if (this.klijent.vrstaKlijenta == "Registrovani") {
                this.vidiRegistrovani = true;
            }
        }
    }
    PrikazRestoranaComponent.prototype.ngOnInit = function () {
        //this.restoran.adresa = "neka adresa";
        //this.restoran.naziv = "naziv";
        //alert(this.restoran.adresa + "iz inita");
        this.vratiSve();
    };
    PrikazRestoranaComponent.prototype.vratiSve = function () {
        var _this = this;
        this.restoraniService.findAll().subscribe(function (succ) {
            _this.restorani = succ;
            _this.restorani.forEach(function (element) {
                _this.listaOcena.push(new ocena_1.Ocena());
            });
        }, function (err) {
            alert('desio se error kod loadovanja restorana');
        });
    };
    PrikazRestoranaComponent.prototype.VidiStolove = function (id) {
        this.router.navigate(['prikazStolova/' + id]);
    };
    PrikazRestoranaComponent.prototype.IzmeniRestoran = function (id) {
        this.router.navigate(['dodavanjeRestorana/' + id]);
    };
    PrikazRestoranaComponent.prototype.ObrisiRestoran = function (id) {
        var _this = this;
        //provera prvo
        var txt;
        var r = confirm("Da li ste sigurni da želite da obrišete restoran?");
        if (r == true) {
            txt = "You pressed OK!";
            this.restoraniService.delete(id).subscribe(function (succ) {
                _this.vratiSve();
            }, function (err) {
                alert('error');
            });
        }
        else {
            txt = "You pressed Cancel!";
        }
    };
    PrikazRestoranaComponent.prototype.kreirajSto = function (restoranId) {
        this.router.navigate(['dodavanjeStolova/' + restoranId + '/stolovi']);
    };
    PrikazRestoranaComponent.prototype.oceniServis = function (restoran, ocena) {
        //popunis
        ocena.klijent = this.klijent;
        ocena.restoran = restoran;
        //pozoves metodu
        this.ocenaService.create(ocena).subscribe(function (s) {
        });
    };
    PrikazRestoranaComponent = __decorate([
        core_1.Component({
            selector: 'app-prikaz-restorana',
            template: __webpack_require__("./src/app/component/prikaz-restorana/prikaz-restorana.component.html"),
            styles: [__webpack_require__("./src/app/component/prikaz-restorana/prikaz-restorana.component.css")]
        }),
        __metadata("design:paramtypes", [restorani_service_1.RestoraniService, ocena_service_1.OcenaService, router_1.Router])
    ], PrikazRestoranaComponent);
    return PrikazRestoranaComponent;
}());
exports.PrikazRestoranaComponent = PrikazRestoranaComponent;


/***/ }),

/***/ "./src/app/component/prikaz-stolova/prikaz-stolova.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/prikaz-stolova/prikaz-stolova.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-meni-bar></app-meni-bar>\n\n<div *ngFor = \"let i = index; let stocic of listaStolova\">\n  <h4 class=\"list-group-item-text\">Broj stola: {{stocic.brojStola}}</h4>\n  <h4 class=\"list-group-item-text\">Broj mesta: {{stocic.brojMesta}}</h4>\n\n  <button  *ngIf = \"vidiRegistrovani\" (click) = \"RezervisiSto(stocic.id)\"  class=\"btn btn-success\" > Rezerviši sto</button>\n  <button *ngIf = \"vidiAdmin\" (click) = \"ObrisiSto(stocic.id)\" class=\"btn btn-success\" >Obriši sto</button>\n  <button  *ngIf = \"vidiAdmin\" (click) = \"IzmeniSto(stocic.id)\"  class=\"btn btn-success\"  >Izmeni sto</button>\n  \n\n  \n  \n</div>\n"

/***/ }),

/***/ "./src/app/component/prikaz-stolova/prikaz-stolova.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var restorani_service_1 = __webpack_require__("./src/app/service/restorani.service.ts");
var sto_service_1 = __webpack_require__("./src/app/service/sto.service.ts");
var PrikazStolovaComponent = /** @class */ (function () {
    function PrikazStolovaComponent(restoraniService, route, router, stoService) {
        this.restoraniService = restoraniService;
        this.route = route;
        this.router = router;
        this.stoService = stoService;
        this.postojiDugme = true;
        this.listaStolova = [];
        this.vidiAdmin = false;
        this.vidiRegistrovani = false;
        this.klijent = JSON.parse(localStorage.getItem('korisnik'));
        if (this.klijent != null) {
            if (this.klijent.vrstaKlijenta == "Admin") {
                this.vidiAdmin = true;
            }
            if (this.klijent.vrstaKlijenta == "Registrovani") {
                this.vidiRegistrovani = true;
            }
        }
    }
    PrikazStolovaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.isDataAvailable = false;
            if (params['id'] != null) {
                _this.id = +params['id']; // (+) konvertuje string 'id' u broj
                //id postavljamo kao path parametar pomocu interpolacije stringa
                if (_this.id != null) {
                    _this.restoraniService.nadjiStolove(_this.id).subscribe(function (s) {
                        _this.listaStolova = s;
                    });
                }
            }
        });
    };
    PrikazStolovaComponent.prototype.IzmeniSto = function (idSto) {
        this.router.navigate(['dodavanjeStolova/' + this.id + '/stolovi/' + idSto]);
    };
    PrikazStolovaComponent.prototype.ObrisiSto = function (idSto) {
        var _this = this;
        var txt;
        var r = confirm("Da li ste sigurni da želite da obrišete sto?");
        if (r == true) {
            txt = "You pressed OK!";
            this.stoService.delete(idSto).subscribe(function (s) {
                _this.router.navigate(['restorani']);
            }, function (err) {
                alert('error');
            });
        }
        else {
            txt = "You pressed Cancel!";
        }
    };
    PrikazStolovaComponent.prototype.RezervisiSto = function (idSto) {
        //rezervacija/:restoranId/sto/:id
        this.router.navigate(['rezervacija/' + this.id + '/sto/' + idSto]);
    };
    PrikazStolovaComponent = __decorate([
        core_1.Component({
            selector: 'app-prikaz-stolova',
            template: __webpack_require__("./src/app/component/prikaz-stolova/prikaz-stolova.component.html"),
            styles: [__webpack_require__("./src/app/component/prikaz-stolova/prikaz-stolova.component.css")]
        }),
        __metadata("design:paramtypes", [restorani_service_1.RestoraniService, router_1.ActivatedRoute, router_1.Router, sto_service_1.StoService])
    ], PrikazStolovaComponent);
    return PrikazStolovaComponent;
}());
exports.PrikazStolovaComponent = PrikazStolovaComponent;


/***/ }),

/***/ "./src/app/component/registracija/registracija.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/registracija/registracija.component.html":
/***/ (function(module, exports) {

module.exports = "<app-meni-bar></app-meni-bar>\n\n<div class=\"container\">\n  <!-- <form class=\"well form-horizontal\" action=\" \" method=\"post\"  id=\"contact_form\" (ngSubmit)=\"login()\"> -->\n    <form class=\"well form-horizontal\" action=\" \" method=\"post\"  id=\"contact_form\" (ngSubmit)=\"registrovanje()\">\n<fieldset>\n\n<!-- Form Name -->\n<h2 style=\"margin-bottom: 25px; text-align: center;\" ><b> Registracija </b></h2><br>\n\n<!-- Text input-->\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\">Ime i prezime: </label>  \n  <div class=\"col-md-4 inputGroupContainer\">\n  <div class=\"input-group\">\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n  <input  name=\"first_name\" [(ngModel)]=\"klijent.imeIPrezime\" placeholder=\"Ime i prezime\" class=\"form-control\"  type=\"text\">\n    </div>\n  </div>\n</div>\n\n<!-- Text input-->\n\n<!-- <div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" >Prezime: </label> \n    <div class=\"col-md-4 inputGroupContainer\">\n    <div class=\"input-group\">\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n  <input name=\"last_name\" placeholder=\"Prezime\" class=\"form-control\"  type=\"text\">\n    </div>\n  </div>\n</div> -->\n\n<div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Email:</label>  \n      <div class=\"col-md-4 inputGroupContainer\">\n      <div class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n    <input name=\"email\" [(ngModel)]=\"klijent.email\" placeholder=\"Email adresa\" class=\"form-control\"  type=\"text\">\n      </div>\n    </div>\n  </div>\n  \n  \n  <!-- Text input-->\n  \n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\" >Lozinka:</label> \n      <div class=\"col-md-4 inputGroupContainer\">\n      <div class=\"input-group\">\n    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n    <input name=\"user_password\" [(ngModel)]=\"klijent.lozinka\" placeholder=\"Lozinka\" class=\"form-control\"  type=\"password\">\n    \n      </div>\n    </div>\n  </div>\n\n  \n  \n\n\n<!-- Button -->\n<div class=\"form-group text-center\">\n  <label class=\"col-md-4 control-label\"></label>\n  <div class=\"col-md-4\"><br>\n    <!-- <input type=\"submit\" class=\"btn btn-warning\"  value=\"Prijavi se \"> -->\n  <input type=\"submit\"  class=\"btn btn-warning\" value= \"Registruj se\" >\n  </div>  \n</div>\n\n</fieldset>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/component/registracija/registracija.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var klijent_1 = __webpack_require__("./src/app/model/klijent.ts");
var klijent_service_1 = __webpack_require__("./src/app/service/klijent.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var RegistracijaComponent = /** @class */ (function () {
    function RegistracijaComponent(klijentServis, router) {
        this.klijentServis = klijentServis;
        this.router = router;
        this.klijent = new klijent_1.Klijent();
    }
    RegistracijaComponent.prototype.ngOnInit = function () {
    };
    RegistracijaComponent.prototype.registrovanje = function () {
        var _this = this;
        this.klijent.vrstaKlijenta = "Registrovani";
        this.klijentServis.registrovanje(this.klijent).subscribe(function (s) {
            _this.klijent = s;
            _this.router.navigate(['login']);
        });
    };
    RegistracijaComponent = __decorate([
        core_1.Component({
            selector: 'app-registracija',
            template: __webpack_require__("./src/app/component/registracija/registracija.component.html"),
            styles: [__webpack_require__("./src/app/component/registracija/registracija.component.css")]
        }),
        __metadata("design:paramtypes", [klijent_service_1.KlijentService, router_1.Router])
    ], RegistracijaComponent);
    return RegistracijaComponent;
}());
exports.RegistracijaComponent = RegistracijaComponent;


/***/ }),

/***/ "./src/app/component/rezervacija/rezervacija.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/rezervacija/rezervacija.component.html":
/***/ (function(module, exports) {

module.exports = "<app-meni-bar></app-meni-bar>\n\n\n\n<div class=\"container\" style=\"display: flex; justify-content: center;\">\n  <div class=\"col-md-5 form\">\n      <div class=\"form-area\">  \n          <form role=\"form\"  #formPredmet=\"ngForm\">\n          <br style=\"clear:both\">\n                      <h3 style=\"margin-bottom: 25px; text-align: center;\">Rezervacija</h3>\n              \n            <div class=\"form-group\">\n              <label>Vreme rezervacije</label>\n              <input type=\"text\" class=\"form-control\"  id=\"vremeRezervacije\" name=\"vremeRezervacije\" placeholder=\"vremeRezervacije\" required [(ngModel)] = \"newRezervacija.vremeRezervacije\">\n            </div>\n            <button   type=\"button\" [disabled]=\"!formPredmet.valid\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"add()\">Rezerviši</button>\n            \n            <button type=\"button\" id=\"submit\" name=\"submit\" (click)=\"goBack()\">Odustani</button>   \n          </form>\n\n      </div>\n  </div>  \n  </div>\n"

/***/ }),

/***/ "./src/app/component/rezervacija/rezervacija.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rezervacija_service_1 = __webpack_require__("./src/app/service/rezervacija.service.ts");
var rezervacija_1 = __webpack_require__("./src/app/model/rezervacija.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var RezervacijaComponent = /** @class */ (function () {
    function RezervacijaComponent(rezervacijaService, route, router) {
        this.rezervacijaService = rezervacijaService;
        this.route = route;
        this.router = router;
        this.newRezervacija = new rezervacija_1.Rezervacija();
        this.postojiDugme = true;
    }
    RezervacijaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.isDataAvailable = false;
            _this.idRestorana = +params['restoranId'];
            _this.idSto = +params['id'];
            _this.klijent = JSON.parse(localStorage.getItem('korisnik'));
            if (_this.klijent != null) {
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
    };
    RezervacijaComponent.prototype.add = function (id) {
        var _this = this;
        //popuniti podatke
        this.newRezervacija.restoran.id = this.idRestorana;
        this.newRezervacija.rezervisanSto.id = this.idSto;
        this.newRezervacija.klijent = this.klijent;
        this.rezervacijaService.add(this.newRezervacija).subscribe(function (s) {
            _this.newRezervacija = s;
            _this.router.navigate(['prikazStolova/' + _this.idRestorana]);
        });
    };
    RezervacijaComponent.prototype.goBack = function () {
        //prikazStolova/:id
        this.router.navigate(['prikazStolova/' + this.idRestorana]);
    };
    RezervacijaComponent = __decorate([
        core_1.Component({
            selector: 'app-rezervacija',
            template: __webpack_require__("./src/app/component/rezervacija/rezervacija.component.html"),
            styles: [__webpack_require__("./src/app/component/rezervacija/rezervacija.component.css")]
        }),
        __metadata("design:paramtypes", [rezervacija_service_1.RezervacijaService, router_1.ActivatedRoute, router_1.Router])
    ], RezervacijaComponent);
    return RezervacijaComponent;
}());
exports.RezervacijaComponent = RezervacijaComponent;


/***/ }),

/***/ "./src/app/h-interceptor.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HInterceptorService = /** @class */ (function () {
    function HInterceptorService(injector) {
        this.injector = injector;
    } //u svaki zahtev postavo heder na aplication json
    HInterceptorService.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });
        return next.handle(request);
    };
    HInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], HInterceptorService);
    return HInterceptorService;
}());
exports.HInterceptorService = HInterceptorService;


/***/ }),

/***/ "./src/app/model/klijent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Klijent = /** @class */ (function () {
    function Klijent() {
        this.id = 0;
        this.imeIPrezime = "";
        this.email = "";
        this.lozinka = "";
        this.vrstaKlijenta = "";
    }
    return Klijent;
}());
exports.Klijent = Klijent;


/***/ }),

/***/ "./src/app/model/ocena.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var klijent_1 = __webpack_require__("./src/app/model/klijent.ts");
var restoran_1 = __webpack_require__("./src/app/model/restoran.ts");
var Ocena = /** @class */ (function () {
    function Ocena() {
        this.id = 0;
        this.klijent = new klijent_1.Klijent();
        this.ocena = 0;
        this.restoran = new restoran_1.Restoran();
    }
    return Ocena;
}());
exports.Ocena = Ocena;


/***/ }),

/***/ "./src/app/model/restoran.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Restoran = /** @class */ (function () {
    function Restoran() {
        this.id = 0;
        this.naziv = "";
        this.adresa = "";
        this.kontakt = "";
        this.stolovi = [];
    }
    return Restoran;
}());
exports.Restoran = Restoran;


/***/ }),

/***/ "./src/app/model/rezervacija.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var restoran_1 = __webpack_require__("./src/app/model/restoran.ts");
var sto_1 = __webpack_require__("./src/app/model/sto.ts");
var klijent_1 = __webpack_require__("./src/app/model/klijent.ts");
var Rezervacija = /** @class */ (function () {
    function Rezervacija() {
        this.id = 0;
        this.rezervisanSto = new sto_1.Sto();
        this.klijent = new klijent_1.Klijent();
        this.vremeRezervacije = "";
        this.restoran = new restoran_1.Restoran();
    }
    return Rezervacija;
}());
exports.Rezervacija = Rezervacija;


/***/ }),

/***/ "./src/app/model/sto.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var restoran_1 = __webpack_require__("./src/app/model/restoran.ts");
var Sto = /** @class */ (function () {
    function Sto() {
        this.id = 0;
        this.brojStola = 0;
        this.brojMesta = 0;
        this.restoran = new restoran_1.Restoran();
    }
    return Sto;
}());
exports.Sto = Sto;


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  There is nothing here!\n</h1>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/app/service/klijent.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var KlijentService = /** @class */ (function () {
    function KlijentService(http) {
        this.http = http;
    }
    KlijentService.prototype.logovanje = function (email, sifra) {
        return this.http.get("/api/klijenti/" + email + "/sifra/" + sifra);
    };
    KlijentService.prototype.registrovanje = function (klijent) {
        return this.http.post("/api/klijenti", klijent);
    };
    KlijentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], KlijentService);
    return KlijentService;
}());
exports.KlijentService = KlijentService;


/***/ }),

/***/ "./src/app/service/ocena.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var OcenaService = /** @class */ (function () {
    function OcenaService(http) {
        this.http = http;
    }
    OcenaService.prototype.create = function (newOcena) {
        return this.http.post("/api/ocena", newOcena);
    };
    OcenaService.prototype.average = function (id) {
        return this.http.get("/api/ocena/" + id);
    };
    OcenaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], OcenaService);
    return OcenaService;
}());
exports.OcenaService = OcenaService;


/***/ }),

/***/ "./src/app/service/restorani.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var RestoraniService = /** @class */ (function () {
    function RestoraniService(http) {
        this.http = http;
    }
    RestoraniService.prototype.add = function (newRestoran) {
        return this.http.post('/api/restorani', newRestoran);
    };
    RestoraniService.prototype.findOne = function (id) {
        return this.http.get("/api/restorani/" + id);
    };
    RestoraniService.prototype.findAll = function () {
        return this.http.get('/api/restorani');
    };
    RestoraniService.prototype.delete = function (id) {
        return this.http.delete("/api/restorani/" + id);
    };
    RestoraniService.prototype.update = function (id, newRestoran) {
        return this.http.put("/api/restorani/" + id, newRestoran);
    };
    RestoraniService.prototype.nadjiStolove = function (id) {
        return this.http.get("/api/restorani/" + id + "/prikaziStolove");
    };
    RestoraniService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RestoraniService);
    return RestoraniService;
}());
exports.RestoraniService = RestoraniService;


/***/ }),

/***/ "./src/app/service/rezervacija.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var RezervacijaService = /** @class */ (function () {
    function RezervacijaService(http) {
        this.http = http;
    }
    RezervacijaService.prototype.add = function (newRezervacija) {
        return this.http.post("/api/rezervacija", newRezervacija);
    };
    RezervacijaService.prototype.delete = function (id) {
        return this.http.delete("/api/rezervacija/" + id);
    };
    RezervacijaService.prototype.findAll = function (id) {
        return this.http.get("api/rezervacija/" + id + "/korisnik");
    };
    RezervacijaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RezervacijaService);
    return RezervacijaService;
}());
exports.RezervacijaService = RezervacijaService;


/***/ }),

/***/ "./src/app/service/sto.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var StoService = /** @class */ (function () {
    function StoService(http) {
        this.http = http;
    }
    StoService.prototype.add = function (newSto, idRestoran) {
        return this.http.post("/api/sto/" + idRestoran + "/restoran", newSto);
    };
    StoService.prototype.findOne = function (id) {
        return this.http.get("/api/sto/" + id);
    };
    StoService.prototype.findAll = function () {
        return this.http.get('/api/sto');
    };
    StoService.prototype.delete = function (id) {
        return this.http.delete("/api/sto/" + id);
    };
    StoService.prototype.update = function (id, newSto, idRestoran) {
        return this.http.put("/api/sto/" + id + "/restoran/" + idRestoran, newSto);
    };
    StoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StoService);
    return StoService;
}());
exports.StoService = StoService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("./node_modules/core-js/es6/symbol.js");
__webpack_require__("./node_modules/core-js/es6/object.js");
__webpack_require__("./node_modules/core-js/es6/function.js");
__webpack_require__("./node_modules/core-js/es6/parse-int.js");
__webpack_require__("./node_modules/core-js/es6/parse-float.js");
__webpack_require__("./node_modules/core-js/es6/number.js");
__webpack_require__("./node_modules/core-js/es6/math.js");
__webpack_require__("./node_modules/core-js/es6/string.js");
__webpack_require__("./node_modules/core-js/es6/date.js");
__webpack_require__("./node_modules/core-js/es6/array.js");
__webpack_require__("./node_modules/core-js/es6/regexp.js");
__webpack_require__("./node_modules/core-js/es6/map.js");
__webpack_require__("./node_modules/core-js/es6/set.js");
__webpack_require__("./node_modules/core-js/es6/reflect.js");
__webpack_require__("./node_modules/core-js/es7/reflect.js");
__webpack_require__("./node_modules/zone.js/dist/zone.js");


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map