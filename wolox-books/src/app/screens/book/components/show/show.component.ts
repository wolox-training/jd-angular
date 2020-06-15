import { Book } from './../../book';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/app.state';
import * as BookActions from '../../../../store/book.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  id: string;

  book: Book;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {
    this.store.select('book').subscribe(book => {
      this.book = book['book'];
    });
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.store.dispatch(new BookActions.ShowBook(this.id))
  }

  goBack() {
    this.router.navigate(['books']);
  }
}
