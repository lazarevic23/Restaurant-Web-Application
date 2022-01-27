import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Sto } from 'app/model/sto';

@Injectable()
export class StoService {


  constructor(private http: HttpClient){
  }

  add(newSto: Sto, idRestoran: number): Observable<Sto>{
    return this.http.post<Sto>(`/api/sto/${idRestoran}/restoran`, newSto);
  }

  findOne(id: number): Observable<Sto>{
    return this.http.get<Sto>(`/api/sto/${id}`);
  }

  findAll(): Observable<Sto[]>{
    return this.http.get<Sto[]>('/api/sto');
  }

  delete(id: number): Observable<{}>{
    return this.http.delete(`/api/sto/${id}`);
  }

  update(id: number, newSto: Sto, idRestoran: number) : Observable<Sto> {
    return this.http.put<Sto>(`/api/sto/${id}/restoran/${idRestoran}`, newSto);
  }
}
