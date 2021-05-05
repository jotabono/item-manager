import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/models/interfaces';
import { FavouriteItemsService } from '../favourite-items.service';

@Component({
  selector: 'app-favourite-items',
  templateUrl: './favourite-items.component.html',
  styleUrls: ['./favourite-items.component.scss']
})
export class FavouriteItemsComponent implements OnInit {
  favItems: IItem[] | [];
  searchTitle: string;

  constructor(private favouriteItemsService: FavouriteItemsService) { }

  ngOnInit(): void {
    this.getFavouriteItems();
  }

  getFavouriteItems(): void {
    this.favItems = this.favouriteItemsService.getFavouriteItems();
  }

  deleteFavourite(itemUuid): void {
    const uuidToDelete = itemUuid;
    const index: number = this.favItems.findIndex(({ uuid }) => uuid === uuidToDelete);
    if (index !== -1) {
      this.favItems.splice(index, 1);
      localStorage.setItem('favs', JSON.stringify(this.favItems));
    }
  }

  search(textToSearch): void {
    this.searchTitle = textToSearch;
  }
}
