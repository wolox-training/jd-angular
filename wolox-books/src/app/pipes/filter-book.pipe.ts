import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../screens/book/book';

@Pipe({
  name: 'filterBook'
})
export class FilterBookPipe implements PipeTransform {

  transform(books: Book[], search: string): any {
    if(!!search && search.trim() != "") {
      return books.filter(book => book.title.toLowerCase() == search.toLocaleLowerCase());
    }
    return books;
  }

}
