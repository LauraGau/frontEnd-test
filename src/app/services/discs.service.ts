import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

//Service used for the main page

@Injectable({
  providedIn: 'root'
})
export class DiscsService {

  private counter: number;

  url = 'https://api.discogs.com/users/ausamerika/collection/folders/0/releases';

  constructor(private http: HttpClient) {
    this.counter = 1;
  }

  getDiscs(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  setUrl(urlForNextPage: string) {
    this.url = urlForNextPage;
  }
}
