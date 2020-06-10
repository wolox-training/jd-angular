import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.list().subscribe(
      (response: HttpResponse<Object>) => {
        this.books = response.body
      },
      (error) => {
        console.error(`status: ${error.status}, error: ${error.message}`);
      }
    );
  }
}
