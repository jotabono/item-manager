import { Injectable } from '@angular/core';
import { IItem } from 'src/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavouriteItemsService {

  favouriteItems: IItem[] = [];

  getFavouriteItems(): IItem[] {
    if(localStorage.getItem("favs")) this.favouriteItems = JSON.parse(localStorage.getItem("favs"));
    return this.favouriteItems;
  }  
}
