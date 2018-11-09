import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Book } from '../model/book';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  books: Book[];

  constructor(private Api:ApiService) { }

  ngOnInit() {
    this.getAllBooks().subscribe(
      (books) => {
        this.books = books;
      }
    );
  }

  getAllBooks() : Observable<Book[]>{
    return this.Api.getAllBooks();
  }
}
