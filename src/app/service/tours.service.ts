import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tours} from '../model/tours';

const API_URL = 'http://localhost:3000/tuors';
@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Tours[]> {
    // @ts-ignore
    return this.httpClient.get(API_URL);
  }
  save(tour): Observable<Tours> {
    return this.httpClient.post<Tours>(API_URL, tour);
  }
  getById(id): Observable<Tours> {
    return  this.httpClient.get<Tours>(API_URL + `/${id}`);
  }
  delete(id: number): Observable<Tours> {
    return this.httpClient.delete<Tours>(API_URL + `/${id}`);
  }
  update(id: number, tour: Tours): Observable<Tours> {
    return this.httpClient.put<Tours>(`${API_URL}/${id}`, tour);
  }
}
