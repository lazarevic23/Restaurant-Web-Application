import { Injectable } from '@angular/core';
import { Rezervacija } from 'app/model/rezervacija';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RezervacijaService {

  constructor(private http: HttpClient) { }

  add(newRezervacija: Rezervacija): Observable<Rezervacija>{
    return this.http.post<Rezervacija>(`/api/rezervacija`, newRezervacija);
  }

  delete(id: number): Observable<{}>{
    return this.http.delete(`/api/rezervacija/${id}`);
  }

  findAll(id: number): Observable<Rezervacija[]>{
    return this.http.get<Rezervacija[]>(`api/rezervacija/${id}/korisnik`);
  }
}
