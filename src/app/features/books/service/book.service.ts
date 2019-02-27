import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Book } from './book';

@Injectable({
    providedIn: 'root',
})
export class BookService {
    private host = 'http://localhost:3000';
    private booksUrl = this.host + '/books';

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.booksUrl)
            .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    createBook(book: Book): Observable<Book> {
        const httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
        book.id = null;
        return this.http.post<Book>(this.booksUrl, book, { headers: httpHeader })
            .pipe(
                tap(data => console.log('createBook: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }
    private handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
