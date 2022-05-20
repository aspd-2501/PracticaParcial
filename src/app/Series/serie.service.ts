import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Serie } from './serie'

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private ApiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]>
  {
    return this.http.get<Serie[]>(this.ApiUrl)
  }

}
