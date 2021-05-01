import { Component, Input, OnInit } from '@angular/core';
import {
  IItem
} from '../../models/interfaces';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
  items: IItem[] | [];
  filteredItems: any[] = [];
  
  orderField: string;
  orderCriteria: string;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
    this.orderField = 'title'
    this.orderCriteria = 'asc'
  }

	ngOnChanges(): void {
		if (this.groupFilters) this.filterItemsList(this.groupFilters, this.items);
	}

  filterItemsList(filters: any, items: any): void {
		this.filteredItems = this.items; 
		const keys = Object.keys(filters);
		const filterItem = item => {
			let result = keys.map(key => {
				if (!~key.indexOf('price')) {
					if(item[key]) {
						return String(item[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
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
			return result.reduce((acc, cur: any) => { return acc & cur }, 1)
		}
		this.filteredItems = this.items.filter(filterItem);
		}

  getItems(): void {
	this.itemsService.getItems().subscribe((items) => {
		this.items = items;
		this.filteredItems = this.filteredItems.length > 0 ? this.filteredItems : this.items;
	  });
  }
}
