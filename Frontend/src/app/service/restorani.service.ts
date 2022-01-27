import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restoran } from 'app/model/restoran';
import { Observable } from 'rxjs/Observable';
import { Sto } from 'app/model/sto';

@Injectable()
export class RestoraniService {

  constructor(private http: HttpClient){
  }

  add(newRestoran: Restoran): Observable<Restoran>{
    return this.http.post<Restoran>('/api/restorani', newRestoran);
  }

  findOne(id: number): Observable<Restoran>{
    return this.http.get<Restoran>(`/api/restorani/${id}`);
  }

  findAll(): Observable<Restoran[]>{
    return this.http.get<Restoran[]>('/api/restorani');
  }

  delete(id: number): Observable<{}>{
    return this.http.delete(`/api/restorani/${id}`);
  }

  update(id: number, newRestoran: Restoran) : Observable<Restoran> {
    return this.http.put<Restoran>(`/api/restorani/${id}`, newRestoran);
  }

  nadjiStolove(id: number): Observable<Sto[]>{
    return this.http.get<Sto[]>(`/api/restorani/${id}/prikaziStolove`);
  }


}
