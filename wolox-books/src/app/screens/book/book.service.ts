import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {

  private URL: string = "http://private-anon-6605de9515-wbooksapi.apiary-mock.com"

  constructor(private httpClient: HttpClient) { }

  list(): Observable<HttpResponse<Object>> {
    return this.httpClient.get(
      `${this.URL}/api/v1/booksClassic`,
      { observe: 'response' }
    );
  }
}
