import { Injectable } from '@angular/core';
import { Klijent } from 'app/model/klijent';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KlijentService {

  constructor(private http: HttpClient) { }

    
  logovanje(email: string, sifra: string): Observable<Klijent>{
    return this.http.get<Klijent>(`/api/klijenti/${email}/sifra/${sifra}`);
  }

  registrovanje(klijent: Klijent): Observable<Klijent>{
    return this.http.post<Klijent>(`/api/klijenti`, klijent);
  }
}
