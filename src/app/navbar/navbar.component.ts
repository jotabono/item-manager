import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/models/interfaces';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	favItems: IItem[] | [];
  
  constructor(private favouriteItemsService: ItemsService) { }

  ngOnInit(): void {
    this.getFavouriteItems();
  }

  getFavouriteItems(): void {
		this.favouriteItemsService.getItems().subscribe((items) => {
			this.favItems = items;
		});
	}
}
