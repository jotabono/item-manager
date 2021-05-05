import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IItem } from '../../models/interfaces';
import { ItemsService } from '../items.service';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnChanges {
	@Input() groupFilters: object;
	@Input() sortProperty: string;
	@Input() sortCriteria: boolean;

	items: IItem[] | [];
	filteredItems: any[] = [];
	actualPage = 1;
	favouriteItems: any[] = [];

	constructor(private itemsService: ItemsService) { }

	ngOnInit(): void {
		this.getItems();
		localStorage.setItem('favs', JSON.stringify(this.favouriteItems));
		if (localStorage.getItem('favs')) {
			this.favouriteItems = JSON.parse(localStorage.getItem('favs'));
		}
	}

	ngOnChanges(): void {
		if (this.groupFilters) {
			this.filterItemsList(this.groupFilters, this.items);
		}
	}

	filterItemsList(filters: any, items: any): void {
		this.filteredItems = this.items;
		const keys = Object.keys(filters);
		const filterItem = item => {
			let result = keys.map(key => {
				if (!~key.indexOf('price')) {
					if (item[key]) {
						return String(item[key]).toLowerCase().includes(String(filters[key]).toLowerCase());
					} else {
						return false;
					}
				}
			});
			result = result.filter(it => it !== undefined);
			if (filters['priceto'] && filters['pricefrom']) {
				if (item['price']) {
					if (+item['price'] >= +filters['pricefrom'] && +item['price'] <= +filters['priceto']) {
						result.push(true);
					} else {
						result.push(false);
					}
				} else {
					result.push(false);
				}
			}
			return result.reduce((acc, cur: any) => acc & cur, 1);
		};
		this.filteredItems = this.items.filter(filterItem);
	}

	getItems(): void {
		this.itemsService.getItems().subscribe((items) => {
			this.items = items;
			this.filteredItems = this.filteredItems.length > 0 ? this.filteredItems : this.items;
		});
	}

	setFavourite(item): void {
		this.favouriteItems = [];
		this.favouriteItems = JSON.parse(localStorage.getItem('favs'));
		this.favouriteItems.push(item);
		localStorage.setItem('favs', JSON.stringify(this.favouriteItems));
	}

	deleteFavourite(itemUuid): void {
		const uuidToDelete = itemUuid;
		const index: number = this.favouriteItems.findIndex(({ uuid }) => uuid === uuidToDelete);
		if (index !== -1) {
			this.favouriteItems.splice(index, 1);
			localStorage.setItem('favs', JSON.stringify(this.favouriteItems));
		}
	}

	isFavourite(itemUuid): boolean {
		const uuidToCheck = itemUuid;
		let favs = [];
		if (localStorage.getItem('favs')){
			favs = JSON.parse(localStorage.getItem('favs'));
		}
		return favs.find(({ uuid }) => uuid === uuidToCheck);
	}
}
