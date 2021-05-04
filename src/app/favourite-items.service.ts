import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IItem } from 'src/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavouriteItemsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient
  ) { }

  items = 'assets/items.json';

  getItems(): Observable<IItem[]> {
    return this.http
      .get<IItem[]>(this.items, this.httpOptions)
      .pipe(
        map((list) => {
          return list
        })
      )
      .pipe(catchError(this.handleError<IItem[]>('getItems', [])));
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
     private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
