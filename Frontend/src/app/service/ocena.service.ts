import { Injectable } from '@angular/core';
import { Ocena } from 'app/model/ocena';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OcenaService {

  constructor(private http: HttpClient) { }

  create (newOcena: Ocena ): Observable<Ocena>{
    return this.http.post<Ocena>(`/api/ocena`, newOcena);
  }

  average ( id: number): Observable<Ocena>{
    return this.http.get<Ocena>(`/api/ocena/${id}`);
  }


}
