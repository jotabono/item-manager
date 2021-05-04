import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/models/interfaces';
import { FavouriteItemsService } from '../favourite-items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	favItems: IItem[] | [];
  
  constructor(private favouriteItemsService: FavouriteItemsService) { }

  ngOnInit(): void {
    this.getFavouriteItems();
  }

  getFavouriteItems(): void {
		this.favItems = this.favouriteItemsService.getFavouriteItems();
	}
  
	deleteFavourite(uuid): void {
		var uuidToDelete = uuid;
		const index: number = this.favItems.findIndex(({ uuid }) => uuid === uuidToDelete);
		if (index !== -1) {
			this.favItems.splice(index, 1);
			localStorage.setItem('favs', JSON.stringify(this.favItems));
		}
	}
}
