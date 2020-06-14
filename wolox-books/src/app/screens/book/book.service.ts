import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class BookService {

  private URL: string = environment.URL;

  constructor(private httpClient: HttpClient) { }

  list(): Observable<HttpResponse<Object>> {
    return this.httpClient.get(
      `${this.URL}/api/v1/booksClassic`,
      { observe: 'response' }
    );
  }
}
