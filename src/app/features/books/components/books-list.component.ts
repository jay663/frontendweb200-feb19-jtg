import { Component, OnInit, Input } from '@angular/core';
import { BookListItem } from '../models';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input() list: BookListItem[];
  constructor() { }

  ngOnInit() {
  }

}
