import { BookService } from './../screens/book/book.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as BookActions from '../store/book.action';
import { of, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BookEffect {
  constructor(private actions: Actions, private bookService: BookService) {}

  loadBooks = createEffect(() => this.actions.pipe(
    ofType(BookActions.LIST_BOOK),
    mergeMap(() => 
      this.bookService.list()
      .pipe(
        map(books => new BookActions.ListedBook(books.body)),
        catchError(() => EMPTY)
      )
    )
  ));

  showBook = createEffect(() => this.actions.pipe(
    ofType(BookActions.SHOW_BOOK),
    mergeMap((data) =>
      this.bookService.show(data['payload'])
      .pipe(
        map(book => {
          return new BookActions.ShowedBook(book['body'])
        }),
        catchError(() => EMPTY)
      )
    )
  ));
}
